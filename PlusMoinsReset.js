let reset=document.getElementById('reset')
let plus1=document.getElementById('plus1')
let moins1=document.getElementById('moins1')
let text=document.getElementById('text')
let N=0
plus1.addEventListener('click',function(){
    N++
    text.innerHTML=N
    if(N>0)
        text.style.color="blue"
    else if(N<0)
        text.style.color="red"
    else
        text.style.color="black"
})
moins1.addEventListener('click',function(){
    N--
    text.innerHTML=N
    if(N>0)
        text.style.color="blue"
    else if(N<0)
        text.style.color="red"
    else
        text.style.color="black"
})
reset.addEventListener('click',function(){
    N=0
    text.innerHTML=N
    if(N==0)
        text.style.color="black"
})