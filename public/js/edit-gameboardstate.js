  async function editFormHandler(event) {
    event.preventDefault();
  
    // const title = document.querySelector('input[name="post-title"]').value.trim();
    // const post_content = document.querySelector('textarea[name="post-content"]').value;

    const cash = document.getElementById('cash').value.trim();  // compute account_balance
    const bet_amount = document.getElementById('bet_amount').value.trim();

    var account_balance = cash;

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    console.log(cash + " " + bet_amount)
    alert("Button Edit got clicked!")

    // const response = await fetch(`/api/posts/${id}`, {
    const response = await fetch(`/api/gameboardstate/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        bet_amount,
        account_balance
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.getElementById('edit-game-form').addEventListener('submit', editFormHandler);
   
  