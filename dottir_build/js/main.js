$(function() {

  var repeatTime = 10000;

  var leftPics = ['l1', 'l2' , 'l3' , 'l4' , 'l5' ];
  var rightPics = ['r2' , 'r3' , 'r4' , 'r5', 'r1'];

  function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = "images/" + this + ".jpg";
    });
  }

  function preloadImage(path, callback) {
    img = new Image();

    img.onload = function() {
      callback();
    }
    img.src = path;

  }

  function changeImage(selector, path) {
    $(selector).css('background-image', path);
  }

  createTransitionImage = function(selector, array, interval, index) {
    setInterval(function() {
      preloadImage('images/' + array[index] + '.jpg', function() {
        changeImage(selector, 'url(images/' + array[index] + '.jpg)');
        if (index + 1 == array.length) {
          index = 0;
        } else {
          index++;
        }
      });
    }, interval);
  };

  setTimeout(function() {
    var path = 'images/r1.jpg';
    preloadImage(path, function() {
      changeImage('.right', 'url(' + path + ')');
    });
  }, 5000);

  createTransitionImage('.left', leftPics, repeatTime, 0);
  setTimeout(function() {
    createTransitionImage('.right', rightPics, repeatTime, 0);
  }, 5000);
});
