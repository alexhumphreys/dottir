$(function() {
  var colors = ['RebeccaPurple' , 'Red' , 'RosyBrown' , 'RoyalBlue' , 'SaddleBrown' , 'Salmon' , 'SandyBrown' , 'SeaGreen' , 'SeaShell' , 'Sienna' , 'Silver' , 'SkyBlue' , 'SlateBlue' , 'SlateGray' , 'Snow' , 'SpringGreen' , 'SteelBlue' , 'Tan' , 'Teal' , 'Thistle' , 'Tomato' , 'Turquoise' , 'Violet' , 'Wheat', 'White' ];

  var random_val = function(array) {
    return array[Math.floor(Math.random()*array.length)];
  };

  setInterval(function() {
    $('.left, .right').each(function(i, el) {
      $(el).css('background', random_val(colors));
    });
  }, 1000);
});
