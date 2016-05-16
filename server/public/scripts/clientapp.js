$(document).ready(function() {

  //Add event listener
  $('#add').on('click', function() {
    event.preventDefault();
    var values = getInputs();
    $.ajax({
      type: 'POST',
      url: '/add',
      data: values,
      success: function(response) {
        result(response);
      }
    });
  });

  //Subtract event listener
  $('#subtract').on('click', function() {
      event.preventDefault();
      var values = getInputs();
      $.ajax({
      type: 'POST',
      url: '/subtract',
      data: values,
      success: function(response) {
        result(response);
        }
      });
    });

    //Multiply event listener
    $('#multiply').on('click', function() {
        event.preventDefault();
        var values = getInputs();
        $.ajax({
        type: 'POST',
        url: '/multiply',
        data: values,
        success: function(response) {
          result(response);
        }
      });
    });

    //Divide event listener
    $('#divide').on('click', function() {
        event.preventDefault();
        var values = getInputs();
        $.ajax({
         type: 'POST',
         url: '/divide',
         data: values,
         success: function(response) {
           result(response);
         }
       });
    });

  //Displays answer on the DOM
  function result(response) {
    $('#answer').html('<h3>' + response + '</h3>');
  }

//Grabs values from input fields
  function getInputs() {
    var values = {};
    $.each($('#inputForm').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });
    return values;
  }
});
