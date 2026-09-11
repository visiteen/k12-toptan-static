(function(){
  var MARK='k12-kurumsal-ai-katmani';
  if(document.getElementById(MARK)) return;

  var AI_NEED='Kurumsal Yapay Zekâ Çözümleri';
  var aiNeedSelected=false;
  var aiUseCases=[];
  var AI_USE_CASES=[
    'Yönetim & Karar Destek',
    'Operasyon & İş Akışı Otomasyonu',
    'Veri Analizi & Akıllı Raporlama',
    'Kurumsal Bilgi Asistanı / Özel GPT',
    'AI Agent / Dijital Çalışan',
    'Veli · Öğrenci · Müşteri İletişimi',
    'Satış & Pazarlama',
    'İnsan Kaynakları',
    'Finans & Planlama',
    'Eğitim · İçerik · Ölçme Süreçleri',
    'Ar-Ge & Yeni Ürün Geliştirme'
  ];

  function addStyles(){
    if(document.getElementById('k12-ai-css')) return;
    var s=document.createElement('style');
    s.id='k12-ai-css';
    s.textContent=
      '.k12-ai-family{margin-top:62px}'+
      '.k12-ai-family .catalog-family-head{border-top:3px solid #111827;padding-top:24px}'+
      '.k12-ai-family .catalog-family-head span{color:#fe6203}'+
      '.k12-ai-vip{position:relative;overflow:hidden;background:linear-gradient(135deg,#0b0f19,#172033);border:1px solid #273244!important;color:#fff!important;grid-column:1/-1;min-height:260px}'+
      '.k12-ai-vip:before{content:"VIP · KURUMA ÖZEL";position:absolute;right:22px;top:20px;font-size:10px;font-weight:900;letter-spacing:.12em;color:#fe6203;background:#fff3eb;border:1px solid #ffcfb1;border-radius:999px;padding:7px 10px}'+
      '.k12-ai-vip .catalog-top span,.k12-ai-vip .catalog-top b{color:#fe6203!important}'+
      '.k12-ai-vip h3{color:#fff!important;font-size:28px!important;max-width:700px}'+
      '.k12-ai-vip p{color:#cbd5e1!important;max-width:800px;font-size:14px!important}'+
      '.k12-ai-chips{display:flex;gap:8px;flex-wrap:wrap;margin-top:20px;max-width:900px}'+
      '.k12-ai-chips em{font-style:normal;font-size:10px;font-weight:800;color:#fff;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:999px;padding:7px 9px}'+
      '.k12-ai-detail{background:#0b0f19;color:#fff;border-top:1px solid #1f2937;border-bottom:1px solid #1f2937}'+
      '.k12-ai-detail .section-head h2,.k12-ai-detail .section-head .eyebrow{color:#fff}'+
      '.k12-ai-detail .section-head .eyebrow{color:#fe6203}'+
      '.k12-ai-detail .section-head p{color:#aeb9c8}'+
      '.k12-ai-grid{display:grid;grid-template-columns:1.05fr 1fr;gap:18px}'+
      '.k12-ai-panel{border:1px solid #273244;border-radius:20px;padding:28px;background:#111827}'+
      '.k12-ai-panel h3{margin:0 0 8px;color:#fff;font-size:22px}'+
      '.k12-ai-panel>p{color:#aeb9c8;font-size:12px}'+
      '.k12-ai-list{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:20px}'+
      '.k12-ai-item{background:#0f1625;border:1px solid #253044;border-radius:12px;padding:13px 14px}'+
      '.k12-ai-item strong{display:block;color:#fff;font-size:12px}'+
      '.k12-ai-item small{display:block;color:#8fa0b6;font-size:10px;margin-top:4px;line-height:1.4}'+
      '.k12-ai-flow{display:grid;gap:10px;margin-top:20px}'+
      '.k12-ai-step{display:flex;gap:12px;align-items:flex-start;background:#0f1625;border:1px solid #253044;border-radius:12px;padding:13px}'+
      '.k12-ai-step span{width:27px;height:27px;display:grid;place-items:center;border-radius:8px;background:#fe6203;color:#fff;font-size:10px;font-weight:900;flex:0 0 auto}'+
      '.k12-ai-step b{display:block;color:#fff;font-size:12px}.k12-ai-step small{color:#8fa0b6;font-size:10px}'+
      '.k12-ai-cta{margin-top:18px;padding:18px;border-radius:14px;border:1px solid #fe6203;background:rgba(254,98,3,.08)}'+
      '.k12-ai-cta strong{display:block;color:#fff}.k12-ai-cta p{margin:5px 0 0;color:#cbd5e1;font-size:11px}'+
      '.k12-ai-mega{grid-column:1/-1!important;margin-top:4px;border-radius:14px;background:#111827;border:1px solid #273244;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;gap:18px}'+
      '.k12-ai-mega strong{color:#fff!important}.k12-ai-mega span{color:#94a3b8;font-size:11px}.k12-ai-mega a{color:#fe6203!important;font-weight:800!important;white-space:nowrap}'+
      '.k12-ai-practices{margin-top:22px;padding:20px;border:1px solid #ffcfb1;border-radius:16px;background:#fff8f3}'+
      '@media(max-width:850px){.k12-ai-grid{grid-template-columns:1fr}.k12-ai-list{grid-template-columns:1fr}.k12-ai-vip h3{font-size:22px!important}.k12-ai-mega{display:block}.k12-ai-mega a{display:inline-block;margin-top:8px}}';
    document.head.appendChild(s);
  }

  function addMega(){
    var grid=document.querySelector('#mega .mega-grid');
    if(!grid || grid.querySelector('.k12-ai-mega')) return;
    var row=document.createElement('div');
    row.className='k12-ai-mega';
    row.innerHTML='<div><strong>05 · Kurumsal Yapay Zekâ Çözümleri</strong><br><span>VIP · Kuruma özel AI ürünleri, agentlar, otomasyonlar ve karar destek sistemleri</span></div><a href="#kurumsal-yapay-zeka">Özel Projeyi İncele →</a>';
    grid.appendChild(row);
  }

  function addMobile(){
    var sub=document.getElementById('mobileSub');
    if(!sub || sub.querySelector('[href="#kurumsal-yapay-zeka"]')) return;
    var a=document.createElement('a');
    a.href='#kurumsal-yapay-zeka';
    a.textContent='Kurumsal Yapay Zekâ Çözümleri · VIP';
    sub.appendChild(a);
  }

  function addCatalog(){
    var wrap=document.querySelector('#products > .wrap');
    if(!wrap || wrap.querySelector('.k12-ai-family')) return;
    var family=document.createElement('section');
    family.className='catalog-family k12-ai-family';
    family.innerHTML=
      '<div class="catalog-family-head"><div><span>05</span><h3>Kurumsal Yapay Zekâ Çözümleri</h3></div><p>VIP · Kuruma Özel Geliştirme</p></div>'+
      '<div class="catalog-grid">'+
      '<a class="catalog-card k12-ai-vip" href="#kurumsal-yapay-zeka">'+
      '<div class="catalog-top"><span>05</span><b>→</b></div>'+
      '<h3>Hazır bir yapay zekâ ürünü değil; kurumunuzun ihtiyacına göre tasarlanan yapay zekâ sistemi.</h3>'+
      '<p>Eğitim süreçlerinden yönetime, operasyondan satış ve iletişime, veri analizinden insan kaynaklarına kadar kurumunuzun ihtiyaç duyduğu yapay zekâ ürünleri, AI agentları, otomasyonlar ve karar destek çözümleri kuruma özel geliştirilebilir.</p>'+
      '<div class="k12-ai-chips"><em>AI Agent</em><em>Özel GPT / Bilgi Asistanı</em><em>İş Akışı Otomasyonu</em><em>Karar Zekâsı</em><em>Veri Analizi</em><em>Kuruma Özel AI Ürünü</em></div>'+
      '</a></div>';
    wrap.appendChild(family);
  }

  function aiItem(title,desc){
    return '<div class="k12-ai-item"><strong>'+title+'</strong><small>'+desc+'</small></div>';
  }

  function addDetail(){
    if(document.getElementById('kurumsal-yapay-zeka')) return;
    var anchor=document.getElementById('selector') || document.getElementById('yetkinlik-ve-gelecek') || document.getElementById('products');
    if(!anchor) return;
    var sec=document.createElement('section');
    sec.className='section k12-ai-detail';
    sec.id='kurumsal-yapay-zeka';
    var capabilities=
      aiItem('AI Agent & Dijital Çalışan','Tekrarlayan görevleri yürüten, bilgi toplayan ve aksiyon alan özel agentlar.')+
      aiItem('Özel GPT / Kurumsal Bilgi Asistanı','Kurumun dokümanları, süreçleri ve bilgi tabanı üzerinde çalışan güvenli asistanlar.')+
      aiItem('İş Akışı Otomasyonu','Form, onay, rapor, takip, bildirim ve operasyon süreçlerini AI ile otomatikleştirme.')+
      aiItem('Karar Zekâsı','Yönetim verisini anlamlandıran risk, öncelik, öneri ve karar destek katmanları.')+
      aiItem('Veri Analizi & Akıllı Raporlama','Dağınık verileri birleştiren, yorumlayan ve yönetime anlaşılır içgörü üreten yapılar.')+
      aiItem('İletişim & CRM AI','Veli, öğrenci, müşteri ve kurum iletişimini kişiselleştiren yardımcı sistemler.')+
      aiItem('Satış & Pazarlama AI','Lead değerlendirme, içerik, kampanya, teklif ve satış destek otomasyonları.')+
      aiItem('İK & Kurumsal Gelişim AI','Yetkinlik, performans, işe alım, eğitim ve gelişim süreçlerinde AI desteği.')+
      aiItem('Finans & Planlama AI','Raporlama, tahminleme, cari/operasyon görünürlüğü ve planlama desteği.')+
      aiItem('Eğitim & İçerik AI','İçerik üretimi, ölçme, kişiselleştirme, öğretmen ve öğrenci destek çözümleri.')+
      aiItem('Ar-Ge & Yeni Ürün AI','Yeni dijital ürün, prototip, AI modülü ve kuruma özel teknoloji geliştirme.')+
      aiItem('Entegrasyon Katmanı','Mevcut CRM, ERP, LMS, ölçme-değerlendirme ve kurum sistemleriyle bağlantı.');
    var steps=[
      ['01','İhtiyacı Keşfet','Kurumun problem, süreç, veri ve fırsat alanlarını birlikte belirleriz.'],
      ['02','AI Mimarisini Tasarla','Hangi model, agent, veri ve entegrasyon yapısının gerektiğini tasarlarız.'],
      ['03','Prototip & Geliştirme','Kuruma özel çalışan ilk çözümü hızlı biçimde geliştirip doğrularız.'],
      ['04','Entegrasyon','Mevcut sistemler, veriler ve iş akışlarıyla bağlantıyı kurarız.'],
      ['05','Saha Kullanımı','Kullanıcıları devreye alır, kullanım senaryolarını gerçek süreçte test ederiz.'],
      ['06','Ölç & İyileştir','Çözümün etkisini ölçer, yeni ihtiyaçlara göre sürekli geliştiririz.']
    ].map(function(x){return '<div class="k12-ai-step"><span>'+x[0]+'</span><div><b>'+x[1]+'</b><small>'+x[2]+'</small></div></div>';}).join('');
    sec.innerHTML=
      '<div class="wrap">'+
      '<div class="section-head"><div><div class="eyebrow">VIP · Kuruma Özel AI</div><h2>Kurumsal Yapay Zekâ Çözümleri</h2></div><p>K12 Kurumsal; yalnızca eğitim teknolojileri değil, eğitim kurumlarının tüm kurumsal süreçleri için ihtiyaca özel yapay zekâ ürün ve çözümleri tasarlayıp geliştirebilir.</p></div>'+
      '<div class="k12-ai-grid">'+
      '<div class="k12-ai-panel"><h3>Neler geliştirebiliriz?</h3><p>Hazır paket satmak yerine; kurumun problemine, verisine, süreçlerine ve mevcut teknoloji altyapısına göre çözüm mimarisi oluştururuz.</p><div class="k12-ai-list">'+capabilities+'</div></div>'+
      '<div class="k12-ai-panel"><h3>Kuruma Özel Geliştirme Modeli</h3><p>Her proje ihtiyaç analiziyle başlar; prototip, entegrasyon ve saha doğrulamasıyla kuruma özel bir ürüne dönüşür.</p><div class="k12-ai-flow">'+steps+'</div><div class="k12-ai-cta"><strong>Özel AI Projesi</strong><p>Kurumunuzdaki bir problemi, süreci veya yeni ürün fikrini birlikte yapay zekâ çözümüne dönüştürelim.</p></div></div>'+
      '</div></div>';
    anchor.insertAdjacentElement('afterend',sec);
  }

  function addFooter(){
    var footer=document.querySelector('.footer');
    if(!footer) return;
    var cols=footer.querySelectorAll('.footer-grid > div');
    for(var i=0;i<cols.length;i++){
      var h=cols[i].querySelector('h4');
      if(h && h.textContent.trim()==='Çözümler' && !cols[i].querySelector('[href="#kurumsal-yapay-zeka"]')){
        var a=document.createElement('a');
        a.href='#kurumsal-yapay-zeka';
        a.textContent='Kurumsal Yapay Zekâ · VIP';
        cols[i].appendChild(a);
        break;
      }
    }
  }

  function enhanceFinder(){
    var wb=document.getElementById('wizardBody');
    if(!wb) return;

    /* Step 3 */
    var needChoices=wb.querySelector('.choices');
    if(needChoices && wb.querySelector('[data-need]') && !wb.querySelector('[data-k12-ai-need]')){
      var b=document.createElement('button');
      b.type='button';
      b.className='choice multi'+(aiNeedSelected?' selected':'');
      b.setAttribute('data-k12-ai-need','1');
      b.innerHTML='Kurumsal Yapay Zekâ Çözümleri<small>Kuruma özel AI ürünleri, agentlar, otomasyonlar ve karar destek çözümleri.</small>';
      b.addEventListener('click',function(){
        aiNeedSelected=!aiNeedSelected;
        try{
          var idx=leadState.needs.indexOf(AI_NEED);
          if(aiNeedSelected && idx<0) leadState.needs.push(AI_NEED);
          if(!aiNeedSelected && idx>=0) leadState.needs.splice(idx,1);
        }catch(e){}
        if(typeof renderLeadStep==='function') renderLeadStep();
      });
      needChoices.appendChild(b);
    }

    /* Step 4 conditional AI use-case block */
    var systemNote=document.getElementById('leadSystemNote');
    if(systemNote && aiNeedSelected && !wb.querySelector('.k12-ai-practices')){
      var block=document.createElement('div');
      block.className='k12-ai-practices';
      block.innerHTML='<div style="font-size:11px;font-weight:900;letter-spacing:.08em;color:#fe6203;margin-bottom:7px">VIP · KURUMSAL YAPAY ZEKÂ</div>'+
        '<h4 style="margin:0 0 6px;color:var(--deep);font-size:18px">Yapay Zekâ Öncelik Alanları</h4>'+
        '<p style="margin:0 0 14px;color:var(--muted);font-size:12px">Kurumunuzda yapay zekâyı öncelikle hangi alanlarda kullanmak istiyorsunuz?</p>'+
        '<div class="choices k12-ai-usecase-choices"></div>';
      systemNote.closest('.field').before(block);
      var pc=block.querySelector('.k12-ai-usecase-choices');
      AI_USE_CASES.forEach(function(label){
        var x=document.createElement('button');
        x.type='button';
        x.className='choice multi'+(aiUseCases.includes(label)?' selected':'');
        x.textContent=label;
        x.addEventListener('click',function(){
          var i=aiUseCases.indexOf(label);
          if(i>=0) aiUseCases.splice(i,1); else aiUseCases.push(label);
          x.classList.toggle('selected',aiUseCases.includes(label));
        });
        pc.appendChild(x);
      });
    }

    /* Step 5 */
    var recommend=wb.querySelector('.recommend');
    if(recommend && aiNeedSelected && !recommend.querySelector('.k12-ai-rec')){
      var card=document.createElement('div');
      card.className='rec-card core k12-ai-rec';
      card.style.cssText='border-color:#111827;background:linear-gradient(135deg,#0b0f19,#172033);color:#fff';
      var focus=aiUseCases.length?aiUseCases.slice(0,4).join(' · '):'Kuruma özel AI keşif ve çözüm mimarisi';
      card.innerHTML='<div class="rec-top"><strong style="color:#fff">Kurumsal Yapay Zekâ Çözümleri</strong><span class="rec-badge" style="background:#fe6203;color:#fff">VIP · Özel Proje</span></div><p style="color:#cbd5e1">Kurumunuzun süreç, veri ve ihtiyaçlarına göre özel yapay zekâ ürünü, agent, otomasyon veya karar destek sistemi geliştirilir.</p><p style="color:#ffb27f"><b>Öncelikli Alan:</b> '+focus+'</p>';
      recommend.insertBefore(card,recommend.firstChild);
      var kpis=wb.querySelectorAll('.lead-kpi > div');
      if(kpis[2]){
        var kb=kpis[2].querySelector('b');
        if(kb){
          var n=parseInt(kb.textContent,10);
          if(!isNaN(n)) kb.textContent=(n+1)+' ana çözüm';
        }
      }
    }

    /* Step 7 */
    var success=wb.querySelector('.lead-success .lead-summary');
    if(success && aiNeedSelected && !success.querySelector('.k12-ai-summary')){
      var boxes=success.querySelectorAll('.summary-box');
      if(boxes[1]){
        var list=boxes[1].querySelector('.summary-list');
        if(list){
          var line=document.createElement('div');
          line.className='summary-line k12-ai-summary';
          line.innerHTML='<span>K12 Kurumsal VIP</span><b>Kurumsal Yapay Zekâ Çözümleri</b>';
          list.appendChild(line);
        }
      }
    }
  }

  function init(){
    addStyles(); addMega(); addMobile(); addCatalog(); addDetail(); addFooter();
    var m=document.createElement('span');m.id=MARK;m.hidden=true;document.body.appendChild(m);
  }

  document.addEventListener('click',function(e){
    if(e.target.closest && e.target.closest('.js-wizard')){
      aiNeedSelected=false; aiUseCases=[];
      setTimeout(enhanceFinder,80);
    }
    if(e.target.closest && e.target.closest('#leadNew')){
      aiNeedSelected=false; aiUseCases=[];
    }
    if(e.target.closest && e.target.closest('#wizardNext') && aiNeedSelected){
      var sn=document.getElementById('leadSystemNote');
      if(sn && aiUseCases.length){
        var tag='[Kurumsal AI Öncelikleri: '+aiUseCases.join(' | ')+']';
        var base=sn.value.replace(/\n?\[Kurumsal AI Öncelikleri:[^\]]*\]/g,'').trim();
        sn.value=(base?base+'\n':'')+tag;
      }
    }
  },true);

  var tries=0;
  var timer=setInterval(function(){
    tries++;
    if(document.getElementById('products')){clearInterval(timer);init();}
    else if(tries>120){clearInterval(timer);}
  },100);

  var finderProbe=0;
  var finderTimer=setInterval(function(){
    finderProbe++;
    if(typeof renderLeadStep==='function'){
      clearInterval(finderTimer);
      var prev=renderLeadStep;
      renderLeadStep=function(){
        var out=prev.apply(this,arguments);
        setTimeout(enhanceFinder,0);
        return out;
      };
      setTimeout(enhanceFinder,0);
    }else if(finderProbe>120){
      clearInterval(finderTimer);
    }
  },100);
})();