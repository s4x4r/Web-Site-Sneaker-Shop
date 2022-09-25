$(".button").click(function() {
  if($(this).attr("filter") && $(this).attr("filter") !== "all"){
    $(".filter > div*[filter !='"+$(this).attr('filter')+"']").fadeOut(700);
    $(".filter > div*[filter ='"+$(this).attr('filter')+"']").fadeIn(700);
  }else{
   $(".filter > div").fadeIn(700);
  }
});