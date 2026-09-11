(function(){
  var MARK='k12-yetkinlik-katmani';
  if(document.getElementById(MARK)) return;

  function addStyle(){
    if(document.getElementById('k12-yetkinlik-css')) return;
    var s=document.createElement('style');
    s.id='k12-yetkinlik-css';
    s.textContent='.k12-yetkinlik-family{margin-top:58px}.k12-yetkinlik-family .catalog-family-head{border-top:3px solid #6D28D9;padding-top:24px}.k12-yetkinlik-family .catalog-family-head span{color:#6D28D9}.k12-yetkinlik-card{position:relative;overflow:hidden}.k12-yetkinlik-card:before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:#6D28D9}.k12-yetkinlik-card .catalog-top span{color:#6D28D9}.k12-yetkinlik-card .mini-list{margin-top:18px;padding-top:15px;border-top:1px solid var(--line);display:flex;gap:7px;flex-wrap:wrap}.k12-yetkinlik-card .mini-list em{font-style:normal;font-size:10px;font-weight:800;color:#5B21B6;background:#F3E8FF;border:1px solid #E9D5FF;border-radius:999px;padding:6px 8px}.k12-yetkinlik-detail{background:linear-gradient(135deg,#F7F4FF,#fff);border-top:1px solid #EDE9FE;border-bottom:1px solid #EDE9FE}.k12-yetkinlik-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.k12-yetkinlik-box{background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px;min-height:310px}.k12-yetkinlik-box .num{font-size:11px;color:#6D28D9;font-weight:800;letter-spacing:.08em}.k12-yetkinlik-box h3{margin:16px 0 8px;color:var(--deep)}.k12-yetkinlik-box>p{font-size:12px;color:var(--muted);min-height:42px}.k12-yetkinlik-items{margin-top:20px;display:grid;gap:9px}.k12-yetkinlik-item{padding:10px 12px;border-radius:10px;background:#FAFAFF;border:1px solid #EEEAFB;font-size:12px;color:var(--slate)}.k12-yetkinlik-item strong{display:block;color:var(--deep);font-size:12px}.k12-yetkinlik-item small{display:block;color:var(--muted);margin-top:2px}.k12-global-proof{display:flex;gap:7px;flex-wrap:wrap;margin-top:10px}.k12-global-proof span{font-size:9px;font-weight:800;border-radius:999px;padding:5px 7px;background:#F3E8FF;color:#5B21B6}.mega .k12-future-link strong{color:#5B21B6}@media(min-width:1051px){.mega-grid.k12-six-col{grid-template-columns:repeat(5,1fr) 1.1fr;gap:20px}}@media(max-width:850px){.k12-yetkinlik-grid{grid-template-columns:1fr}}';
    document.head.appendChild(s);
  }

  function addMega(){
    var grid=document.querySelector('#mega .mega-grid');
    if(!grid || grid.querySelector('.k12-future-link')) return;
    grid.classList.add('k12-six-col');
    var col=document.createElement('div');
    col.className='mega-col k12-future-link';
    col.innerHTML='<strong>04 · Yetkinlik & Gelecek</strong><a href="#yetkinlik-programlari">Gelişim Programları</a><a href="#yetkinlik-atolyeleri">Gelişim Atölyeleri</a><a href="#yetkinlik-seminerleri">Gelişim Seminerleri</a>';
    var feature=grid.querySelector('.feature-card');
    grid.insertBefore(col,feature||null);
  }

  function addMobile(){
    var sub=document.getElementById('mobileSub');
    if(!sub || sub.querySelector('[href="#yetkinlik-ve-gelecek"]')) return;
    var a=document.createElement('a');
    a.href='#yetkinlik-ve-gelecek';
    a.textContent='Yetkinlik & Gelecek Gelişim';
    sub.appendChild(a);
  }

  function addCatalog(){
    var wrap=document.querySelector('#products > .wrap');
    if(!wrap || wrap.querySelector('.k12-yetkinlik-family')) return;
    var intro=wrap.querySelector('.section-head p');
    if(intro) intro.textContent='Dört ana sistem altında ölçme-değerlendirme, öğrenci gelişimi, öğretmen gelişimi, kurumsal sınav operasyonu ve gelecek yetkinlikleri çözümlerinin tamamı.';
    var family=document.createElement('section');
    family.className='catalog-family k12-yetkinlik-family';
    family.innerHTML='<div class="catalog-family-head"><div><span>04</span><h3>Yetkinlik ve Gelecek Gelişim</h3></div><p>Programlar · Atölyeler · Seminerler</p></div>'+
      '<div class="catalog-grid">'+
      '<a class="catalog-card k12-yetkinlik-card" href="#yetkinlik-programlari"><div class="catalog-top"><span>04</span><b>→</b></div><h3>Yetkinlik Geliştirme Programları</h3><p>Yaş düzeyine göre yapılandırılmış uzun dönemli gelişim programları.</p><div class="mini-list"><em>Future Days</em><em>InnoTeen</em><em>InnoHub</em></div></a>'+
      '<a class="catalog-card k12-yetkinlik-card" href="#yetkinlik-atolyeleri"><div class="catalog-top"><span>04</span><b>→</b></div><h3>Yetkinlik Geliştirme Atölyeleri</h3><p>Gelecek becerilerini deneyim ve üretim yoluyla geliştiren modüler çalışmalar.</p><div class="mini-list"><em>Sustaineer</em><em>GenAI School</em><em>AI Fusion Lab</em></div></a>'+
      '<a class="catalog-card k12-yetkinlik-card" href="#yetkinlik-seminerleri"><div class="catalog-top"><span>04</span><b>→</b></div><h3>Yetkinlik Geliştirme Seminerleri</h3><p>Farkındalık, yönelim ve gelişim odaklı yüksek etkili kısa formatlar.</p><div class="mini-list"><em>Future Talks</em><em>THub</em><em>JoHub</em><em>CoHub</em></div></a>'+
      '</div>';
    wrap.appendChild(family);
  }

  function item(title,sub,proof){
    return '<div class="k12-yetkinlik-item"><strong>'+title+'</strong>'+(sub?'<small>'+sub+'</small>':'')+(proof||'')+'</div>';
  }

  function addDetail(){
    if(document.getElementById('yetkinlik-ve-gelecek')) return;
    var products=document.getElementById('products');
    if(!products) return;
    var proof='<div class="k12-global-proof"><span>İngiltere Sertifikalı</span><span>15+ Ülke · 300+ Üniversite</span><span>BTM Desteği</span></div>';
    var programHtml=item('Future Days · 1–4. Sınıf','Keşif · Merak · Üretim · Geleceğe Hazırlık','')+
      item('InnoTeen · 5–8. Sınıf','İnovasyon · Girişimcilik · Problem Çözme','')+
      item('InnoHub · 9–12. Sınıf','Girişimcilik · Kariyer · Global Yetkinlik',proof);
    var workshopNames=['Sustaineer','GenAI School','AI Fusion Lab','Character 24','VisiMot','New Age 8 Literacy Skills'];
    var seminarNames=['Basit Olan Mükemmeldir','Design the Future 7+8','Innoved Future Talks -1','Innoved Future Talks -2','THub (Target Hub)','JoHub (The Future of Jobs Hub)','CoHub (New Age Competencies Hub)','K.E.K. ile Sınava Hazırlık'];
    var workshopHtml=workshopNames.map(function(x){return item(x,'','');}).join('');
    var seminarHtml=seminarNames.map(function(x){return item(x,'','');}).join('');
    var sec=document.createElement('section');
    sec.className='section k12-yetkinlik-detail';
    sec.id='yetkinlik-ve-gelecek';
    sec.innerHTML='<div class="wrap"><div class="section-head"><div><div class="eyebrow">Yetkinlik & Gelecek Gelişim</div><h2>Akademik başarının ötesinde, geleceğe hazır bireyler.</h2></div><p>Öğrencilerin yaş düzeylerine ve gelişim ihtiyaçlarına göre yapılandırılmış program, atölye ve seminerlerden oluşan gelişim ekosistemi.</p></div>'+
      '<div class="k12-yetkinlik-grid">'+
      '<article class="k12-yetkinlik-box" id="yetkinlik-programlari"><div class="num">01 · PROGRAMLAR</div><h3>Yetkinlik Geliştirme Programları</h3><p>Uzun dönemli, yaş grubuna göre yapılandırılmış gelişim programları.</p><div class="k12-yetkinlik-items">'+programHtml+'</div></article>'+
      '<article class="k12-yetkinlik-box" id="yetkinlik-atolyeleri"><div class="num">02 · ATÖLYELER</div><h3>Yetkinlik Geliştirme Atölyeleri</h3><p>Belirli bir yetkinliği deneyim, uygulama ve üretim yoluyla geliştiren çalışmalar.</p><div class="k12-yetkinlik-items">'+workshopHtml+'</div></article>'+
      '<article class="k12-yetkinlik-box" id="yetkinlik-seminerleri"><div class="num">03 · SEMİNERLER</div><h3>Yetkinlik Geliştirme Seminerleri</h3><p>Farkındalık, yönelim ve davranış değişimi oluşturan kısa formatlar.</p><div class="k12-yetkinlik-items">'+seminarHtml+'</div></article>'+
      '</div></div>';
    products.insertAdjacentElement('afterend',sec);
  }

  function addFooter(){
    var footer=document.querySelector('.footer');
    if(!footer) return;
    var cols=footer.querySelectorAll('.footer-grid > div');
    for(var i=0;i<cols.length;i++){
      var h=cols[i].querySelector('h4');
      if(h && h.textContent.trim()==='Çözümler' && !cols[i].querySelector('[href="#yetkinlik-ve-gelecek"]')){
        var a=document.createElement('a');a.href='#yetkinlik-ve-gelecek';a.textContent='Yetkinlik & Gelecek';cols[i].appendChild(a);break;
      }
    }
  }

  function init(){
    addStyle();addMega();addMobile();addCatalog();addDetail();addFooter();
    var m=document.createElement('span');m.id=MARK;m.hidden=true;document.body.appendChild(m);
  }

  var tries=0;
  var timer=setInterval(function(){
    tries++;
    if(document.getElementById('products')){clearInterval(timer);init();}
    else if(tries>120){clearInterval(timer);}
  },100);
})();