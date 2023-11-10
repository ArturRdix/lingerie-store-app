class Product {
    static async get() {
        const response = await fetch('http://localhost:3030/api/products');
        const data = await response.json();
        return data.data;
    }
}

export default Product;