document.addEventListener('plusready', function(){
   			//console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
   			
});
 function show(id){
  var a=document.getElementById(id);
  if(a.style.display=="none"){
   a.style.display ="block";
 }else{
  a.style.display ="none";
 }
 }