document.querySelector('.logo').onclick = () => {
    location.reload();
};

document.querySelector('.nav_btn').onclick = (e) => {
    e.preventDefault(); // vor href="#"-y chashxati
    document.querySelector('.nav > ul').classList.toggle('ul_active');
    document.querySelector('.header_text').classList.toggle('header_text_none');
    document.querySelector('.transform_block').classList.toggle('transform_block_transform');
    
    var logo = document.querySelectorAll('.logo span');
    for(var i=0; i<2; i++){
        logo[i].classList.toggle('span_active');
    }
    document.querySelector('.nav_btn').classList.toggle('nav_btn_active');
}

window.onscroll = () => {
    if(document.documentElement.scrollTop > 500){
        document.querySelector('.up').style.transform = "scale(1)";
    }else{
        document.querySelector('.up').style.transform = "scale(0)";
    }
}

$(document).ready(function(){
    $('.title').click(function(){
        if($('.accordion_item').hasClass('one')){
            $('.title').not($(this)).removeClass('active');
            $('.text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});