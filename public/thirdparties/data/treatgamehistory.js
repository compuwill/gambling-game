// function generatedata(rowscount, hasNullValues) {
  function generatedata( ) {
   //attemt to read data file
   $.getJSON("/gamehistory.json", function(json) {
     console.log(zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz); 
     console.log(json); // this will show the info it in firebug console
   });
   // var data = new Array();
   // for (var i = 0; i < makes.length; i++) {
   //     var row = {};
   //     row.make = makes[i].label;
   //     row.fuelType = fuelType[Math.floor(Math.random() * fuelType.length)];
   //     row.vehicleType = vehicleType[Math.floor(Math.random() * vehicleType.length)];
   //     var powerIndex = Math.floor(Math.random() * power.length);
   //     if (powerIndex == power.length - 1) powerIndex --;
   //     row.powerFrom = power[powerIndex];
   //     row.powerTo = power[powerIndex + 1];
   //     data.push(row);
   // }
   // return data;
}