import { makeAutoObservable } from "mobx"
import originsItemsStore from "./originsItemsStore"

class FiltersItems {
    selectedColor = 'all'
    selectedType = 'all'
    selectedPrice = 'default'

    constructor() {
        makeAutoObservable(this)
    }

    filter() {
        let sortedItems = [...originsItemsStore.originItems]; // Создаем копию исходных товаров

        // Если выбрана сортировка по цене в порядке убывания, сортируем товары по убыванию цены
        if (this.selectedPrice === 'priceDown') {
            sortedItems.sort((a, b) => b.price - a.price);
        }

        // Если выбрана сортировка по цене в порядке возрастания, сортируем товары по возрастанию цены
        if (this.selectedPrice === 'priceUp') {
            sortedItems.sort((a, b) => a.price - b.price);
        }

        // Фильтруем товары на основе выбранных параметров цвета и типа
        let filteredItems = sortedItems.filter(item => {
            let isColorMatch = this.selectedColor === 'all' || item.color === this.selectedColor;
            let isTypeMatch = this.selectedType === 'all' || item.type === this.selectedType;

            return isColorMatch && isTypeMatch;
        });

        originsItemsStore.items = filteredItems
    }
}
export default new FiltersItems
