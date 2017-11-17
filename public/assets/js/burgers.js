$(()=>{
  var customer = $('.customer');

  getCustomer();

  // A function to get Authors and then render our list of Authors
  function getCustomer() {
    $.get('/api/customers', renderCustomerList);
  }
  // Function to either render a list of authors, or if there are none, direct the user to the page
  // to create an author first
  function renderCustomerList(data) {
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createCustomerRow(data[i]));
    }
    customer.empty();
    customer.append(rowsToAdd);
    customer.val(data.id);
  }

  // Creates the author options in the dropdown
  function createCustomerRow(data) {
    var listOption = $("<option>");
    listOption.attr("value", data.id);
    listOption.text(data.customer_name);
    return listOption;
  }
    
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