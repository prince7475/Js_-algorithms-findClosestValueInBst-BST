const chai = require('chai')
const program = require('./findClosestValueInBst')

class BST {
constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
​
insert = (value) =>{
    if (value < this.value) {
    if (this.left === null) {
        this.left = new BST(value);
    } else {
        this.left.insert(value);
    }
    } else {
    if (this.right === null) {
        this.right = new BST(value);
    } else {
        this.right.insert(value);
    }
    }
    return this;
}
}

let test = new BST(100).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22).insert(1).insert(1).insert(3).insert(1).insert(1).insert(502).insert(55000).insert(204).insert(205).insert(207).insert(206).insert(208).insert(203).insert(-51).insert(-403).insert(1001).insert(57).insert(60).insert(4500);


describe('Test', function () {

    it('Test #1', function() {
        chai.expect(program.findClosestValueInBst(test, 2000)).to.deep.equal(1001);
    });

    it('Test #2', function() {
        chai.expect(program.findClosestValueInBst(test, 6)).to.deep.equal(5);
    });

    it('Test #3', function() {
        chai.expect(program.findClosestValueInBst(test, 30000)).to.deep.equal(55000);
    });

    
    it('Test #4', function() {
        chai.expect(program.findClosestValueInBst(test, -1)).to.deep.equal(1);
    });

    it('Test #5', function() {
        
        chai.expect(program.findClosestValueInBst(test, 29751)).to.deep.equal(55000);
    });

    it('Test #6', function() {
        
        chai.expect(program.findClosestValueInBst(test, 29749)).to.deep.equal(4500);
    });


});

