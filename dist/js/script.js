//navbar-fixed
window.onscroll = function(){
    const header=document.querySelector('header');
    const fixedNav=header.offsetTop;
    const totop=document.querySelector('#to-top');
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        totop.classList.remove('hidden');
        totop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        totop.classList.remove('flex');
        totop.classList.add('hidden');
    }
};
//Humberger
const hamburger = document.querySelector('#hamburger');
const navmenu=document.querySelector('#nav-menu');
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
});

//klik di luar hamburger
window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target!= navmenu){
        hamburger.classList.remove('hamburger-active');
        navmenu.classList.toggle('hidden');
    }
});

//Darkmode toggle
const darktoggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darktoggle.addEventListener('click', function(){
    if (darktoggle.checked){
        html.classList.add('dark');
        localStorage.theme='dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme='white'
    }
});

//Pindahkan Toogle sesuai Mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
darktoggle.checked=true;
} else {
darktoggle.checked=false;
}

