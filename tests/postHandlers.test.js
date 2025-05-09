// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
  "products": [
    {
      "id": 5,
      "quantity": 1
    },
    {
      "id": 4,
      "quantity": 5
    }
  ]
};

test('check the availability of the goods', async () => {
  let response;
  let responseBody;

  try {
    response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    responseBody = await response.json();
    console.log('Resposta da API:', responseBody);
  } catch (error) {
    console.error(error);
  }
  expect(responseBody).toBeDefined();
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