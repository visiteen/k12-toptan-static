(function(){
  var MARK='k12-yetkinlik-katmani';
  if(document.getElementById(MARK)) return;

  function addStyle(){
    if(document.getElementById('k12-yetkinlik-css')) return;
    var s=document.createElement('style');
    s.id='k12-yetkinlik-css';
    s.textContent='.k12-yetkinlik-family{margin-top:58px}.k12-yetkinlik-family .catalog-family-head{border-top:3px solid #fe6203;padding-top:24px}.k12-yetkinlik-family .catalog-family-head span{color:#fe6203}.k12-yetkinlik-card{position:relative;overflow:hidden}.k12-yetkinlik-card:before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:#fe6203}.k12-yetkinlik-card .catalog-top span{color:#fe6203}.k12-yetkinlik-card .mini-list{margin-top:18px;padding-top:15px;border-top:1px solid var(--line);display:flex;gap:7px;flex-wrap:wrap}.k12-yetkinlik-card .mini-list em{font-style:normal;font-size:10px;font-weight:800;color:#c94e02;background:#fff2e8;border:1px solid #ffd2b5;border-radius:999px;padding:6px 8px}.k12-yetkinlik-detail{background:linear-gradient(135deg,#fff8f3,#fff);border-top:1px solid #ffe6d6;border-bottom:1px solid #ffe6d6}.k12-yetkinlik-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.k12-yetkinlik-box{background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px;min-height:310px}.k12-yetkinlik-box .num{font-size:11px;color:#fe6203;font-weight:800;letter-spacing:.08em}.k12-yetkinlik-box h3{margin:16px 0 8px;color:var(--deep)}.k12-yetkinlik-box>p{font-size:12px;color:var(--muted);min-height:42px}.k12-yetkinlik-items{margin-top:20px;display:grid;gap:9px}.k12-yetkinlik-item{padding:10px 12px;border-radius:10px;background:#fffaf7;border:1px solid #ffdfcc;font-size:12px;color:var(--slate)}.k12-yetkinlik-item strong{display:block;color:var(--deep);font-size:12px}.k12-yetkinlik-item small{display:block;color:var(--muted);margin-top:2px}.k12-global-proof{display:flex;gap:7px;flex-wrap:wrap;margin-top:10px}.k12-global-proof span{font-size:9px;font-weight:800;border-radius:999px;padding:5px 7px;background:#fff2e8;color:#c94e02}.mega .k12-future-link strong{color:#c94e02}@media(min-width:1051px){.mega-grid.k12-six-col{grid-template-columns:repeat(5,1fr) 1.1fr;gap:20px}}@media(max-width:850px){.k12-yetkinlik-grid{grid-template-columns:1fr}}';
    document.head.appendChild(s);
  }

  function addMega(){
    var grid=document.querySelector('#mega .mega-grid');
    if(!grid || grid.querySelector('.k12-future-link')) return;
    grid.classList.add('k12-six-col');
    var col=document.createElement('div');
    col.className='mega-col k12-future-link';
    col.innerHTML='<strong>05 · Yetkinlik & Gelecek</strong><a href="#yetkinlik-programlari">Gelişim Programları</a><a href="#yetkinlik-atolyeleri">Gelişim Atölyeleri</a><a href="#yetkinlik-seminerleri">Gelişim Seminerleri</a>';
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
    family.innerHTML='<div class="catalog-family-head"><div><span>05</span><h3>Yetkinlik ve Gelecek Gelişim</h3></div><p>Programlar · Atölyeler · Seminerler</p></div>'+
      '<div class="catalog-grid">'+
      '<a class="catalog-card k12-yetkinlik-card" href="#yetkinlik-programlari"><div class="catalog-top"><span>05</span><b>→</b></div><h3>Yetkinlik Geliştirme Programları</h3><p>Yaş düzeyine göre yapılandırılmış uzun dönemli gelişim programları.</p><div class="mini-list"><em>Future Days</em><em>InnoTeen</em><em>InnoHub</em></div></a>'+
      '<a class="catalog-card k12-yetkinlik-card" href="#yetkinlik-atolyeleri"><div class="catalog-top"><span>05</span><b>→</b></div><h3>Yetkinlik Geliştirme Atölyeleri</h3><p>Gelecek becerilerini deneyim ve üretim yoluyla geliştiren modüler çalışmalar.</p><div class="mini-list"><em>Sustaineer</em><em>GenAI School</em><em>AI Fusion Lab</em></div></a>'+
      '<a class="catalog-card k12-yetkinlik-card" href="#yetkinlik-seminerleri"><div class="catalog-top"><span>05</span><b>→</b></div><h3>Yetkinlik Geliştirme Seminerleri</h3><p>Farkındalık, yönelim ve gelişim odaklı yüksek etkili kısa formatlar.</p><div class="mini-list"><em>Future Talks</em><em>THub</em><em>JoHub</em><em>CoHub</em></div></a>'+
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


  /* Solution Finder integration */
  var futureNeedSelected=false;
  var FUTURE_NEED='Yetkinlik & Gelecek Gelişim';
  var futurePractices=[];
  var FUTURE_PRACTICES=[
    'Uzun Dönemli Öğrenci Gelişim Programı',
    'Atölye / Workshop Çalışmaları',
    'Seminer / Konferans Çalışmaları',
    'Girişimcilik & İnovasyon Programları',
    'Yapay Zekâ / Teknoloji Atölyeleri',
    'Kariyer & Gelecek Meslekleri Çalışmaları',
    'Değerler / Karakter Gelişimi',
    'Bu Alanda Henüz Sistematik Bir Çalışmamız Yok'
  ];

  function enhanceSolutionFinder(){
    var wb=document.getElementById('wizardBody');
    if(!wb) return;

    /* Step 3: add a real need choice by proxying the existing lead engine */
    var choices=wb.querySelector('.choices');
    var proxy=wb.querySelector('[data-need="Öğrenci Gelişimi"]');
    if(choices && proxy && !wb.querySelector('[data-k12-future-need]')){
      var btn=document.createElement('button');
      btn.type='button';
      btn.className='choice multi'+(futureNeedSelected?' selected':'');
      btn.setAttribute('data-k12-future-need','1');
      btn.innerHTML='Yetkinlik &amp; Gelecek Gelişim<small>Programlar, atölyeler ve seminerlerle gelecek becerileri gelişimi.</small>';
      btn.addEventListener('click',function(){
        var p=wb.querySelector('[data-need="Öğrenci Gelişimi"]');
        if(!p) return;
        futureNeedSelected=!futureNeedSelected;
        p.dataset.need=FUTURE_NEED;
        p.click();
        setTimeout(enhanceSolutionFinder,0);
      });
      choices.appendChild(btn);
    }

    /* Step 4: ask about current development practices only when relevant */
    var systemNote=document.getElementById('leadSystemNote');
    if(systemNote && futureNeedSelected && !wb.querySelector('.k12-future-practices')){
      var block=document.createElement('div');
      block.className='k12-future-practices';
      block.style.cssText='margin-top:22px;padding:20px;border:1px solid #ffd2b5;border-radius:16px;background:#fff8f3';
      block.innerHTML='<div style="font-size:11px;font-weight:800;letter-spacing:.08em;color:#fe6203;margin-bottom:7px">YETKİNLİK & GELECEK GELİŞİM</div>'+
        '<h4 style="margin:0 0 6px;color:var(--deep);font-size:18px">Mevcut Gelişim Uygulamaları</h4>'+
        '<p style="margin:0 0 14px;color:var(--muted);font-size:12px">Kurumunuzda öğrencilerin gelecek becerileri ve yetkinlik gelişimi için hâlihazırda hangi çalışmalar yürütülüyor?</p>'+
        '<div class="choices k12-future-practice-choices"></div>';
      systemNote.closest('.field').before(block);
      var pc=block.querySelector('.k12-future-practice-choices');
      FUTURE_PRACTICES.forEach(function(label){
        var b=document.createElement('button');
        b.type='button';
        b.className='choice multi'+(futurePractices.includes(label)?' selected':'');
        b.textContent=label;
        b.addEventListener('click',function(){
          var none='Bu Alanda Henüz Sistematik Bir Çalışmamız Yok';
          if(label===none){
            futurePractices=[none];
          }else{
            futurePractices=futurePractices.filter(function(x){return x!==none;});
            var i=futurePractices.indexOf(label);
            if(i>=0) futurePractices.splice(i,1); else futurePractices.push(label);
          }
          block.querySelectorAll('.choice').forEach(function(el){
            el.classList.toggle('selected',futurePractices.includes(el.textContent.trim()));
          });
        });
        pc.appendChild(b);
      });
      var field=systemNote.closest('.field');
      var lab=field && field.querySelector('label');
      if(lab) lab.textContent='Kullandığınız program, eğitim modeli veya iş birliği varsa belirtin';
      systemNote.placeholder='Örn. girişimcilik programı, AI atölyesi, kariyer çalışması, dış kurum iş birliği...';
    }

    /* Step 5: surface the new family as an actual recommendation */
    var recommend=wb.querySelector('.recommend');
    if(recommend && futureNeedSelected && !recommend.querySelector('.k12-future-rec')){
      var card=document.createElement('div');
      card.className='rec-card core k12-future-rec';
      card.style.borderColor='#fe6203';
      var focus=[];
      var none='Bu Alanda Henüz Sistematik Bir Çalışmamız Yok';
      if(futurePractices.includes(none) || futurePractices.length===0) focus.push('Future Days / InnoTeen / InnoHub + Atölye + Seminer');
      if(futurePractices.includes('Yapay Zekâ / Teknoloji Atölyeleri')) focus.push('GenAI School + AI Fusion Lab');
      if(futurePractices.includes('Kariyer & Gelecek Meslekleri Çalışmaları')) focus.push('InnoHub + JoHub');
      if(futurePractices.includes('Girişimcilik & İnovasyon Programları')) focus.push('InnoTeen / InnoHub');
      if(futurePractices.includes('Değerler / Karakter Gelişimi')) focus.push('Character 24');
      if(futurePractices.includes('Atölye / Workshop Çalışmaları') && !focus.length) focus.push('Sustaineer + New Age 8 Literacy Skills');
      if(futurePractices.includes('Seminer / Konferans Çalışmaları') && !focus.length) focus.push('Future Talks + THub + CoHub');
      var focusText=focus.length?'<p style="margin-top:10px"><b>Önerilen Odak:</b> '+focus.join(' · ')+'</p>':'';
      card.innerHTML='<div class="rec-top"><strong>Yetkinlik ve Gelecek Gelişim</strong><span class="rec-badge" style="background:#fff2e8;color:#c94e02">Ana Çözüm</span></div><p>Future Days, InnoTeen ve InnoHub programlarını; yetkinlik atölyeleri ve gelişim seminerleriyle kurum yapınıza göre bir araya getirir.</p>'+focusText+'<p style="color:#c94e02"><b>Neden:</b> Gelecek yetkinlikleri ve bütünsel öğrenci gelişimi ihtiyacı</p>';
      recommend.insertBefore(card,recommend.firstChild);
      var kpis=wb.querySelectorAll('.lead-kpi > div');
      if(kpis[2]){
        var kb=kpis[2].querySelector('b');
        if(kb){
          var kn=parseInt(kb.textContent,10);
          if(!isNaN(kn)) kb.textContent=(kn+1)+' ana çözüm';
        }
      }
    }

    /* Step 6: keep the selected family visible in the request context */
    var note=document.getElementById('lead_note');
    if(note && futureNeedSelected && !note.dataset.futureTagged){
      note.dataset.futureTagged='1';
      if(!note.value.trim()) note.placeholder='Yetkinlik & Gelecek Gelişim seçiminiz talebinize eklendi. Ek notunuz varsa yazabilirsiniz.';
    }

    /* Step 7: include it in the visible final recommendation summary */
    var success=wb.querySelector('.lead-success .lead-summary');
    if(success && futureNeedSelected && !success.querySelector('.k12-future-summary')){
      var boxes=success.querySelectorAll('.summary-box');
      if(boxes[1]){
        var list=boxes[1].querySelector('.summary-list');
        if(list){
          var line=document.createElement('div');
          line.className='summary-line k12-future-summary';
          line.innerHTML='<span>K12 Kurumsal</span><b>Yetkinlik ve Gelecek Gelişim</b>';
          list.appendChild(line);
        }
      }
    }
  }

  document.addEventListener('click',function(e){
    if(e.target.closest && e.target.closest('.js-wizard')){
      futureNeedSelected=false;
      futurePractices=[];
      setTimeout(enhanceSolutionFinder,80);
    }
    if(e.target.closest && e.target.closest('#leadNew')){
      futureNeedSelected=false;
      futurePractices=[];
    }
    if(e.target.closest && e.target.closest('#wizardNext') && futureNeedSelected){
      var sn=document.getElementById('leadSystemNote');
      if(sn && document.querySelector('.k12-future-practices') && futurePractices.length){
        var tag='[Yetkinlik & Gelecek - Mevcut Uygulamalar: '+futurePractices.join(' | ')+']';
        var base=sn.value.replace(/\n?\[Yetkinlik & Gelecek - Mevcut Uygulamalar:[^\]]*\]/g,'').trim();
        sn.value=(base?base+'\n':'')+tag;
      }
    }
  },true);

  var sfProbe=0;
  var sfTimer=setInterval(function(){
    sfProbe++;
    if(typeof window.renderLeadStep==='function'){
      clearInterval(sfTimer);
      var originalLeadRender=window.renderLeadStep;
      window.renderLeadStep=function(){
        var out=originalLeadRender.apply(this,arguments);
        setTimeout(enhanceSolutionFinder,0);
        return out;
      };
      setTimeout(enhanceSolutionFinder,0);
    }else if(sfProbe>120){
      clearInterval(sfTimer);
    }
  },100);


  /* Smart scoring engine v2 — current systems become active decision variables */
  var smartProbe=0;
  var smartTimer=setInterval(function(){
    smartProbe++;
    if(typeof window.calculateRecommendations==='function'){
      clearInterval(smartTimer);

      window.calculateRecommendations=function(){
        var scores={};
        var reasons={};

        function add(id,score,reason){
          scores[id]=(scores[id]||0)+score;
          if(!reasons[id]) reasons[id]=[];
          if(reason && reasons[id].indexOf(reason)<0) reasons[id].push(reason);
        }

        /* 1. Declared needs */
        leadState.needs.forEach(function(need){
          (needScores[need]||[]).forEach(function(pair){ add(pair[0],pair[1],need); });
        });

        /* 2. Institution profile */
        (institutionScores[leadState.institutionType]||[]).forEach(function(pair){
          add(pair[0],pair[1],leadState.institutionType);
        });

        /* Other institution: needs stay dominant, but create a neutral digital baseline */
        if(leadState.institutionType==='Diğer Eğitim Kurumu'){
          add('xys-analiz',1,'Esnek kurumsal altyapı');
          add('visiteen',1,'Esnek kurumsal altyapı');
        }

        /* 3. Scale */
        var students=parseInt(leadState.studentCount||'0',10)||0;
        var campuses=parseInt(leadState.campusCount||'1',10)||1;
        if(students>=500){
          add('visiteen',2,'Kurum ölçeği');
          add('xys-analiz',2,'Kurum ölçeği');
        }
        if(students>=1000 || campuses>1){
          add('akademik-basari',2,'Çoklu/ölçekli yönetim');
          add('deneme-takip',1,'Çoklu/ölçekli yönetim');
        }
        if(campuses>=3){
          add('visiteen',2,'Merkezi kampüs yönetimi');
          add('ogretmen-radari',1,'Kurumsal standardizasyon');
        }

        /* 4. Existing-system intelligence:
           reduce duplicate/replacement recommendations, increase complementary value */
        var cs=leadState.currentSystems||[];

        if(cs.includes('Excel / Manuel Takip')){
          add('deneme-takip',3,'Manuel süreçlerin dijitalleşmesi');
          add('visiteen',2,'Manuel gelişim takibinin kurumsallaşması');
          add('xys-analiz',1,'Verinin merkezi yapıya taşınması');
        }

        if(cs.includes('Farklı Ölçme-Değerlendirme Sistemi')){
          add('visiteen',3,'Mevcut ölçme verisini gelişim sürecine bağlama');
          add('akademik-basari',2,'Ölçme verisini müdahale yönetimine taşıma');
          add('xys-analiz',1,'İleri analiz / veri derinleştirme');
          add('sinav-olcme',-2,'Mevcut ölçme altyapısı bulunduğu için tekrar ihtiyacı düşük');
        }

        if(cs.includes('Deneme / Sipariş Takip Sistemi')){
          add('deneme-takip',-3,'Mevcut deneme/sipariş sistemi nedeniyle tekrar ihtiyacı düşük');
          add('xys-analiz',2,'Mevcut sınav operasyonunu analizle tamamlama');
          add('sinav-olcme',2,'Sınav verisini standartlaştırma');
          add('visiteen',1,'Sınav verisini gelişim yönetimine bağlama');
        }

        if(cs.includes('Koçluk / Öğrenci Takip Sistemi')){
          add('kurumsal-kocluk',-3,'Mevcut koçluk sistemi nedeniyle tekrar ihtiyacı düşük');
          add('ogrenci-gelisim',-2,'Mevcut öğrenci takip sistemi nedeniyle tekrar ihtiyacı düşük');
          add('xys-analiz',2,'Koçluğu akademik veriyle besleme');
          add('akademik-basari',2,'Takibi risk ve müdahale yönetimine dönüştürme');
          add('visiteen',1,'Mevcut yapıyla kurumsal entegrasyon potansiyeli');
        }

        if(cs.includes('Dijital Öğrenme Platformu')){
          add('dijital-egitim',-3,'Mevcut dijital öğrenme platformu nedeniyle tekrar ihtiyacı düşük');
          add('xys-analiz',2,'Dijital öğrenmeyi performans verisiyle yönlendirme');
          add('kisiye-ozel-soru-bankasi',2,'Mevcut dijital yapıyı kişiselleştirme');
          add('sifir-hata',1,'Hata bazlı kişisel tekrar katmanı');
        }

        if(cs.includes('Öğretmen Gelişim Sistemi')){
          add('ogretmen-akademisi',-2,'Mevcut öğretmen gelişim sistemi nedeniyle tekrar ihtiyacı düşük');
          add('ogretmen-radari',2,'Mevcut gelişim yapısına ölçme ve yetkinlik radarı ekleme');
          add('maarif-gpt',2,'Mevcut öğretmen gelişimini AI destekli üretimle tamamlama');
        }

        if(cs.includes('CRM / Kurum Yönetim Sistemi')){
          add('visiteen',2,'CRM üzerine öğrenci gelişim katmanı ekleme');
          add('akademik-basari',1,'Kurumsal yönetimi akademik karar verisiyle tamamlama');
          add('deneme-takip',1,'CRM dışında sınav operasyonu uzmanlaşması');
        }

        if(cs.includes('Henüz Sistem Kullanmıyoruz')){
          add('xys-analiz',2,'Temel ölçme ve analiz altyapısı');
          add('visiteen',2,'Temel gelişim yönetimi altyapısı');
          if(leadState.needs.includes('Kurumsal Sınav & Deneme Operasyonu') || leadState.needs.includes('Yayın & Tedarik')){
            add('deneme-takip',2,'Temel sınav operasyon altyapısı');
          }
        }

        /* 5. Need-aware complement rules */
        if(leadState.needs.includes('Kurumsal Koçluk') && cs.includes('Koçluk / Öğrenci Takip Sistemi')){
          add('xys-analiz',2,'Mevcut koçluğu veri temelli hale getirme');
          add('akademik-basari',2,'Mevcut koçluğa risk/müdahale katmanı ekleme');
        }
        if(leadState.needs.includes('Dijital Eğitim') && cs.includes('Dijital Öğrenme Platformu')){
          add('kisiye-ozel-soru-bankasi',2,'Mevcut dijital platformu kişiselleştirme');
          add('xys-analiz',2,'İçerik kullanımını ölçme verisiyle yönlendirme');
        }
        if(leadState.needs.includes('Öğretmen Gelişimi') && cs.includes('Öğretmen Gelişim Sistemi')){
          add('ogretmen-radari',2,'Mevcut gelişim sistemine ölçme katmanı');
          add('maarif-gpt',2,'Mevcut gelişim sistemine uygulama/AI katmanı');
        }
        if(leadState.needs.includes('Ölçme & Analiz') && cs.includes('Farklı Ölçme-Değerlendirme Sistemi')){
          add('xys-analiz',3,'Mevcut ölçme sisteminin ileri analizle güçlendirilmesi');
        }

        /* Do not allow negative totals to create misleading rankings */
        Object.keys(scores).forEach(function(id){
          if(scores[id]<0) scores[id]=0;
        });

        var ranked=Object.entries(scores)
          .filter(function(entry){ return entry[1]>0; })
          .sort(function(a,b){ return b[1]-a[1]; });

        if(!ranked.length){
          ranked=[['xys-analiz',5],['visiteen',4],['deneme-takip',3]];
          reasons['xys-analiz']=['Temel kurumsal altyapı'];
          reasons['visiteen']=['Temel kurumsal altyapı'];
          reasons['deneme-takip']=['Temel operasyon altyapısı'];
        }

        leadState.recommendations=ranked.slice(0,6).map(function(entry,i){
          var id=entry[0], score=entry[1];
          return {
            id:id,
            score:score,
            core:i<3,
            name:(recMeta[id]&&recMeta[id][0])||id,
            description:(recMeta[id]&&recMeta[id][1])||'',
            reason:(reasons[id]||[]).slice(0,3).join(' · ')
          };
        });
      };
    }else if(smartProbe>120){
      clearInterval(smartTimer);
    }
  },100);
})();