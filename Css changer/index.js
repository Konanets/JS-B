let rightTop=document.getElementById('range1');
let leftTop=document.getElementById('range2');
let rightBottom=document.getElementById('range3');
let leftBottom=document.getElementById('range4');
let height=document.getElementById('range5');
let width=document.getElementById('range6');
let box=document.getElementById('box3');

rightTop.addEventListener('change',(e)=>{
    box.style.borderTopRightRadius=`${rightTop.value}%`;
})
leftTop.addEventListener('change',(e)=>{
    box.style.borderTopLeftRadius=`${leftTop.value}%`;
})
rightBottom.addEventListener('change',(e)=>{
    box.style.borderBottomRightRadius=`${rightBottom.value}%`;
})
leftBottom.addEventListener('change',(e)=>{
    box.style.borderBottomLeftRadius=`${leftBottom.value}%`;
})


height.addEventListener('change',(e)=>{
    box.style.height=`${height.value}%`;
})
width.addEventListener('change',(e)=>{
    box.style.width=`${width.value}vw`;
})


