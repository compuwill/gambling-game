const scoreinfo = document.getElementById("scoreinfo");
const ratediv = document.getElementById("rate");
 
async function submitingRateHandler(event) {
   event.preventDefault();
   // alert("youre in submit btn event")
   const response = await fetch('/api/ratings', {
      method: 'POST',
      body: JSON.stringify({ score:  $('#jqxRating').jqxRating('getValue')}),
      headers: {'Content-Type': 'application/json'}
   });
   if (response.ok) {
         response.json().then((data) => {
         
         console.log(data);
         ratediv.innerHTML = "&raquo Thank you for rating! &laquo";
         $('#send_score_btn').addClass('no-hover');
         $('#jqxRating').addClass('no-hover');
         // alert( $('#jqxRating').jqxRating('getValue'));
         if (scoreinfo != null) { scoreinfo.value =  $('#jqxRating').jqxRating('getValue')}
      });
   }
   else {
      console.log(response);
      response.json().then((data) => {
      alert(data.message);
    });
   }
};

document.getElementById("send_score_btn").addEventListener("click", submitingRateHandler);
