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

    addToOrder(item) {
        const existingOrderItem = this.getOrderByItem(item);

        if (existingOrderItem) {
            existingOrderItem.quantity++;
        } else {
            const updatedItem = {...item, quantity: 1};
            this.orders = [...this.orders, updatedItem];
        }
        popupStore.addPopups(item);
    };

    updateQuantity(item, newQuantity) {
        let orderItem = this.getOrderByItem(item);
        orderItem.quantity = newQuantity;
    };

    removeFromOrder(item) {
        let itemKey = this.getItemKey(item);
        this.orders = this.orders.filter(orderItem => itemKey !== this.getItemKey(orderItem));
    };

    getOrderByItem(item) {
        let itemKey = this.getItemKey(item);
        return this.orders.find(orderItem => itemKey === this.getItemKey(orderItem));
    }

    getItemKey(item) {
        return item.id + Object.keys(item.options)
            //.sort()
            .reduce((sum, item) => sum + '|' + item, '');
    }

    get totalPrice() {
        let calculatedTotalPrice = 0;
        for (const element of this.orders) {
            const price = element.price + Object.values(element.options)
                .reduce((sum, item) => sum + item.price, 0);
            calculatedTotalPrice += price * element.quantity;
        }
        return calculatedTotalPrice;
    }
}

export default new OrdersStore();