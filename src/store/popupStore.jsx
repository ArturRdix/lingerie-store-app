import { makeAutoObservable } from "mobx"

class PopupStore {
    popups = []

    constructor() {
        makeAutoObservable(this)
    }
    addPopups(el) {
        this.popups = [...this.popups, `${el.title} добавлен в корзину`]
    }
    closePopup = (index) => {
        this.popups = this.popups.filter((_, i) => i !== index);
    };
}

export default new PopupStore