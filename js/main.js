$(function() {

  var repeatTime = 6000;

  var leftPics = ['l1' , 'l2' , 'l3' , 'l4' , 'l5' , 'l6' , 'l7'];
  var rightPics = ['r1' , 'r2' , 'r3' , 'r4' , 'r5'];

  createTransitionImage = function(selector, array, interval, index) {
    setInterval(function() {
      $(selector).css('background-image', 'url(images/' + array[index] + '.jpg)');
      if (index + 1 == array.length) {
        index = 0;
      } else {
        index++;
      }
    }, interval);
  };

  createTransitionImage('.left', leftPics, repeatTime, 0);
  createTransitionImage('.right', rightPics, repeatTime, 0);
});
