document.body.onload = function(){
  setTimeout(function() {
    var preloader = document.getElementById('loader'),
    spinningLogo = document.querySelector('.logo-wrapper'),
    firstContent = document.querySelector('.section:first-child .contents')
    ;
    if( !preloader.classList.contains('done') ){
      preloader.classList.add('done');
    }
    if( !spinningLogo.classList.contains('back') ){
      spinningLogo.classList.add('back');
    }
    setTimeout(function(){
      if( !firstContent.classList.contains('show') ){
        firstContent.classList.add('show');
      }
    },1000);
  }, 1000);
};
