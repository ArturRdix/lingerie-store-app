import { makeAutoObservable } from "mobx"

class FiltersItems {
    selectedColor = 'all'
    selectedType = 'all'
    selectedPrice = 'default'

    constructor() {
        makeAutoObservable(this)
    }
}
export default new FiltersItems
