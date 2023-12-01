function findSmallest (array) {
    let smallest = array[0];
    let smallest_index = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
            smallest_index = i;
        }
    }
    
    return smallest_index;
}

function selectionSort (array) {
    let newArray = [];
    while (array.length > 0) {
        let smallest = findSmallest(array);
        newArray.push(array[smallest]);
        array.splice(smallest, 1);
    }
    return newArray;
}

console.log(selectionSort([5, 3, 6, 2, 10, 11, 1]));