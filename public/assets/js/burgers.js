$(()=>{
    
  $('.devour').on('click', function(event) {
    var id = $(this).data('id'); // if use this, can't use arrow function

    console.log('id shoud get ' + id);

    // Send PUT request
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
    })
    .then(()=>{
      console.log('burger devoured');
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
        console.log('new burger created');
        location.reload();
      });
    }
  });
});