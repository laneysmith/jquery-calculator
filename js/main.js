$(document).ready(function() {

  var num1 = 0
  var num2 = 0
  var math = ''

  $('.buttons > span').click(function() {
    $('#screen').append($(this).text())
  });

  $('#cancel').click(function() {
    $('#screen').empty()
  });

  $('#calc').click(function() {
    math = $('#screen').text().replace('=', '').replace('x', '*')
    math = eval(math)
    console.log(math)
    $('#screen').text(math)
  });

});
