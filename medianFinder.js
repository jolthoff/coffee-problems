var MedianFinder = function() {
  this.storage = [];
};

/**
 * @param {integer} word
 * @return {void}
 * Adds a num into the data structure.
 */
MedianFinder.prototype.addNum = function(num) {
  if (this.storage.length === 0) this.storage.push(num);
  else if (this.storage.length === 1) {
    if (this.storage[0] < num) this.storage.push(num)
    else this.storage.unshift(num);
  }
  else {
    var inserted = false;
    for (var i = this.storage.length; i >= 0; i--) {
      if (!inserted && num >= this.storage[i]) {
        var firstPart = this.split(i + 1);
        firstPart.push(num);
        this.storage = firstPart.concat(this.storage)
        inserted = true;
        break;
      }
    }
    if (!inserted) this.storage.unshift(num);
  }
  return num;
};

MedianFinder.prototype.split = function(index) {
  return this.storage.splice(0, index);
}

/**
 * @return {double}
 * Return median of current data stream
 */
MedianFinder.prototype.findMedian = function() {
  if (this.storage.length % 2) {
    return this.storage[Math.floor(this.storage.length / 2)];
  } else {
    var secondMiddleNum = this.storage[this.storage.length / 2]
    var firstMiddleNum = this.storage[this.storage.length / 2 - 1];
    return (secondMiddleNum + firstMiddleNum) / 2;
  }
};

var mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
mf.addNum(4);
mf.addNum(3);
mf.addNum(0);
console.log(mf.findMedian());
console.log(mf)
