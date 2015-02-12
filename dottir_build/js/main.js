$(function() {

  var repeatTime = 10000;

  var leftPics = ['l1', 'l2' , 'l3' , 'l4' , 'l5' , 'l6' ];
  var rightPics = ['r2' , 'r3' , 'r4' , 'r5', 'r1'];

  function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = "images/" + this + ".jpg";
        // Alternatively you could use:
        // (new Image()).src = this;
    });
  }

  preload(leftPics);
  preload(rightPics);

  function changeImage(selector, path) {
    $(selector).css('background-image', path);
  }

  createTransitionImage = function(selector, array, interval, index) {
    setInterval(function() {
      changeImage(selector, 'url(images/' + array[index] + '.jpg)');
      if (index + 1 == array.length) {
        index = 0;
      } else {
        index++;
      }
    }, interval);
  };

  setTimeout(function() {
    changeImage('.right', 'url(images/r1.jpg)');
  }, 5000);

  createTransitionImage('.left', leftPics, repeatTime, 0);
  setTimeout(function() {
    createTransitionImage('.right', rightPics, repeatTime, 0);
  }, 5000);
});