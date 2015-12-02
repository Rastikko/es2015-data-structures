class InsertionSort
{
  constructor(arr) {
    this.sortedArray = this._insertionSort(arr);
  }

  _insertionSort(arr) {
    for (i = 1; i < arr.length; i++) {
        var j = i;
        while (j > 0 && arr[j-1] > arr[j]) {
            var temp = arr[j];
            arr[j] = arr[j-1];
            console.log(arr.join(' '));
            arr[j-1] = temp;
            j--;
        }
    }
    console.log(arr.join(' '));
    return arr;
  }
}

function processData(input) {
    var lines = input.split("\n");
    var n = parseInt(lines[0]);
    arr = lines[1].split(' ');
    arr = arr.map(Number);
    var x = new InsertionSort(arr);
}
