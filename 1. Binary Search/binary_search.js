function binary_search (list, elem) {
    let low = 0; // Выбираем 0 элемент массива
    let high = list.length - 1; // Выбираем элемент массива с наибольшим индексом

    while (low <= high) { // Пока нача граница на станет ровна 1
        let mid = low + high; // Выьираем средний элемент массива
        let guess = list[mid]; // Выбираем элемент "догадку"
        if (guess === elem) { // Если попали - выходим
            return mid;
        }

        if (guess > elem) {  // Если значение догадки оказалось больше, чем искомый элемент, то сдвигаем верхнюю границу поиска на средний - 1
            high = mid - 1;
        }

        else { // Если значение догадки оказалось меньше, чем искомый элемент, то сдвигаем нижнюю границу поиска на средний + 1
            low = mid + 1;
        }
    }
    return 'none'; // Если элемента нет в массиве
}

const my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3));

console.log(binary_search(my_list, 12));