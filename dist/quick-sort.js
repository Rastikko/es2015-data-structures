"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QuickSort = (function () {
  function QuickSort(arr) {
    _classCallCheck(this, QuickSort);

    this.sortedArray = _quickSort(arr);
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
      return this._quickSort(left).concat(pivot, this._quickSort(right));
    }
  }]);

  return QuickSort;
})();
