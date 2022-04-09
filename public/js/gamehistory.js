const historyBtn = document.getElementById("history_btn");
const username = document.getElementById("target_username");

// async function gettingUserHistoryHandler(event) {
//    event.preventDefault();
//    alert("youre in history submit btn event")
//    const response = await fetch('/api/history', {
//       method: 'POST',
//       body: JSON.stringify({ score:  $('#jqxRating').jqxRating('getValue')}),
//       headers: {'Content-Type': 'application/json'}
//    });
//    if (response.ok) {
//          response.json().then((data) => {
//          
//          console.log(data);
//          ratediv.innerHTML = "&raquo Thank you for rating! &laquo";
//          scoreinfo.value =  $('#jqxRating').jqxRating('getValue')
//       });
//    }
//    else {
//       console.log(response);
//       response.json().then((data) => {
//       alert(data.message);
//     });
//    }
// };
 
historyBtn.addEventListener("click", gettingUserHistoryHandler); 

// async function gettingUserHistoryHandler(event){
//    event.preventDefault();
//    alert("youre in history submit btn event");
//    alert(username);
// 
//    const response = await fetch('/api/history', {
//       method: "POST",
//       headers: { "Content-Type": 'application/json' },
//       body: JSON.stringify(
//          { 
//          score:  $('#jqxRating').jqxRating('getValue'),
//          username: username.value
//          }
//       )            
// 
//       })
//       console.log('---++++++++++++++++++++++++++---');
//       console.log(body);
//    };
//   
// 
//     if (response.ok) 
//    {
//       alert("OK");
//       response.json().then((data) => {
//       
//       console.log(data);
// 
//       const newRating = {
//          score: data.score,         
//          username: data.username
//           
//          };
//          // Obtain existing reviews
//       fs.readFile('../db/ratings.json', 'utf8', (err, data) => {
//          if (err) {
//             console.error(err);
//          } 
//          else {
//             const parseRatings = JSON.parse(data);
//             parseRatings.push(newRating);
// 
//             // Write updated reviews back to the file
//             fs.writeFile(
//                './db/reviews.json',
//                JSON.stringify(parseRatings, null, 4),
//                (writeErr) =>
//                   writeErr
//                   ? console.error(writeErr)
//                   : console.info('Successfully updated reviews!')
//             );
//          }
//       })
//    } )
// } 
// else
// {
//    console.log(response);
//    response.json().then((data) => {
//       alert(data.message);
//     });
// }

