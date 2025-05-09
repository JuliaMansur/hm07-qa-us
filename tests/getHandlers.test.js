// eslint-disable-next-line no-undef
const config = require('../config');

test('number of warehouses should be greater than 0', async () => {
    let responseBody;
 try {
   const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
    responseBody = await response.json();
 } catch (error) {
    console.error(error);
} 
expect(responseBody).toEqual([ 

 

		{ name: 'Everything You Need', workingHours: { start: 7, end: 23 } }, 

 

		{ name: 'Fresh Food', workingHours: { start: 8, end: 23 } }, 

 

		{ name: 'Food City', workingHours: { start: 8, end: 21 } }, 

 

		{ name: 'Big World', workingHours: { start: 5, end: 20 } } 

   ]);
});
test('status is 200', async () => {
    let responsecode;
 try {
   const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
    responsecode = await response.status;
 } catch (error) {
    console.error(error);
} 
expect(responsecode).toBe(200);
});