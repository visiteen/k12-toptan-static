(function(){
  var STYLE_ID='k12-card-icons-style';
  var MARK='k12-card-icons-ready';

  function svg(paths){
    return '<span class="k12-card-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+paths+'</svg></span>';
  }

  var ICONS={
    'ölçme değerlendirme sistemi':svg('<path d="M4 19V9"></path><path d="M10 19V5"></path><path d="M16 19v-7"></path><path d="M3 19h18"></path><path d="M6 7l4-3 4 2 5-4"></path>'),
    'sıfır hata kitapçığı':svg('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z"></path><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5A2.5 2.5 0 0 1 20 21.5z"></path><path d="m8 11 1.5 1.5L12 10"></path>'),
    'kişiye özel soru bankası':svg('<circle cx="12" cy="12" r="7"></circle><circle cx="12" cy="12" r="3"></circle><path d="M12 5V2"></path><path d="M19 12h3"></path><path d="M12 19v3"></path><path d="M5 12H2"></path>'),
    'dijital eğitim destek sistemi':svg('<rect x="3" y="4" width="18" height="13" rx="2"></rect><path d="m10 8 5 2.5-5 2.5z"></path><path d="M8 21h8"></path><path d="M12 17v4"></path>'),

    'visiteen genel bakış':svg('<circle cx="8" cy="8" r="3"></circle><circle cx="16" cy="8" r="3"></circle><path d="M3 19c.8-3 2.6-5 5-5s4.2 2 5 5"></path><path d="M11 19c.8-3 2.6-5 5-5s4.2 2 5 5"></path>'),
    'kurumsal öğrenci gelişim yönetimi':svg('<path d="M4 19V12"></path><path d="M10 19V8"></path><path d="M16 19V4"></path><path d="M3 19h18"></path><path d="m5 9 4-3 3 2 6-5"></path>'),
    'kurumsal koçluk yönetimi':svg('<circle cx="12" cy="8" r="4"></circle><path d="M5 21c1-5 3.5-7 7-7s6 2 7 7"></path><path d="m17 4 2-2"></path><path d="m19 6 2-1"></path>'),
    'kurumsal akademik başarı yönetimi':svg('<path d="M7 4h10v4a5 5 0 0 1-10 0z"></path><path d="M7 6H4v2a4 4 0 0 0 4 4"></path><path d="M17 6h3v2a4 4 0 0 1-4 4"></path><path d="M12 13v4"></path><path d="M9 21h6"></path><path d="M10 17h4"></path>'),
    'maarif öğretmen akademisi':svg('<path d="m3 9 9-5 9 5-9 5z"></path><path d="M7 11.5V16c0 1.5 2.2 3 5 3s5-1.5 5-3v-4.5"></path><path d="M21 9v6"></path>'),
    'maarif öğretmen radarı':svg('<circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="4"></circle><path d="M12 12l5-5"></path><path d="M12 4V2"></path><path d="M20 12h2"></path>'),
    'maarif gpt':svg('<path d="M9 4a3 3 0 0 1 6 0v1a3 3 0 0 1 2.5 4.6A3 3 0 0 1 17 15v1a3 3 0 0 1-5 2.2A3 3 0 0 1 7 16v-1a3 3 0 0 1-.5-5.4A3 3 0 0 1 9 5z"></path><path d="M12 5v14"></path><path d="M8 9h8"></path><path d="M8 15h8"></path>'),

    'özdebir yayınları bölge bayiliği':svg('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z"></path><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5A2.5 2.5 0 0 1 20 21.5z"></path>'),
    'paraf deneme grubu bölge bayiliği':svg('<path d="M6 3h9l4 4v14H6z"></path><path d="M15 3v5h5"></path><path d="M9 12h6"></path><path d="M9 16h6"></path>'),
    'sınav ölçme değerlendirme':svg('<rect x="5" y="3" width="14" height="18" rx="2"></rect><path d="m8 9 2 2 4-4"></path><path d="M8 15h8"></path>'),
    'kurumsal deneme takip sistemi':svg('<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M7 3v4"></path><path d="M17 3v4"></path><path d="M3 10h18"></path><path d="M8 14h3"></path><path d="M13 14h3"></path><path d="M8 18h3"></path>'),

    'yetkinlik geliştirme programları':svg('<path d="M5 18c3-6 7-10 14-13"></path><path d="M15 5h4v4"></path><circle cx="5" cy="18" r="2"></circle>'),
    'yetkinlik geliştirme atölyeleri':svg('<path d="m14 5 5 5"></path><path d="M12 7l5 5"></path><path d="m4 20 7-7"></path><path d="m5 8 11 11"></path><path d="M3 6l3-3 4 4-3 3z"></path>'),
    'yetkinlik geliştirme seminerleri':svg('<rect x="4" y="4" width="16" height="11" rx="2"></rect><path d="M8 20h8"></path><path d="M12 15v5"></path><circle cx="9" cy="9" r="2"></circle><path d="M13 8h4"></path><path d="M13 11h3"></path>'),

    'kurumsal yapay zekâ çözümleri':svg('<rect x="6" y="6" width="12" height="12" rx="2"></rect><path d="M9 2v4"></path><path d="M15 2v4"></path><path d="M9 18v4"></path><path d="M15 18v4"></path><path d="M2 9h4"></path><path d="M2 15h4"></path><path d="M18 9h4"></path><path d="M18 15h4"></path><path d="M9 13h6"></path><path d="M10 10h4"></path>')
  };

  function norm(t){return (t||'').toLowerCase().replace(/\s+/g,' ').trim();}

  function style(){
    if(document.getElementById(STYLE_ID)) return;
    var s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent='.catalog-card .catalog-top>span{display:inline-flex!important;align-items:center!important;justify-content:flex-start!important;width:28px!important;height:28px!important;font-size:0!important;line-height:0!important}.catalog-card .catalog-top>span .k12-card-icon{display:inline-flex;width:26px;height:26px;align-items:center;justify-content:center;color:inherit}.catalog-card .catalog-top>span .k12-card-icon svg{display:block;width:24px;height:24px}.k12-ai-vip .catalog-top>span .k12-card-icon svg{width:25px;height:25px}';
    document.head.appendChild(s);
  }

  function apply(){
    document.querySelectorAll('.catalog-card').forEach(function(card){
      var top=card.querySelector('.catalog-top>span');
      var h=card.querySelector('h3');
      if(!top || !h || top.querySelector('.k12-card-icon')) return;

      var key=norm(h.textContent);
      if(card.classList.contains('k12-ai-vip') || card.closest('.k12-ai-family')) key='kurumsal yapay zekâ çözümleri';

      var icon=ICONS[key];
      if(icon) top.innerHTML=icon;
    });
  }

  function init(){
    style();
    apply();
    if(!document.getElementById(MARK)){
      var m=document.createElement('span');m.id=MARK;m.hidden=true;document.body.appendChild(m);
    }
    var obs=new MutationObserver(function(){apply();});
    obs.observe(document.body,{childList:true,subtree:true});
  }

  var tries=0;
  var timer=setInterval(function(){
    tries++;
    if(document.querySelector('.catalog-card')){clearInterval(timer);init();}
    else if(tries>120){clearInterval(timer);}
  },100);
})();