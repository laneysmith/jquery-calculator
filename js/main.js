$(document).ready(function() {

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
    var string = array = array.join('').replace('=', '').replace('x', '*').replace('\u00F7', '/')
    console.log('string = ' + string)
    var result = eval(string)
    console.log(result)
    $('#screen').text(result)
    array = []
  });

});
