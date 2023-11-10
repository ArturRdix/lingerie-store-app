import {makeAutoObservable} from "mobx"
import popupStore from "./popupStore"

class OrdersStore {
    orders = [];

    constructor() {
        makeAutoObservable(this)
    };

    setOrders(order) {
        this.orders = order
    };

    addToOrder(item, optionsSum) {
        const existingOrderItem = this.orders.find(orderItem => orderItem.id === item.id);

        if (existingOrderItem) {
            existingOrderItem.quantity++;
        } else {
            const updatedItem = {...item, optionsSum: optionsSum, quantity: 1};
            this.orders = [...this.orders, updatedItem];
        }
        popupStore.addPopups(item);
    };

    removeFromOrder(item) {
        this.orders = this.orders.filter(orderItem => item.id !== orderItem.id);
    };

    updateQuantity(itemId, newQuantity) {
        let orderItem = this.orders.find(orderItem => orderItem.id === itemId);
        orderItem.quantity = newQuantity;
    };

    get totalPrice() {
        let calculatedTotalPrice = 0;
        for (const element of this.orders) {
            const price = element.price + element.optionsSum;
            calculatedTotalPrice += price * element.quantity;
        }
        return calculatedTotalPrice;
    }
}

export default new OrdersStore();