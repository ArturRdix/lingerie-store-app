import { makeAutoObservable } from "mobx"
import ordersStore from "./ordersStore";

class OrdersQuantityStore {
    totalPrice = 0

    constructor() {
        makeAutoObservable(this)
    };
    updateTotalPrice() {
        let calculatedTotalPrice = 0;
        for (const element of ordersStore.orders) {
            const price = parseFloat(element.price);
            const quantity = element.quantity || 1;
            if (!isNaN(price)) {
                calculatedTotalPrice += price * quantity;
            }
        }
        this.totalPrice = calculatedTotalPrice;
    }
   
}
export default new OrdersQuantityStore