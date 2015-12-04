"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QuickSort = (function () {
  function QuickSort(arr) {
    _classCallCheck(this, QuickSort);

    this.countingSort = 1;
    this.sortedArray = this._quickSort(arr);
  }

  _createClass(QuickSort, [{
    key: "_quickSort",
    value: function _quickSort(arr) {
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
  }]);

  return QuickSort;
})();

var InsertionSort = (function () {
  function InsertionSort(arr) {
    _classCallCheck(this, InsertionSort);

    this.countingSort = 0;
    this.sortedArray = this._insertionSort(arr);
  }

  _createClass(InsertionSort, [{
    key: "_insertionSort",
    value: function _insertionSort(arr) {
      for (i = 1; i < arr.length; i++) {
        var j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
          var temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
          j--;
          this.countingSort++;
        }
      }
      return arr;
    }
  }]);

  return InsertionSort;
})();

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
