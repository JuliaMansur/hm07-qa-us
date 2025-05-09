// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "price": 175
}
test('adding price to product status should be 200', async () => {
    let actualStatus;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
    } catch (error) {
        console.error(error);
    }
});

test('adding an order status should be 200', async () => {
    try {
        const response = await fetch(`${config.API_URL}/your/api/v1/orders/123/complete`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
    } catch (error) {
        console.error(error);
    }
});