var postorderBTTraversal = function(root) {
  var output = [];

  var recursor = function(node) {
    if (!node.left && !node.right) {
      output.push(node.val);
      return;
    } else {
      if (node.right)
        recursor(node.right);
      if (node.left);
        recursor(node.left);
    }

    output.push(node.val);
  }
  recursor(root);
  return output;
};

var preOrderTraversal = function(root) {
  var output = [];

  var recursor = function(node) {
    output.push(node.val)
    if (!node.left && !node.right) {
      return;
    } else {
      if (node.right)
        recursor(node.right);
      if (node.left);
        recursor(node.left);
    }
  }

  recursor(root)
  return output;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var postOrderInsert = function(node, val) {
  if (node === null) {
    node = new TreeNode(val);
    return;
  } else {
    postOrderInsert(node.left);
    postOrderInsert(node.right);
  }
}

var BT = new TreeNode(5);
BT.insertNode(3);
BT.insertNode(7);
BT.insertNode(4);
BT.insertNode(2);
BT.insertNode(6);
BT.insertNode(8);

console.log(BT);

console.log(inOrderTraversal(BT));
