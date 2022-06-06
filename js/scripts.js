$(document).ready(function() {
  $("#survey-form").submit(function(event) {
    event.preventDefault();
    const input1 = $('#input1').val();
    const input2 = $('#input2').val();
    const input3 = $('#input3').val();
  
    // const array = [input1, input2, input3];

    const arrayPush = [];
    arrayPush.push(input1, input2, input3);

    $('#result-container').show();
    $('#liInputOne').text(arrayPush[0]);
    $('#liInputTwo').text(arrayPush[1]);
    $('#liInputThree').text(arrayPush[2]);
  });
});