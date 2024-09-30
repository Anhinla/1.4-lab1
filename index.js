const nav= document.querySelector('header');
window.addEventListener("scroll",()=>{
    let position = window.scrollY;
    if(position>=50){
        nav.classList.add('custom-header')
    }else{
        nav.classList.remove('custom-header');
    }
})