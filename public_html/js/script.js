function checkMobile(){matchMedia("only screen and (max-width: 540px)").matches?($(".fancybox").unbind("click"),$(".fancybox").on("click",function(e){e.preventDefault()}),$(".speaker").on("click",function(e){var t=$(this).children(".detail:first");t.toggle(),t.children(".name:first").toggle()})):$(".fancybox").fancybox({maxWidth:800,fitToView:!1,width:"80%",autoSize:!1,closeClick:!1,openEffect:"none",closeEffect:"none",autoHeight:"true"})}!function(e){e(".js_nav_link").localScroll({offset:-80}),e("#sponsors").on("mouseover click","li",function(t){e(".big-sponsor").addClass("hidden"),e("."+this.id+".big-sponsor").removeClass("hidden")}),checkMobile(),e(window).resize(function(){checkMobile()})}(jQuery);