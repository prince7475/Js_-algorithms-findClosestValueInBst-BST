# Js_-algorithms-findClosestValueInBst-BST


Input:Your SolutionOur SolutionNo changes made.
Run Code

1
function findClosestValueInBst(tree, target) {
2
  console.log(tree.left.value)
3
}
4
​
5
// Do not edit the line below.
6
exports.findClosestValueInBst = findClosestValueInBst;
7
​
Tests:HideShow

​
54
it('Test Case #6', function() {
55
  chai.expect(program.findClosestValueInBst(test, 2000)).to.deep.equal(1001);
56
});
57
​
58
it('Test Case #7', function() {
59
  chai.expect(program.findClosestValueInBst(test, 6)).to.deep.equal(5);
60
});
61
​
62
it('Test Case #8', function() {
63
  chai.expect(program.findClosestValueInBst(test, 30000)).to.deep.equal(55000);
64
});
65
​
66
it('Test Case #9', function() {
67
  chai.expect(program.findClosestValueInBst(test, -1)).to.deep.equal(1);
68
});
69
​
70
it('Test Case #10', function() {
71
  chai.expect(program.findClosestValueInBst(test, 29751)).to.deep.equal(55000);
72
});
73
​
74
it('Test Case #11', function() {
75
  chai.expect(program.findClosestValueInBst(test, 29749)).to.deep.equal(4500);
76
});
77
​
Output:Custom OutputRaw Output
Run your code when you feel ready.
Question:JavaScriptPythonC++JavaGoQuestions List

​
Find Closest Value In BST
​
You are given a BST data structure consisting of BST nodes. Each BST node has an integer value stored in a property called "value" and two children nodes stored in properties called "left" and "right," respectively. A node is said to be a BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None (null) values. You are also given a target integer value; write a function that finds the closest value to that target value contained in the BST. Assume that there will only be one closest value.
​
Sample input:
            10           , 12
          /       \
        5         15
      /    \     /      \
    2      5 13     22
  /                  \
1                    14
Help:HideShow

Try traversing the BST node by node, all the while keeping track of the node with the value closest to the target value. Calculating the absolute value of the difference between a node's value and the target value should allow you to check if that node is closer than the current closest one.
Video ExplanationGo to Conceptual OverviewGo to Code WalkthroughQuestions List
Copyright © 2018 AlgoExpert, LLC. All rights reserved.Legal StuffContact Us
















Input:Your SolutionOur SolutionNo changes made.
Run Code

1
function findClosestValueInBst(tree, target) {
2
  console.log(tree.left.value)
3
}
4
​
5
// Do not edit the line below.
6
exports.findClosestValueInBst = findClosestValueInBst;
7
​
Tests:HideShow

​
1
const program = require("./program");
2
const chai = require("chai");
3
​
4
class BST {
5
  constructor(value) {
6
    this.value = value;
7
    this.left = null;
8
    this.right = null;
9
  }
10
​
11
  insert(value) {
12
    if (value < this.value) {
13
      if (this.left === null) {
14
        this.left = new BST(value);
15
      } else {
16
        this.left.insert(value);
17
      }
18
    } else {
19
      if (this.right === null) {
20
        this.right = new BST(value);
21
      } else {
22
        this.right.insert(value);
23
      }
24
    }
25
    return this;
26
  }
27
}
28
​
29
const test = new BST(100).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22)
30
.insert(1).insert(1).insert(3).insert(1).insert(1).insert(502).insert(55000)
31
.insert(204).insert(205).insert(207).insert(206).insert(208).insert(203)
32
.insert(-51).insert(-403).insert(1001).insert(57).insert(60).insert(4500);
Output:Custom OutputRaw Output
Run your code when you feel ready.
Question:JavaScriptPythonC++JavaGoQuestions List

​
Find Closest Value In BST
​
You are given a BST data structure consisting of BST nodes. Each BST node has an integer value stored in a property called "value" and two children nodes stored in properties called "left" and "right," respectively. A node is said to be a BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None (null) values. You are also given a target integer value; write a function that finds the closest value to that target value contained in the BST. Assume that there will only be one closest value.
​
Sample input:
            10           , 12
          /       \
        5         15
      /    \     /      \
    2      5 13     22
  /                  \
1                    14
Help:HideShow

Try traversing the BST node by node, all the while keeping track of the node with the value closest to the target value. Calculating the absolute value of the difference between a node's value and the target value should allow you to check if that node is closer than the current closest one.
Video ExplanationGo to Conceptual OverviewGo to Code WalkthroughQuestions List
Copyright © 2018 AlgoExpert, LLC. All rights reserved.Legal StuffContact Us
