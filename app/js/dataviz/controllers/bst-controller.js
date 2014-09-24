'use strict'

module.exports = function(app) {
  app.controller('bstController', function($scope, bstServer) {
    $scope.Node = function(data, left, right) {
      $scope.data = data;
      $scope.left = left;
      $scope.right = right;
      $scope.show = show;
    }

    $scope.show = function() {
      return $scope.data;
    }

    $scope.BST = function() {
      $scope.root = null;
      $scope.insert = insert;
      $scope.inOrder = inOrder;
      $scope.preOrder = preOrder;
      $scope.postOrder = postOrder;
      $scope.getMin = getMin;
      $scope.getMax = getMax;
      $scope.find = find;
      $scope.remove = remove;
      $scope.removeNode = removeNode;
    }

    $scope.insert = function(data) {
      var n = new Node(data, null, null);
      if($scope.root === null) {
        $scope.root = n;
      } else {
        var current = $scope.root;
        var parent;
        while(true) {
          parent = current;
          if(data < current.data) {
            current = current.left;
            if(current === null) {
              parent.left = n;
              break;
            }
          } else {
            current = current.right;
            if(current === null) {
              parent.right = n;
              break;
            }
          }
        }
      }
    }

    $scope.inOrder = function(node) {
      if(node !== null) {
        inOrder(node.left);
        console.log("inOrder " + node.show() + "");
        inOrder(node.right);
      }
    }

    $scope.preOrder = function(node) {
      if(node !== null) {
        console.log("preOrder " + node.show() + "");
        preOrder(node.left);
        preOrder(node.right);
      }
    }

    $scope.postOrder = function(node) {
      if(node !== null) {
        console.log("postOrder " + node.show() + "");
        postOrder(node.left);
        postOrder(node.right);
      }
    }

    $scope.getMin = function() {
      var current = $scope.root;
      while(current.left !== null) {
        current = current.left;
      }
      return current.data
    }

    $scope.getMax = function() {
      var current = $scope.root;
      while(current.right !== null) {
        current = current.right;
      }
      return current.data;
    }

    $scope.find = function(data) {
      var current = $scope.root;
      while(current && current.data !== data) {
        if(data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
    }

    $scope.remove = function(data) {
      root = removeNode($scope.root, data);
    }

    $scope.removeNode = function(node, data) {
      if(node === null) {
        return null;
      }
      if(data === node.data) {
        if(node.left === null && node.right === null) {
          return null;
        }
        if(node.left === null) {
          return node.right;
        }
        if(node.right === null) {
          return node.left;
        }
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = this.removeNode(node.right, tempNode.data);
        return node;
      }
      else if(data < node.data) {
        node.left = this.removeNode(node.left, tempNode.data);
        return node;
      }
      else {
        node.right = this.removeNode(node.right, tempNode.data);
        return node;
      }
    }
  });

  var nums = new BST();
}
