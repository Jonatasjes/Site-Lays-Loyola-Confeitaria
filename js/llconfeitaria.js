            $(document).ready(function(){
                $('.owl-carousel').owlCarousel({
                    stagePadding: 50,
                    loop:true,
                    margin:10,
                    stagePadding:0,
                    nav:true,
                    autoplay:true,
                    autoplayTimeout:5000,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:1
                        },
                        1000:{
                            items:1
                        }
                    }
                })

                $("#btn-busca").on("click", function(){
                    $("#areabusca").toggleClass("ativo");
		        })
                $("#btn-busca").on("focus", function(){
                    $("#areabusca").select();
		        });
                $("#areabusca").on("blur", function(){
                    $("#areabusca").removeClass("ativo");
		        });
                
                $("#btn-bars").on("click", function(){
                  $("header").toggleClass("open-menu");
                });

                $("#menu-mobile-mask, .btn-close").on("click", function(){
                  $("header").removeClass("open-menu");
                });
                
                $("#btn-search").on("click", function(){

                  $("header").toggleClass("open-search");
                  $("#input-search-mobile").focus();

                });
		        
            });