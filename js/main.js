$(document).ready(function() {

  var math = ''
  var array = []

  $('.buttons > span').click(function() {
    $('#screen').append($(this).text())
  });

  $('#cancel').click(function() {
    $('#screen').empty()
    array = []
  });

  $('.operator').not('#calc').click(function() {
    array.push($('#screen').text())
    $('#screen').empty()
    console.log(array)
  })

  $('#calc').click(function() {
    array.push($('#screen').text())
    var string = array = array.join('').replace('=', '').replace('x', '*').replace('&divide;', '/')
    console.log('string = ' + string)
    var result = eval(string)
    console.log(result)
    $('#screen').text(result)
    array = []
  });

  // $('#calc').click(function() {
  //   math = $('#screen').text().replace('=', '').replace('x', '*').replace('&divide;', '/')
  //   math = eval(math)
  //   console.log(math)
  //   $('#screen').text(math)
  // });

});
