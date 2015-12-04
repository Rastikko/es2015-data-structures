'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InsertionSort = (function () {
  function InsertionSort(arr) {
    _classCallCheck(this, InsertionSort);

    this.sortedArray = this._insertionSort(arr);
  }

  _createClass(InsertionSort, [{
    key: '_insertionSort',
    value: function _insertionSort(arr) {
      for (i = 1; i < arr.length; i++) {
        var j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
          var temp = arr[j];
          arr[j] = arr[j - 1];
          console.log(arr.join(' '));
          arr[j - 1] = temp;
          j--;
        }
      }
      console.log(arr.join(' '));
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
  var x = new InsertionSort(arr);
}
