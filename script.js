// S Davison concept - demo behaviour only, nothing is submitted anywhere.
document.addEventListener('submit',function(e){
  var f=e.target; if(!f.matches('form.quoteform')) return;
  e.preventDefault();
  var box=f.querySelector('.formmsg');
  if(box){ box.hidden=false; box.textContent='Demo only \u2014 nothing was sent. On the live site this would reach the office and be logged.'; }
  f.querySelector('button.send').textContent='Received (demo)';
});
(function(){
  var sel=document.getElementById('calc-type'), sz=document.getElementById('calc-size'),
      out=document.getElementById('calc-out');
  if(!sel||!sz||!out) return;
  function go(){
    var d=parseFloat(sel.value)||0, a=parseFloat(sz.value)||0;
    if(!d||!a){ out.textContent='\u2014'; return; }
    var lo=Math.round(d*a*0.85/50)*50, hi=Math.round(d*a*1.3/50)*50;
    out.textContent='\u00a3'+lo.toLocaleString()+' \u2013 \u00a3'+hi.toLocaleString();
  }
  sel.addEventListener('change',go); sz.addEventListener('input',go); go();
})();
