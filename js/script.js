window.addEventListener('DOMContentLoaded', () => {

    /*Создадим переменную в которую можно загнать моножесто классов, для удобного использования их в коде.
    Т.е здесь он их обнаруживает один раз и все, а не перед каждой выборкой! это полезная фитча*/
    let NavBar = document.querySelector('.navBar'),
        NavBarMini = document.querySelector('.NavMini'),
        head = document.querySelector('header'),
        introH1 = document.querySelector('.intro h1'),
        introP = document.querySelector('.intro p'),
        introUl = document.querySelector('.intro ul'),
        NavImg = document.querySelector('.NavMini img'),
        NavMiniUl = document.querySelector('.NavMini ul'),
        AfterIntro = document.querySelector('.general p'),
        AfterIntroImg = document.querySelector('.general .imgs'),
        my = {
        window : $(window)
        };
    
        NavImgClick();
    /*Собственно и сама функция*/
    if (my.window.width() <= 1920) { 
    window.addEventListener('resize', () => {
       
        /*Переменная которая определяет ширину окна и загоняет ее в переменную width*/
        let width = my.window.width();
    
        /*условие трансформации окна т.е услокие которое выоплнился когда ширина окна достигнет определенных размеров*/
        
        if(my.window.width() <= 800)
        {
            NavBar.classList.remove('show');
            NavBar.classList.add('hide'); 
            NavBarMini.classList.remove('hide');
            NavBarMini.classList.add('show');  
          
                           
        }
    //     /*Возвращает все стили на свои места т.е при расширении он примет первоначальный вид*/
        else
        {
            NavBarMini.classList.remove('show');
            NavBarMini.classList.add('hide');
            NavBar.classList.remove('hide');
            NavBar.classList.add('show');
        }
        
        
    });
    }
    
    if(my.window.width() <= 800)
        {
            NavBar.classList.remove('show');
            NavBar.classList.add('hide'); 
            NavBarMini.classList.remove('hide');
            NavBarMini.classList.add('show'); 
            
        }
         /*Возвращает все стили на свои места т.е при расширении он примет первоначальный вид*/
        else
        {
            NavBarMini.classList.remove('show');
            NavBarMini.classList.add('hide');
            NavBar.classList.remove('hide');
            NavBar.classList.add('show');
        }
    
        function showAfterIntro() {
            if(AfterIntro.clientTop <= 10) {
                AfterIntro.classList.remove('hide');
                AfterIntro.classList.add('show', 'fade');
                AfterIntro.style.cssText = 'color: black';
            }

            if(AfterIntro.classList.contains('show', 'fade')) {
                AfterIntroImg.classList.remove('hide');
                AfterIntroImg.classList.add('show', 'fade2');
                
            }
        }

        window.addEventListener('scroll', showAfterIntro);
        
        
       function NavImgClick() {
           NavImg.addEventListener('click', () => {
            if (NavMiniUl.classList.contains('show')) {
                NavMiniUl.classList.remove('show');
                NavMiniUl.classList.add('hide');
                NavImg.style.transition = '';
                NavImg.style.transform = '';
            } else {
                NavMiniUl.classList.remove('hide');
                NavMiniUl.classList.add('show');
                NavImg.style.transition = 'all 0.5 ease';
                NavImg.style.transform = 'rotate(-14deg)';
            }
        });
       }
       if(my.window.width() <= 1366) {
           head.style.maxHeight = '660px';
           
       }
       

       $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
     });
 
     $(document).ready(function(){
        var offsetTop = $('.general').offset().top;
       $(window).scroll(function(){
             
             if($('.place_order').offset().top >= offsetTop){
                 $('.place_order').css({
                     backgroundColor: 'orange'
                 });
 
                
                 
                 $(".place_order").on("mouseover", function (event) {
                     event.preventDefault();
                     $('.place_order').css ({
                       backgroundColor: 'rgba(247, 173, 36, 0.4)'
                     });
                 });
 
                 $(".place_order").on("mouseleave", function (event) {
                     event.preventDefault();
                     $('.place_order').css ({
                       backgroundColor: 'orange'
                     });
                 });
             }
             
             if($('.place_order').offset().top < offsetTop){
                 $('.place_order').css({
                   backgroundColor: 'white'
                 });  
 
                 $(".place_order").on("mouseover", function (event) {
                     event.preventDefault();
                     $('.place_order').css ({
                       backgroundColor: 'rgb(255, 255, 255, 0.4)'
                     });
                 });
                 
                 $(".place_order").on("mouseleave", function (event) {
                     event.preventDefault();
                     $('.place_order').css ({
                       backgroundColor: 'white'
                     });
                 });  
             }
           });
 
           $(window).resize(function(){
             
             if($('.place_order').offset().top >= offsetTop){
                 $('.place_order').css({
                     backgroundColor: 'orange'
                 });
 
                
                 
                 $(".place_order").on("mouseover", function (event) {
                     event.preventDefault();
                     $('.place_order').css ({
                       backgroundColor: 'rgba(247, 173, 36, 0.4)'
                     });
                 });
 
                 $(".place_order").on("mouseleave", function (event) {
                     event.preventDefault();
                     $('.place_order').css ({
                       backgroundColor: 'orange'
                     });
                 });
             }
             
             if($('.place_order').offset().top < offsetTop){
                 $('.place_order').css({
                   backgroundColor: 'white'
                 });  
 
                 $(".place_order").on("mouseover", function (event) {
                     event.preventDefault();
                     $('.place_order').css ({
                       backgroundColor: 'rgb(255, 255, 255, 0.4)'
                     });
                 });
                 
                 $(".place_order").on("mouseleave", function (event) {
                     event.preventDefault();
                     $('.place_order').css ({
                       backgroundColor: 'white'
                     });
                 });  
             }

             if($('.place_order').offset().top >= offsetTop){
                $('.place_order').css({
                    backgroundColor: 'orange'
                });

               
                
                $(".place_order").on("mouseover", function (event) {
                    event.preventDefault();
                    $('.place_order').css ({
                      backgroundColor: 'rgba(247, 173, 36, 0.4)'
                    });
                });

                $(".place_order").on("mouseleave", function (event) {
                    event.preventDefault();
                    $('.place_order').css ({
                      backgroundColor: 'orange'
                    });
                });
            }
            
            if($('.place_order').offset().top < offsetTop){
                $('.place_order').css({
                  backgroundColor: 'white'
                });  

                $(".place_order").on("mouseover", function (event) {
                    event.preventDefault();
                    $('.place_order').css ({
                      backgroundColor: 'rgb(255, 255, 255, 0.4)'
                    });
                });
                
                $(".place_order").on("mouseleave", function (event) {
                    event.preventDefault();
                    $('.place_order').css ({
                      backgroundColor: 'white'
                    });
                });  
            }
          

           });

           if($('.place_order').offset().top >= offsetTop){
            $('.place_order').css({
                backgroundColor: 'orange'
            });

           
            
            $(".place_order").on("mouseover", function (event) {
                event.preventDefault();
                $('.place_order').css ({
                  backgroundColor: 'rgba(247, 173, 36, 0.4)'
                });
            });

            $(".place_order").on("mouseleave", function (event) {
                event.preventDefault();
                $('.place_order').css ({
                  backgroundColor: 'orange'
                });
            });
        }
        
        if($('.place_order').offset().top < offsetTop){
            $('.place_order').css({
              backgroundColor: 'white'
            });  

            $(".place_order").on("mouseover", function (event) {
                event.preventDefault();
                $('.place_order').css ({
                  backgroundColor: 'rgb(255, 255, 255, 0.4)'
                });
            });
            
            $(".place_order").on("mouseleave", function (event) {
                event.preventDefault();
                $('.place_order').css ({
                  backgroundColor: 'white'
                });
            });  
        }
      });
      var offsetTop = $('.general').offset().top;
      if($('.place_order').offset().top >= offsetTop){
        $('.place_order').css({
            backgroundColor: 'orange'
        });

       
        
        $(".place_order").on("mouseover", function (event) {
            event.preventDefault();
            $('.place_order').css ({
              backgroundColor: 'rgba(247, 173, 36, 0.4)'
            });
        });

        $(".place_order").on("mouseleave", function (event) {
            event.preventDefault();
            $('.place_order').css ({
              backgroundColor: 'orange'
            });
        });
    }
    
    if($('.place_order').offset().top < offsetTop){
        $('.place_order').css({
          backgroundColor: 'white'
        });  

        $(".place_order").on("mouseover", function (event) {
            event.preventDefault();
            $('.place_order').css ({
              backgroundColor: 'rgb(255, 255, 255, 0.4)'
            });
        });
        
        $(".place_order").on("mouseleave", function (event) {
            event.preventDefault();
            $('.place_order').css ({
              backgroundColor: 'white'
            });
        });  
    }
  

});            


