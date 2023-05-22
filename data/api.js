import {API_TOKEN} from '@env';


// export default function FetchData(){
//     return new Promise((resolve, reject) => {
//         // access data to airtable
//         var Airtable = require('airtable');
//         var base = new Airtable({apiKey: API_TOKEN}).base('appxT9ln6ixuCb3o1');
        
//         const arrRecords = [];
//         base('Surf Destinations').select({
//         fields: ["Destination", "Destination State/Country", "Photos", "Difficulty Level", "Surf Break", "Peak Surf Season Begins", "Peak Surf Season Ends", "Magic Seaweed Link", "Geocode"],
//         view: "Main View"
//         }).eachPage(function page(records, fetchNextPage) {
//         // This function (`page`) will get called for each page of records.
    
//         records.forEach(function(record) {
//             arrRecords.push(record);
//             //console.log('Retrieved', record);
//         });
    
//         // To fetch the next page of records, call `fetchNextPage`.
//         // If there are more records, `page` will get called again.
//         // If there are no more records, `done` will get called.
//         fetchNextPage();
    
//         }, function done(err) {
//         if (err) { 
//             reject(err)
//         }else{
//             resolve(arrRecords);
//         }
//         });
//     });
// }


export async function FetchHomescreenData() {
    const apiKey = API_TOKEN;
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${apiKey}`);


        var requestOptions = {
        method: 'GET',
        headers: myHeaders
        };
      const response = await fetch(
        'https://api.airtable.com/v0/appxT9ln6ixuCb3o1/Surf%20Destinations?maxRecords=10&view=Main%20View&fields%5B%5D=Destination&fields%5B%5D=Destination%20State%2FCountry&fields%5B%5D=Photos', requestOptions
      );
      const data = await response.json();
     
      return data;
    } catch (error) {
      console.error("An error occurred while retrieving data from the API: ", error);
    }
  };


export async function FetchDetailscreenData(route){
  const apiKey = API_TOKEN;
  const { itemId } = route.params

  try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${apiKey}`);


      var requestOptions = {
      method: 'GET',
      headers: myHeaders
      };
    const response = await fetch(
      `https://api.airtable.com/v0/appxT9ln6ixuCb3o1/Surf%20Destinations/${itemId}`, requestOptions
    );
    const data = await response.json();
   
    return data;
  } catch (error) {
    console.error("An error occurred while retrieving data from the API: ", error);
  }
}

