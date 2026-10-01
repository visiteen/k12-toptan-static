(function(){
  const nativeWrite = Document.prototype.write;
  let patched = false;

  Document.prototype.write = function(){
    const args = Array.from(arguments);

    if (!patched && args.length && typeof args[0] === 'string' && args[0].includes('<header class="header"')) {
      let html = args.join('');
      const logo = '<img src="/assets/k12-kurumsal-logo.png?v=20261001-source1" alt="K12 Kurumsal — Kurumsal Eğitim Çözümleri ve Yönetim Merkezi" class="k12-source-logo">';

      html = html
        .replace('<span class="text-logo"><b>K12</b> KURUMSAL</span>', logo)
        .replace('<div class="text-logo footer-text-logo"><b>K12</b> KURUMSAL</div>', '<div class="footer-text-logo">' + logo + '</div>');

      html = html.replace('</head>', `<style id="k12-source-logo-style">
        .logo-wrap{width:260px!important;display:flex!important;align-items:center!important;justify-content:flex-start!important;overflow:visible!important}
        .logo-wrap .k12-source-logo{display:block!important;width:100%!important;height:auto!important;max-height:68px!important;object-fit:contain!important;object-position:left center!important}
        .footer .footer-text-logo{display:flex!important;align-items:center!important;min-height:70px!important;margin-bottom:14px!important}
        .footer .footer-text-logo .k12-source-logo{display:block!important;width:min(100%,320px)!important;height:auto!important;max-height:92px!important;object-fit:contain!important;object-position:left center!important}
        @media(max-width:1050px){.logo-wrap{width:220px!important}}
        @media(max-width:700px){.logo-wrap{width:195px!important}.logo-wrap .k12-source-logo{max-height:58px!important}.footer .footer-text-logo .k12-source-logo{width:min(100%,260px)!important}}
      </style></head>`);

      patched = true;
      Document.prototype.write = nativeWrite;
      return nativeWrite.call(this, html);
    }

    return nativeWrite.apply(this, args);
  };
})();
