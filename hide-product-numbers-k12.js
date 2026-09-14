(function(){
  function cleanNumbers(){
    var mega=document.getElementById('mega');
    if(mega){
      mega.querySelectorAll('strong').forEach(function(el){
        var t=el.textContent||'';
        var cleaned=t.replace(/^\s*\d{2}\s*[·.\-]\s*/,'');
        if(cleaned!==t) el.textContent=cleaned;
      });
    }

    document.querySelectorAll('.product-family-accordion summary small').forEach(function(el){
      el.remove();
    });
  }

  var tries=0;
  var timer=setInterval(function(){
    tries++;
    cleanNumbers();
    if(tries>=120) clearInterval(timer);
  },100);

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',cleanNumbers,{once:true});
  }else{
    cleanNumbers();
  }
})();