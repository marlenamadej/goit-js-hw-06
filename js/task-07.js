const text=document.querySelector('#text');
const range=document.querySelector('#font-size-control');
range.addEventListener("input",function(){
   text.style.fontSize=this.value+"px"
})

// ZROBIONE