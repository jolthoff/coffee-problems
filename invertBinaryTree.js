var invertTree = function(root) {
  if (!root) return root;
  var temp;
  if (root.left || root.right) {
    temp = root.left;
    root.left = root.right;
    root.right = temp;
  }
  if (root.left) invertTree(root.left)
  if (root.right) invertTree(root.right);
  return root
};

var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
  this.count = 1;
}

TreeNode.prototype.insertNode = function(val) {
  if (val > this.val) {
    if (this.right) this.right.insertNode(val);
    else this.right = new TreeNode(val);
  } else if (val < this.val) {
    if (this.left) this.left.insertNode(val);
    else this.left = new TreeNode(val);
  } else if (val === this.val) {
    this.count++;
  }
};

var BT = new TreeNode(4);

BT.insertNode(2);
BT.insertNode(7);
BT.insertNode(1);
BT.insertNode(3);
BT.insertNode(6);
BT.insertNode(9);
BT.insertNode(2);
console.log(BT);

console.log(invertTree(BT));
