wow=new WOW({boxClass:"wow",animateClass:"animated",offset:200,mobile:!0,live:!0}),wow.init(),$(document).ready(function(){$('a[href="#"]').click(function(e){e.preventDefault()}),$(".menu_btn").click(function(){var e=$(this).closest("#menu"),o=$(this).siblings(".menu_over"),t=$(this);e.toggleClass("open"),t.toggleClass("is-active"),o.click(function(){e.removeClass("open"),t.removeClass("is-active")}),e.find("a").click(function(){e.removeClass("open"),t.removeClass("is-active")})}),$(".tabs_trigger").find("li").click(function(){var e=$(this),o=e.siblings();content=e.parent().siblings(".tabs_content").find("div"),index=e.index(),o.removeClass("active"),e.addClass("active"),content.addClass("hide"),content.eq(index).removeClass("hide")}),$(".accordeon_trigger").click(function(){var e=$(this),o=e.parent().parent().find(".accordeon_trigger"),t=e.siblings(".accordeon_content"),i=e.parent().parent().find(".accordeon_content");t.hasClass("open")?(t.stop().slideUp(300).removeClass("open"),e.removeClass("active")):(i.stop().slideUp(300).removeClass("open"),t.stop().slideDown(300).addClass("open"),o.removeClass("active"),e.addClass("active"))}),$(".modal-trigger").on("click",function(){var e=$(this).data("modal"),o=$(".modal_over"),t=$("#modal-"+e);t.toggleClass("open").next(".modal_over").toggleClass("open"),$(".modal_close").on("click",function(){t.removeClass("open"),o.removeClass("open")}),o.on("click",function(){t.removeClass("open"),o.removeClass("open")})}),$("#scrollbar1").tinyscrollbar({axis:"y",thumbSize:50,wheel:!0,wheelSpeed:10}),$("#scrollbar2").tinyscrollbar({axis:"y",thumbSize:50,wheel:!0,wheelSpeed:10});var e=$(".tooltip").tooltipster({theme:"tooltipster-noir",delayTouch:0,trigger:"click",maxWidth:200,contentAsHTML:!0,interactive:!0,side:["right","top","bottom","left"],zIndex:97});window.matchMedia("(max-width: 720px)").matches?e.tooltipster("disable"):window.matchMedia("(min-width: 721px)").matches&&e.tooltipster("enable")});
//# sourceMappingURL=script.js.map