import { makeAutoObservable } from "mobx"
import popupStore from "./popupStore"
import ordersQuantityStore from "./ordersQuantityStore"

class OrdersStore {
    orders = []

    constructor() {
        makeAutoObservable(this)
    };
    setOrders(order) {
        this.orders = order
    };
    addToOrder = (item, addSum) => {
        const existingOrderItem = this.orders.find(orderItem => orderItem.id === item.id);

        if (existingOrderItem) {
            const updatedOrders = this.orders.map(orderItem =>
                (orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
            );

            this.orders = updatedOrders;
        } else {
            const updatedItem = { ...item, price: item.price + addSum };

            const updatedOrders = [...this.orders, { ...updatedItem, quantity: 1 }];

            this.orders = updatedOrders;
        }
        popupStore.addPopups(item)
        ordersQuantityStore.updateTotalPrice()
    };
    removeFromOrder = (item) => {
        const updatedOrders = this.orders.filter(orderItem => item.id !== orderItem.id);
        this.orders = updatedOrders;
        ordersQuantityStore.updateTotalPrice()
    };

    updateQuantity = (itemId, newQuantity) => {
        const updatedOrders = this.orders.map(orderItem =>
            orderItem.id === itemId ? { ...orderItem, quantity: newQuantity } : orderItem
        );

        this.orders = updatedOrders;
        ordersQuantityStore.updateTotalPrice()
    };
}
export default new OrdersStore