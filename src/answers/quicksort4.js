class QuickSort
{
  constructor(arr) {
    this.countingSort = 1;
    this.sortedArray = this._quickSort(arr);
  }

  _quickSort(arr) {
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
           left.push(arr[i]);
        } else {
           right.push(arr[i]);
        }
    }
    if (left.concat(right) !== arr) {
      this.countingSort++;
    }
    return this._quickSort(left).concat(pivot, this._quickSort(right));
  }
}

class InsertionSort
{
  constructor(arr) {
    this.countingSort = 0;
    this.sortedArray = this._insertionSort(arr);
  }

  _insertionSort(arr) {
    for (i = 1; i < arr.length; i++) {
        var j = i;
        while (j > 0 && arr[j-1] > arr[j]) {
            var temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
            this.countingSort++;
        }
    }
    return arr;
  }
}

function processData(input) {
    var lines = input.split("\n");
    var n = parseInt(lines[0]);
    arr = lines[1].split(' ');
    arr = arr.map(Number);
    var insertionsort = new InsertionSort(arr);
    console.log(insertionsort.countingSort);
    var quicksort = new QuickSort(arr);
    console.log(quicksort.countingSort);
}
