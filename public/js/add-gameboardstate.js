async function newFormHandler(event) {
   event.preventDefault();
 
   const bet_amount = document.querySelector('input[name="bet_amount"]').value;
   const account_balance = document.querySelector('input[name="account_balance"]').value;

   // look out for dice paths

   // manage to get the rolling dice integer outcome and matching image-file integer based name
   // for 6 variables and passed them in the post method
 
   const response = await fetch('/api/gameboardstate', {
      method: 'POST',
      body: JSON.stringify({
         bet_amount,
         account_balance // user ID can be obtained from the session, see post-routes.js
      }),
      headers: {
         'Content-Type': 'application/json'
      }
   });
   if (response.ok) {
      document.location.replace('/dashboard'); // Use replace method
   } else {
      alert(response.statusText);
   }
 }

 document.getElementById('gameboardstate-form').addEventListener('submit', newFormHandler);
 