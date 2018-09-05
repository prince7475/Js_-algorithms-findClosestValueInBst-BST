const chai = require('chai')
const program = require('./findClosestValueInBst')
const test = require('./BST')

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

