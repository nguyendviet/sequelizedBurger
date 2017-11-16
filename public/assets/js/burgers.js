$(()=>{
    
  $('.devour').on('click', function() {
    var id = $(this).data('id'); // if use this, can't use arrow function

    // Send PUT request
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
    })
    .then(()=>{
      // Reload page to get the updated list
      location.reload();
    });
  });

  $('.add-burger').on('click', (event)=>{
    event.preventDefault();

    var burgerName = $('.burger-name').val().trim();

    if (burgerName === '') {
      return;
    }
    else {
      var newBurger = {name: burgerName};
      
      $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger
      })
      .then(()=>{
        location.reload();
      });
    }
  });
});