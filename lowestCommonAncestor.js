var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
}

TreeNode.prototype.insertNode = function(val) {
  if (val > this.val) {
    if (this.right) this.right.insertNode(val);
    else this.right = new TreeNode(val);
  } else if (val < this.val) {
    if (this.left) this.left.insertNode(val);
    else this.left = new TreeNode(val);
  } else if (val === this.val) {
    return "cannot insert duplicate values";
  }
};

TreeNode.prototype.loweestCommonAncestor = function(val1, val2) {

  var firstLineage = this.lookup(val1);
  var secondLineage = this.lookup(val2);

  if (firstLineage && secondLineage) {
    var LCA = 0;
    for (var i = 0; i < firstLineage.length; i++) {
      for (var j = 0; j < secondLineage.length; j++) {
        if (firstLineage[i] === secondLineage[j]) {
          LCA = firstLineage[i]
        }
      }
    }
    return LCA;
  } else {
    return false;
  }

};

TreeNode.prototype.lookup = function(val, lineage) {
  if (!lineage) lineage = [this.val];
  if (this.val === val) {
    return lineage;
  } else if (val > this.val && this.right) {
    lineage.push(this.right.val);
    return this.right.lookup(val, lineage);
  } else if (val < this.val && this.left) {
    lineage.push(this.leftval);
    return this.left.lookup(val, lineage)
  } else {
    return false;
  }
}

var BT = new TreeNode(3);

BT.insertNode(5);
BT.insertNode(1);
BT.insertNode(6);
BT.insertNode(0);
BT.insertNode(8);
BT.insertNode(2);
BT.insertNode(4);


var lowestCommonAncestor = function(root, val1, val2) {
  if (!root) return null;
  if (root.val === val1) return val1;
  if (root.val === val2) return val2;
  var left = lowestCommonAncestor(root.left, val1, val2);
  var right = lowestCommonAncestor(root.right, val1, val2);
  if (left === null && right === null) return null;
  if (left !== null && right === null) return left;
  if (left === null && right !== null) return right;
  return root.val;
}

console.log(lowestCommonAncestor(BT, 2, 8))
