const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, flyOverTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(flyOverTimes);
  printPassTimes(flyOverTimes);
});

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
  
//   fetchCoordsByIP(ip, (error, coords)=> {
//     if (error) {
//       console.log("It didn't work!" , error);
//       return;
//     }
//     console.log('It worked! Returned coords:' , coords);

//     fetchISSFlyOverTimes(coords, (error, flyOverTimes)=> {
//       if (error) {
//         console.log("It didn't work!" , error);
//         return;
//       }
    
//       console.log('It worked! Returned ISS fly over times:' , flyOverTimes);
//     });
//   });
// });