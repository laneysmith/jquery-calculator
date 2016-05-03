$(document).ready(function() {

  var array = []

  $('.buttons > span').click(function() {
    $('#screen').append($(this).text())
  });

  $('#zero').click(function() {
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
    var string = array = array.join('').replace('=', '').replace(/x/g, '*').replace(/[^-+*0-9]/g, '/')
    console.log('string = ' + string)
    if (eval(string)%1===0) {
      var result = eval(string)
    } else {
      var result = eval(string).toFixed(6)
    }
    $('#screen').text(result)
    array = []
  });

});
