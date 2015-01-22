$(function() {

  var repeatTime = 3000;

  var leftColors = ['RebeccaPurple' , 'Red' , 'RosyBrown' , 'RoyalBlue' , 'SaddleBrown' , 'Salmon' , 'SandyBrown' , 'SeaGreen' , 'SeaShell' , 'Sienna' , 'Silver'];
  var rightColors = ['SkyBlue' , 'SlateBlue' , 'SlateGray' , 'Snow' , 'SpringGreen' , 'SteelBlue' , 'Tan' , 'Teal' , 'Thistle' , 'Tomato' , 'Turquoise' , 'Violet' , 'Wheat', 'White' ];

  createTransitionImage = function(selector, array, interval, index) {
    setInterval(function() {
      $(selector).css('background', array[index]);
      if (index + 1 == array.length) {
        index = 0;
      } else {
        index++;
      }
    }, interval);
  };

  createTransitionImage('.left', leftColors, repeatTime, 0);
  createTransitionImage('.right', rightColors, repeatTime, 0);
});
