var count=-1;

$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        buttonMaker();
        carniesMakingCarosels();
        display(data);
        eventListenersAndCarnieOpperators();
        timer();
      }
    });
});

function resetClick(){
  timercount=0;
}
function timer(){
  var timercount=0
  setInterval(function(){
    $(".prev").click(function(){
      timercount=0;
    })
    $(".next").click(function(){
      timercount=0;
    })
    timercount++;
    console.log(timercount)
    if (timercount%10==0){
      buttonUp();
    }},500)
}



   function resetTimer() {
       clearTimeout(t);
       t = setTimeout(logout, 3000)
   }

function eventListenersAndCarnieOpperators(){
  $(".prev").on("click",buttonDown);
  $(".next").on("click",buttonUp);
}
function carniesMakingCarosels(){
  $('.container').append('<div class="wheel"></div>');
  $el=$('.container').children().last()
  for (i=0;i<23;i++){
    $el.append('<div class="pony"><p></p></div>');
  }
}

function buttonMaker(){
  $('.container').append('<button class="prev">prev</button><button class="next">next</button>')
}

function display(data){
  for (i=0;i<data.kappa.length;i++){
    $('.container').append('<div class="person"><p>'+data.kappa[i].name +'</p></div>');
    $el=$('.container').children().last();
    $el.append('<p>'+data.kappa[i].location +'</p>');
    $el.append('<p>'+data.kappa[i].spirit_animal +'</p>');
    $el.append('<p>'+data.kappa[i].shoutout +'</p>');
  }
}

function buttonUp(data){
  if (count==22){
    count=0
  }
  else{
    count++
  }
  //make the events
  $('.container').children('.person').eq(count-1).fadeOut("slow")
  $('.container').children('.person').eq(count).delay(800).fadeIn("slow")
  $('.container').children('.wheel').children('.pony').eq(count-1).removeClass("horse");
  $('.container').children('.wheel').children('.pony').eq(count).addClass("horse");
  timercount=0;
}

function buttonDown(){
  //had to do it it a little different here, ran into soome timing issues so I did it this way.
  $('.container').children('.person').eq(count).fadeOut("slow")
  $('.container').children('.wheel').children('.pony').eq(count).removeClass("horse");
  if (count==0){
    count=22
  }else if(count==-1){
    count=22
  }
  else{
    count--
  }
    $('.container').children('.person').eq(count).delay(800).fadeIn("slow")
    $('.container').children('.wheel').children('.pony').eq(count).addClass("horse");

}

// one thing that I really dont like it if you click quick and fast more shows up
// below. I could not quite figure out how to make that go away.
