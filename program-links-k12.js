(function(){
  var products=[
    {names:['Future Days · 1–4. Sınıf','Future Days'],href:'/program-future-days.html',section:'program'},
    {names:['InnoTeen · 5–8. Sınıf','InnoTeen'],href:'/program-innoteen.html',section:'program'},
    {names:['InnoHub · 9–12. Sınıf','InnoHub'],href:'/program-innohub.html',section:'program'},
    {names:['Sustaineer'],href:'/atolye-sustaineer.html',section:'workshop'},
    {names:['GenAISchool','GenAI School'],href:'/atolye-genaischool.html',section:'workshop',display:'GenAISchool'},
    {names:['AI Fusion Lab'],href:'/atolye-ai-fusion-lab.html',section:'workshop'},
    {names:['Character 24'],href:'/atolye-character-24.html',section:'workshop'},
    {names:['VisiMot'],href:'/atolye-visimot.html',section:'workshop'},
    {names:['New Age 8 Literacy Skills'],href:'/atolye-new-age-8-literacy-skills.html',section:'workshop'},
    {names:['Design the Future Workshop'],href:'/atolye-design-the-future-workshop.html',section:'workshop'},
    {names:['Basit Olan Mükemmeldir'],href:'/seminer-basit-olan-mukemmeldir.html',section:'seminar'},
    {names:['Design the Future Seminar Series','Design the Future 7+8'],href:'/seminer-design-the-future.html',section:'seminar',display:'Design the Future Seminar Series'},
    {names:['Innoved Future Talks – 1','Innoved Future Talks -1'],href:'/seminer-innoved-future-talks-1.html',section:'seminar',display:'Innoved Future Talks – 1'},
    {names:['Innoved Future Talks – 2','Innoved Future Talks -2'],href:'/seminer-innoved-future-talks-2.html',section:'seminar',display:'Innoved Future Talks – 2'},
    {names:['THub (Target Hub)','THub'],href:'/seminer-thub.html',section:'seminar'},
    {names:['JoHub (The Future of Jobs Hub)','JoHub'],href:'/seminer-johub.html',section:'seminar'},
    {names:['CoHub (New Age Competencies Hub)','CoHub'],href:'/seminer-cohub.html',section:'seminar'},
    {names:['K.E.K. ile Sınava Hazırlık'],href:'/seminer-kek-sinava-hazirlik.html',section:'seminar'}
  ];

  function norm(s){return (s||'').replace(/\s+/g,' ').trim();}

  function ensureCatalogCompleteness(){
    var workshops=document.querySelector('#yetkinlik-atolyeleri .k12-yetkinlik-items');
    if(workshops){
      var strongs=[].slice.call(workshops.querySelectorAll('.k12-yetkinlik-item strong'));
      strongs.forEach(function(s){if(norm(s.textContent)==='GenAI School') s.textContent='GenAISchool';});
      var hasDesign=strongs.some(function(s){return norm(s.textContent)==='Design the Future Workshop';});
      if(!hasDesign){
        var item=document.createElement('div');
        item.className='k12-yetkinlik-item';
        item.innerHTML='<strong>Design the Future Workshop</strong>';
        workshops.appendChild(item);
      }
    }
    var seminars=document.querySelector('#yetkinlik-seminerleri .k12-yetkinlik-items');
    if(seminars){
      [].slice.call(seminars.querySelectorAll('.k12-yetkinlik-item strong')).forEach(function(s){
        var t=norm(s.textContent);
        if(t==='Design the Future 7+8') s.textContent='Design the Future Seminar Series';
        if(t==='Innoved Future Talks -1') s.textContent='Innoved Future Talks – 1';
        if(t==='Innoved Future Talks -2') s.textContent='Innoved Future Talks – 2';
      });
    }
  }

  function findItem(product){
    var items=[].slice.call(document.querySelectorAll('.k12-yetkinlik-item'));
    return items.find(function(item){
      var s=item.querySelector('strong');
      if(!s) return false;
      var text=norm(s.textContent);
      return product.names.some(function(name){
        var n=norm(name);
        return text===n || text.indexOf(n+' ·')===0;
      });
    });
  }

  function makeClickable(product){
    var item=findItem(product);
    if(!item) return false;
    var strong=item.querySelector('strong');
    if(product.display && strong && norm(strong.textContent)!==product.display) strong.textContent=product.display;
    if(item.dataset.k12DetailLink==='1') return true;
    item.dataset.k12DetailLink='1';
    item.setAttribute('role','link');
    item.setAttribute('tabindex','0');
    item.setAttribute('aria-label',(strong?norm(strong.textContent):product.names[0])+' detay sayfasını aç');
    item.style.cursor='pointer';
    item.style.transition='transform .18s ease, box-shadow .18s ease, border-color .18s ease, background .18s ease';
    var open=function(){window.location.href=product.href;};
    item.addEventListener('click',open);
    item.addEventListener('keydown',function(e){
      if(e.key==='Enter' || e.key===' '){e.preventDefault();open();}
    });
    item.addEventListener('mouseenter',function(){
      item.style.transform='translateY(-2px)';
      item.style.boxShadow='0 12px 28px rgba(6,27,66,.10)';
      item.style.borderColor='rgba(254,98,3,.58)';
      item.style.background='#fff7f1';
    });
    item.addEventListener('mouseleave',function(){
      item.style.transform='';item.style.boxShadow='';item.style.borderColor='';item.style.background='';
    });
    if(!item.querySelector('.k12-detail-marker')){
      var marker=document.createElement('span');
      marker.className='k12-detail-marker';
      marker.textContent='Detayları Gör  →';
      marker.style.cssText='display:block;margin-top:7px;color:#fe6203;font-size:10px;font-weight:850;letter-spacing:.015em';
      item.appendChild(marker);
    }
    return true;
  }

  function markAnchors(){
    ['yetkinlik-programlari','yetkinlik-atolyeleri','yetkinlik-seminerleri'].forEach(function(id){
      var el=document.getElementById(id);
      if(el) el.style.scrollMarginTop='118px';
    });
    var heading=[].slice.call(document.querySelectorAll('h1,h2,h3,h4,div,p')).find(function(el){return norm(el.textContent)==='Yetkinlik Geliştirme Programları';});
    if(heading && !document.getElementById('programlar')){
      heading.id='programlar';heading.style.scrollMarginTop='118px';
    }
  }

  var attempts=0;
  var timer=setInterval(function(){
    attempts++;
    ensureCatalogCompleteness();
    markAnchors();
    var linked=0;
    products.forEach(function(p){if(makeClickable(p)) linked++;});
    var target=location.hash && document.querySelector(location.hash);
    if(target && !target.dataset.k12HashScrolled){
      target.dataset.k12HashScrolled='1';
      setTimeout(function(){target.scrollIntoView({behavior:'smooth',block:'start'});},120);
    }
    if(linked===products.length || attempts>=80) clearInterval(timer);
  },150);
})();