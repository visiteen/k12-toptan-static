(function(){
  const LOGO_SRC='/assets/k12-kurumsal-logo.png?v=20261001-live2';

  function logoImg(){
    const img=document.createElement('img');
    img.src=LOGO_SRC;
    img.alt='K12 Kurumsal — Kurumsal Eğitim Çözümleri ve Yönetim Merkezi';
    img.setAttribute('data-k12-live-logo','1');
    img.style.display='block';
    img.style.width='100%';
    img.style.height='auto';
    img.style.objectFit='contain';
    return img;
  }

  function ensureStyles(){
    if(document.getElementById('k12-live-logo-style')) return;
    const s=document.createElement('style');
    s.id='k12-live-logo-style';
    s.textContent=`
      .logo-wrap{width:250px!important;display:flex!important;align-items:center!important;overflow:visible!important}
      .logo-wrap img[data-k12-live-logo]{max-height:60px;width:100%!important;object-fit:contain!important}
      .footer .footer-text-logo{display:flex!important;align-items:center!important;min-height:58px!important;margin-bottom:14px!important}
      .footer .footer-text-logo img[data-k12-live-logo]{width:min(100%,300px)!important;max-height:82px!important;object-fit:contain!important}
      @media(max-width:1050px){.logo-wrap{width:220px!important}}
      @media(max-width:700px){.logo-wrap{width:196px!important}.footer .footer-text-logo img[data-k12-live-logo]{width:min(100%,250px)!important}}
    `;
    (document.head||document.documentElement).appendChild(s);
  }

  function apply(){
    ensureStyles();

    document.querySelectorAll('.logo-wrap').forEach(function(el){
      el.setAttribute('aria-label','K12 Kurumsal ana sayfa');
      const current=el.querySelector('img[data-k12-live-logo]');
      if(!current){
        el.replaceChildren(logoImg());
      } else if(current.getAttribute('src')!==LOGO_SRC){
        current.setAttribute('src',LOGO_SRC);
      }
    });

    document.querySelectorAll('.footer-text-logo').forEach(function(el){
      const current=el.querySelector('img[data-k12-live-logo]');
      if(!current){
        el.replaceChildren(logoImg());
      } else if(current.getAttribute('src')!==LOGO_SRC){
        current.setAttribute('src',LOGO_SRC);
      }
    });

    document.querySelectorAll('.header .text-logo').forEach(function(el){
      if(el.closest('.logo-wrap')) return;
      el.replaceWith(logoImg());
    });
  }

  function start(){
    apply();
    [50,150,400,900,1800,3500].forEach(function(ms){setTimeout(apply,ms)});
    let queued=false;
    const observer=new MutationObserver(function(){
      if(queued) return;
      queued=true;
      requestAnimationFrame(function(){queued=false;apply()});
    });
    observer.observe(document.documentElement,{subtree:true,childList:true});
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true});
  else start();
})();
