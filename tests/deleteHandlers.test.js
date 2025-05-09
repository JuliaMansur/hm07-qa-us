// eslint-disable-next-line no-undef
const config = require('../config');

test('deleting an order status should be 200', async () => {
try {
        const response = await fetch(`${config.API_URL}/api/v1/orders/123`, { 
             method:'DELETE'
            });
            const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
});
test('deleting a kit status should be 200', async () => {
    let actualStatus;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
            method:'DELETE',
        });
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
      expect(actualStatus).toBe(200);
});