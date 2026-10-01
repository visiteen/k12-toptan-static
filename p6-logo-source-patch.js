(function(){
  const nativeWrite = Document.prototype.write;
  let patched = false;

  Document.prototype.write = function(){
    const args = Array.from(arguments);

    if (!patched && args.length && typeof args[0] === 'string' && args[0].includes('<header class="header"')) {
      let html = args.join('');
      const logo = '<img src="/assets/k12-kurumsal-logo-final.webp?v=20261001-final" alt="K12 Kurumsal — Kurumsal Eğitim Çözümleri ve Yönetim Merkezi" class="k12-source-logo">';

      html = html
        .replace('<span class="text-logo"><b>K12</b> KURUMSAL</span>', logo)
        .replace('<div class="text-logo footer-text-logo"><b>K12</b> KURUMSAL</div>', '<div class="footer-text-logo">' + logo + '</div>');

      html = html.replace('</head>', `<style id="k12-source-logo-style">
        .logo-wrap{width:320px!important;display:flex!important;align-items:center!important;justify-content:flex-start!important;overflow:visible!important}
        .logo-wrap .k12-source-logo{display:block!important;width:100%!important;height:auto!important;max-height:58px!important;object-fit:contain!important;object-position:left center!important;filter:none!important;opacity:1!important;mix-blend-mode:normal!important}
        .footer .footer-text-logo{display:flex!important;align-items:center!important;min-height:70px!important;margin-bottom:14px!important}
        .footer .footer-text-logo .k12-source-logo{display:block!important;width:min(100%,340px)!important;height:auto!important;max-height:72px!important;object-fit:contain!important;object-position:left center!important;filter:none!important;opacity:1!important;mix-blend-mode:normal!important}

        .k12-header-cta-compact{
          display:inline-flex!important;
          align-items:center!important;
          justify-content:center!important;
          width:auto!important;
          min-width:0!important;
          max-width:none!important;
          min-height:54px!important;
          padding:12px 22px!important;
          border-radius:18px!important;
          font-size:17px!important;
          line-height:1.15!important;
          gap:9px!important;
          white-space:nowrap!important;
        }
        .k12-header-cta-compact *{font-size:inherit!important;line-height:inherit!important}

        @media(max-width:1200px){.logo-wrap{width:285px!important}}
        @media(max-width:1050px){
          .logo-wrap{width:245px!important}
          .k12-header-cta-compact{min-height:50px!important;padding:11px 18px!important;font-size:16px!important;border-radius:17px!important;gap:8px!important}
        }
        @media(max-width:700px){
          .logo-wrap{width:220px!important}
          .logo-wrap .k12-source-logo{max-height:52px!important}
          .footer .footer-text-logo .k12-source-logo{width:min(100%,280px)!important}
          .k12-header-cta-compact{min-height:48px!important;padding:10px 16px!important;font-size:15px!important;border-radius:16px!important}
        }
      </style></head>`);

      html = html.replace('</body>', `<script id="k12-header-cta-compact-script">(function(){
        var target='Kurumunuz İçin Çözüm Alın';
        var nodes=document.querySelectorAll('a,button');
        for(var i=0;i<nodes.length;i++){
          var txt=(nodes[i].textContent||'').replace(/\\s+/g,' ').trim();
          if(txt.indexOf(target)!==-1){
            nodes[i].classList.add('k12-header-cta-compact');
            break;
          }
        }
      })();<\/script></body>`);

      patched = true;
      Document.prototype.write = nativeWrite;
      return nativeWrite.call(this, html);
    }

    return nativeWrite.apply(this, args);
  };
})();
