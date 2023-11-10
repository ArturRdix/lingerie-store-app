import { makeAutoObservable } from "mobx";
import filtersItemsStore from "./filterItemsStore"

class OriginsItems {
    originItems = [];

    constructor() {
        makeAutoObservable(this)
    }
    setItem(items) {
        this.originItems = items;
    }

    get items() {
        let sortedItems = [...this.originItems]; // Создаем копию исходных товаров

        // Если выбрана сортировка по цене в порядке убывания, сортируем товары по убыванию цены
        if (filtersItemsStore.selectedPrice === 'priceDown') {
            sortedItems.sort((a, b) => b.price - a.price);
        }

        // Если выбрана сортировка по цене в порядке возрастания, сортируем товары по возрастанию цены
        if (filtersItemsStore.selectedPrice === 'priceUp') {
            sortedItems.sort((a, b) => a.price - b.price);
        }

        // Фильтруем товары на основе выбранных параметров цвета и типа
        let filteredItems = sortedItems.filter(item => {
            let isColorMatch = filtersItemsStore.selectedColor === 'all' || item.color === filtersItemsStore.selectedColor;
            let isTypeMatch = filtersItemsStore.selectedType === 'all' || item.type === filtersItemsStore.selectedType;

            return isColorMatch && isTypeMatch;
        });

        return filteredItems;
    }
}

export default new OriginsItems();