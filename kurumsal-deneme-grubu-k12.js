(function(){
  var MARK='k12-kurumsal-deneme-grubu-ready';
  var NEW_KEY='kurumsal-deneme-grubu';

  var product={
    name:'Kurumsal Deneme Grubu',
    category:'Sınav & Operasyon',
    tagline:'53 aktif yayın/seri, 236 farklı sınav seçeneği, 11 sınav düzeyi: kurumunuz için doğru denemeyi tek portföyden yönetin.',
    summary:'K12 Kurumsal’ın 2026–2027 deneme portföyünde aktif fiyatlandırılan 53 yayın/seri; 5. sınıftan MSÜ’ye uzanan 11 sınav düzeyinde toplam 236 yayın × sınav seviyesi kombinasyonu sunar. Kurumlar, ihtiyaçlarına göre farklı yayın ve sınav düzeylerini tek tedarik ve operasyon yapısından planlayabilir.',
    problems:[
      'Deneme tedarikinin tek veya sınırlı sayıda yayına bağlı kalması',
      'Sınıf ve sınav düzeyine göre alternatif yayınları tek noktada karşılaştıramama',
      'Çoklu yayın sipariş, takvim ve teslimat süreçlerinin dağınık yürütülmesi',
      'Deneme seçimi ile uygulama, ölçme ve analiz süreçlerinin birbirinden kopuk kalması'
    ],
    flow:['İhtiyaç','Sınıf / Sınav Düzeyi','Yayın / Seri Seçimi','Deneme Planı','Sipariş','Tedarik','Uygulama','Ölçme / Analiz'],
    features:[
      ['53 Aktif Yayın / Seri','2026–2027 fiyat portföyünde aktif olarak çalışılan deneme yayın ve serilerini tek yapı altında sunar.'],
      ['236 Farklı Sınav Seçeneği','Yayın × sınıf/sınav seviyesi bazında toplam 236 aktif kombinasyonla geniş seçim alanı oluşturur.'],
      ['11 Sınav Düzeyi','5, 6, 7, LGS, 9, 10, 11, 11 Maarif, TYT, AYT ve MSÜ düzeylerinde deneme portföyü sunar.'],
      ['Seviye Bazlı Portföy','5. sınıf 26 · 6. sınıf 26 · 7. sınıf 26 · LGS 36 · 9. sınıf 12 · 10. sınıf 12 · 11. sınıf 12 · 11 Maarif 27 · TYT 29 · AYT 29 · MSÜ 1 seçenek.'],
      ['Çoklu Yayın Planlama','Kurumun akademik hedefi, sınav takvimi ve öğrenci profiline göre farklı yayınları aynı deneme planında kullanmayı destekler.'],
      ['Operasyon ve Analiz Bağlantısı','Seçilen denemeleri Kurumsal Deneme Takip Sistemi, Sınav Ölçme Değerlendirme ve XYS Analiz süreçlerine bağlar.']
    ],
    benefits:[
      'Tek portföyden geniş yayın erişimi',
      'Sınıf ve sınav düzeyine göre daha fazla alternatif',
      'Çoklu yayınla esnek deneme takvimi',
      'Tedarik ve teslimat planlama kolaylığı',
      'Sınavdan ölçme ve analize bütünleşik süreç'
    ],
    users:['Okullar','Kurs Merkezleri','Zincir Eğitim Kurumları','Ölçme-Değerlendirme Birimleri','Akademik Koordinatörler'],
    integrations:['Kurumsal Deneme Takip Sistemi','Sınav Ölçme Değerlendirme','XYS Analiz']
  };

  function updateData(){
    try{
      if(window.K12_PRODUCT_DATA){
        window.K12_PRODUCT_DATA[NEW_KEY]=product;
        window.K12_PRODUCT_DATA.paraf=product; // legacy route compatibility
        if(window.K12_PRODUCT_DATA['deneme-takip'] && Array.isArray(window.K12_PRODUCT_DATA['deneme-takip'].integrations)){
          window.K12_PRODUCT_DATA['deneme-takip'].integrations=
            window.K12_PRODUCT_DATA['deneme-takip'].integrations.map(function(x){
              return x==='Paraf Deneme Grubu'?'Kurumsal Deneme Grubu':x;
            });
        }
      }
      if(typeof recMeta!=='undefined' && recMeta){
        recMeta.paraf=['Kurumsal Deneme Grubu','53 aktif yayın/seri ve 11 sınav düzeyinde 236 farklı yayın × sınav seviyesi seçeneğini tek portföyde sunar.'];
      }
    }catch(e){}
  }

  function replaceLink(el){
    if(!el) return;
    if(el.getAttribute('data-product')==='paraf'){
      el.setAttribute('data-product',NEW_KEY);
      if(el.tagName==='A') el.setAttribute('href','#product/'+NEW_KEY);
    }
  }

  function updateCatalogAndMenus(root){
    (root||document).querySelectorAll('[data-product="paraf"]').forEach(function(el){
      replaceLink(el);
      var span=el.querySelector('span');
      var h3=el.querySelector('h3');
      if(span && /Paraf Deneme Grubu/i.test(span.textContent)) span.textContent='Kurumsal Deneme Grubu';
      if(h3 && /Paraf Deneme Grubu/i.test(h3.textContent)) h3.textContent='Kurumsal Deneme Grubu';
      if(h3){
        var p=el.querySelector('p');
        if(p && /Deneme tedarikini|Paraf/i.test(p.textContent)){
          p.textContent='53 aktif yayın/seri ve 11 sınav düzeyinde 236 farklı deneme seçeneğini tek portföyden yönetin.';
        }
      }
    });

    (root||document).querySelectorAll('a[href="#product/paraf"]').forEach(function(a){
      a.setAttribute('href','#product/'+NEW_KEY);
      a.setAttribute('data-product',NEW_KEY);
      if(/Paraf Deneme Grubu/i.test(a.textContent)) a.textContent='Kurumsal Deneme Grubu';
    });
  }

  function updatePublisherCard(){
    var section=document.getElementById('publishers');
    if(!section) return;
    var card=section.querySelector('[data-product="paraf"]') || section.querySelector('[data-product="'+NEW_KEY+'"]');
    if(!card) return;
    replaceLink(card);
    var article=card.querySelector('article');
    if(!article) return;
    var h3=article.querySelector('h3');
    var p=article.querySelector('p');
    var terms=article.querySelector('.terms');
    if(h3) h3.textContent='Kurumsal Deneme Grubu';
    if(p) p.textContent='53 aktif yayın/seri ile 11 sınav düzeyinde 236 farklı yayın × sınav seviyesi seçeneğini tek kurumsal deneme portföyünde yönetin.';
    if(terms && !terms.classList.contains('k12-deneme-stats')){
      terms.innerHTML='<span class="k12-deneme-stat"><b>53</b> Aktif Yayın / Seri</span><span class="k12-deneme-stat"><b>236</b> Sınav Seçeneği</span><span class="k12-deneme-stat"><b>11</b> Sınav Düzeyi</span>';
      terms.classList.add('k12-deneme-stats');
    }
  }

  function updateVisibleText(){
    document.querySelectorAll('a,span,h3,strong').forEach(function(el){
      var t=el.textContent.trim();
      if(t==='Paraf Deneme Grubu Bölge Bayiliği' || t==='Paraf Deneme Grubu'){
        if(el.textContent!=='Kurumsal Deneme Grubu') el.textContent='Kurumsal Deneme Grubu';
      }
    });
  }

  function handleLegacyHash(){
    if(location.hash==='#product/paraf'){
      history.replaceState(null,'','#product/'+NEW_KEY);
      if(typeof renderProduct==='function') renderProduct(NEW_KEY);
    }
  }

  function style(){
    if(document.getElementById('k12-deneme-group-style')) return;
    var s=document.createElement('style');
    s.id='k12-deneme-group-style';
    s.textContent='.k12-deneme-stats{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px!important;border-top:1px solid rgba(153,27,27,.14);padding-top:14px!important}.k12-deneme-stat{display:block;font-size:9px;line-height:1.25;color:#8f3438}.k12-deneme-stat b{display:block;font-size:20px;line-height:1;color:#991b1b;margin-bottom:4px}@media(max-width:700px){.k12-deneme-stats{grid-template-columns:1fr 1fr 1fr}.k12-deneme-stat b{font-size:17px}}';
    document.head.appendChild(s);
  }

  function refresh(){
    updateData();
    updateCatalogAndMenus(document);
    updatePublisherCard();
    updateVisibleText();
    handleLegacyHash();
  }

  function init(){
    style();
    refresh();
    if(!document.getElementById(MARK)){
      var m=document.createElement('span');m.id=MARK;m.hidden=true;document.body.appendChild(m);
    }
    window.addEventListener('hashchange',function(){
      handleLegacyHash();
      if(location.hash==='#product/'+NEW_KEY && typeof renderProduct==='function'){
        setTimeout(function(){renderProduct(NEW_KEY);},0);
      }
    });
  }

  var tries=0;
  var timer=setInterval(function(){
    tries++;
    if(window.K12_PRODUCT_DATA && document.getElementById('products')){
      clearInterval(timer);
      init();
    }else if(tries>150){
      clearInterval(timer);
    }
  },100);
})();