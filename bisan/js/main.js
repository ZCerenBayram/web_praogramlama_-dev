$(document).ready(function(){
    var num=1;
    $(".slideright").click(function(){
      
      $(".slidetitle"+num).addClass('slidetitlehide');
      $("header").removeClass('header'+num);
      num=num+1;
      if(num==0) num=3;
      if(num==4) num=1;
      $("header").addClass('header'+num);
      $(".slidetitle"+num).removeClass('slidetitlehide');
      $(".slidetitle"+num).addClass('slidetitleshow');
  
     
    });
    $(".slideleft").click(function(){
      
      $(".slidetitle"+num).addClass('slidetitlehide');
      $("header").removeClass('header'+num);
      num=num-1;
      if(num==0) num=3;
      if(num==4) num=1;
      $("header").addClass('header'+num);
      $(".slidetitle"+num).removeClass('slidetitlehide');
      $(".slidetitle"+num).addClass('slidetitleshow');
  
     
    });
  
  
    $(".category").mouseenter(function(){
      var ctegory=$(this).attr('id');
     
  
      $("#"+ctegory).css("box-shadow","0px 0px 20px 30px #eeeeee");
  
      $("#"+ctegory+" > .categoryover > a > div.cattitle").removeClass('cattitlepassive');
      $("#"+ctegory+" > .categoryover > a > div.cattitle").addClass('cattitleactive');
      });
  
      $(".category").mouseleave(function(){
      var ctegory=$(this).attr('id');
      $("#"+ctegory).css("box-shadow","none");
      $("#"+ctegory+" > .categoryover > a > div.cattitle").addClass('cattitlepassive');
      $("#"+ctegory+" > .categoryover > a > div.cattitle").removeClass('cattitleactive');
      });  
      var newsContentMarginLeft=0;
      var newsNum=5;
       $("#arrow1").click(function(){
           if(newsNum>1){
              newsContentMarginLeft= newsContentMarginLeft-305;
              newsNum=newsNum-1;
              $(".newsContent").css("margin-left", newsContentMarginLeft + "px");
           }
  
       });  
  
       $("#arrow2").click(function(){
          if(newsNum<5){
              newsContentMarginLeft= newsContentMarginLeft+305;
              newsNum=newsNum+1;
              $(".newsContent").css("margin-left", newsContentMarginLeft + "px");
          }
  
       });    
  
      $(".artimg").mouseenter(function(){
          var img=$(this).attr('id');   
          $("#"+img+" > img").css("filter", "grayscale(0%)");
      });
      $(".artimg").mouseleave(function(){
          var img=$(this).attr('id');   
          $("#"+img+" > img").css("filter", "grayscale(100%)");
      });    
  
  });