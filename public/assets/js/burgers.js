$(()=>{
  var url = window.location.search;
  var customerName;

  if (url.indexOf("?customerName=") !== -1) {
    customerName = url.split('=')[1];
  }

  function updateCustomer(id) {
    var newCustomer = {name: customerName};

    $.ajax('/api/customers', {
      type: 'POST',
      data: newCustomer
    })
    // .then(updateBurger(id));
  }

  // function updateBurger(id) {
  //   // Send PUT request
  //   $.ajax('/api/burgers/' + id, {
  //     type: 'PUT'
  //   })
  //   .then(()=>{
  //     // Reload page to get the updated list
  //     location.reload();
  //   });
  // }

  $('.sell').on('submit', function(event) {
    event.preventDefault();

    var id = $(this).data('id'); // if use this, can't use arrow function

    updateCustomer(id);
  });

  // THIS FUNCTION WORKS ONLY TO SELL BURGER
  // $('.sell').on('submit', function(event) {
  //   event.preventDefault();
  //   var id = $(this).data('id'); // if use this, can't use arrow function

  //   //  Send PUT request
  //   $.ajax('/api/burgers/' + id, {
  //     type: 'PUT'
  //   })
  //   .then(()=>{
  //     // Reload page to get the updated list
  //     location.reload();
  //   });
  // });

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