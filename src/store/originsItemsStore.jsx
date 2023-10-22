import { makeAutoObservable } from "mobx";

class OriginsItems {
    originItems = [];
    items = []

    constructor() {
        makeAutoObservable(this)
    }
    setItem(items) {
        this.originItems = items
        this.items = this.originItems
    }

}

export default new OriginsItems