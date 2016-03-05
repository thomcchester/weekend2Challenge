var count=0;

$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data);
        // appendDom(data);
        buttonMaker();
        console.log(count);
        $(".prev").on("click",buttonDown);
        $(".next").on("click",buttonUp);
      }
    });
});

function buttonMaker(){
  $('body').append('<button class="prev">prev</button><button class="next">next</button>')
}

function buttonUp(data){
  if (count==22){
    count=0
  }
  else{
    count++
  }
  console.log(count)
  console.log(data)


}

function buttonDown(){
  if (count==0){
    count=22
  }
  else{
    count--
  }
 console.log(count)
}



// // When pulling down this file, open it up in terminal and run 'npm install' in
//  the terminal.
// //
// // Don't forget, to test an application with a node server, you will need to
// enter 'npm start' (as defined in the package.json file).
// //
// // To shut down a server, hold down control and press 'C'.
// //
// // I created a new JSON data file, inside it, you will find an array of objects.
//  Each object, is each one of you!
// //

// function appendDom(data){
//   console.log(data.kappa.length)
//   for(i=0;i<23;i++){
//     console.log(data.kappa[i].name);
//     $(".container").append('<div class="person"></p>');
//     $el=$(".container").children().last();
//     $el.append("<p class='name'> Name:  "+data.kappa[i].name+"</>");
//     $el.append("<p class='location'>"+data.kappa[i].location+"</p>");
//     $el.append("<p class='spirit_animal'>"+data.kappa[i].spirit_animal+"</p>");
//     $el.append("<p class='shoutout'>"+data.kappa[i].shoutout+"</p>");
//   };
// };

// // You first task is to make an AJAX call from the client side app.js, using the
//  .ajax method, which will be set to GET, and access the '/data' url. When
//  successful, it should bring the data back down. You will then need to combine
// that with what you learned today about making a carousel.
// //
// // What I would like to see on the DOM, is one person represented. A series of
//  22 (or the number of people in the cohort) index points with the first person's
//   index highlighted or called out in style differently than the others. Also on
//    the DOM should be a 'next' and 'prev' button. Clicking on the next button
//    should navigate to the next person, clicking on the prev button should
//    navigate to the previous person. The highlighted index point should update
//     also as you click next and prev.
// //
// // When a person is displayed, show their name, their city, and their piece of
//  shoutout feedback. Only one person should be show cased at any given time.
// //
// // You will need to combine everything you learned this week to accomplish this
//  task, and each of the challenges you have completed this week play a part in
//  this task.
// //
// // I posted an example from Zeta that I did here, so you can see the
// functionality (Its ugly however), just know I minified the code (no cheating!):
