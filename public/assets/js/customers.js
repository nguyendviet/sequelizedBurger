$(()=>{
    
  $('.remove').on('click', function() {
    var id = $(this).data('id'); // if use this, can't use arrow function

    // Send DESTROY request
    $.ajax('/api/customers/' + id, {
      type: 'DELETE',
    })
    .then(()=>{
      // Reload page to get the updated list
      location.reload();
    });
  });

  $('.add-customer').on('click', (event)=>{
    event.preventDefault();

    var customerName = $('.customer-name').val().trim();

    if (customerName === '') {
      return;
    }
    else {
      var newCustomer = {name: customerName};
      
      $.ajax('/api/customers', {
        type: 'POST',
        data: newCustomer
      })
      .then(()=>{
        location.reload();
      });
    }
  });
});