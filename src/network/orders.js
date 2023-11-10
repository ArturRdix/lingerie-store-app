class Order {
    async post(cart) {
        let res = await fetch("http://localhost:3030/api/order", {
            method: 'post',
            body: JSON.stringify(cart),
        }).then(d => d.json());
        return res;
    }
}

let request = {
    adrress: 'city jopa',
    products: [
        {
            id: 5,
            count: 1,
            options: {
                garter: true,
            }
        },
        {
            id: 6,
            count: 1,
            options: {
                garter: true,
            }
        },
        {
            id: 5,
            count: 1,
            options: {
                garter: true,
            }
        },
        {
            id: 9,
            count: 100,
            options: {
                garter: true,
            }
        },
    ]
}

let response = {
    status: 'ok',
}

response = {
    status: 'error',
    message: "unknown id"
}

export default Order;