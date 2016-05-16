$(document).ready(function() {
  // event listeners
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

  function result(response) {
    $('#answer').html('<h3>' + response + '</h3>');
  }

  function getInputs() {
    var values = {};
    $.each($('#inputForm').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });
    return values;
  }
});
