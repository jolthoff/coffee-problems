var quickSort = function(numbers, left, right) {

  if (!left && !right) {
    left = 0;
    right = numbers.length - 1;
  }

  var index;

    if (numbers.length > 1) {

        index = partition(numbers, left, right);

        if (left < index - 1) {
            quickSort(numbers, left, index - 1);
        }

        if (index < right) {
            quickSort(numbers, index, right);
        }

    }

    return items;


};

var swap = function(array, firstIndex, secondIndex) {

  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;

};

var partition = function(numbers, left, right) {

    var pivot = Math.floor((left + right) / 2);

    while (left <= right) {

          while (numbers[left] < pivot) {
              left++;
          }

          while (numbers[right] > pivot) {
              right--;
          }

          if (left <= right) {
              swap(numbers, left, right);
              left++;
              right--;
          }
      }

      return left;
}

var test = [10, 4, 5, 9, 100, 23, 98, 12, 13];

console.log(quickSort(test));
