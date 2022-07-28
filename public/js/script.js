$(function(){
    var tab = $('.btn'); 
    var content = $('.section2 > div');

    content.hide().eq(0).show(); 

    tab.click(function(e){
      var tg = $(this);
      console.log(tg);
      
  
      if(tab.hasClass("radiobox1") === true) {
        console.log('111')
      // class가 존재함.
        /* $('.diary_title span').text('일기');
        console.log($('.diary_title span').text()); */
      }else if(tab.hasClass("radiobox2") === true) {
        console.log('222')
      // class가 존재하지 않음	
        /* $('.diary_title span').text('리스트');
        console.log($('.diary_title span').text()); */
      }

      tab.removeClass('checked'); 
      tg.addClass('checked');

      content.hide();
      content.eq($("input[type='radio']").index(this)).show();


      })

    });