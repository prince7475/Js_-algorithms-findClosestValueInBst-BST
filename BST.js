class BST {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }

    insert(value){
        if(this.value <= value){
            if (this.right){
                this.right.insert(value)
            }else {
                this.right = new BST(value)
            }
        }else {
            if(this.left){
                this.left.insert(value)
            }else {
                this.left = new BST(value)
            }
        }
    }
}

let test = new BST(100)
test.insert(5)
test.insert(15)
test.insert(5)
test.insert(2)
test.insert(1)
test.insert(22)
test.insert(1)
test.insert(1)
test.insert(3)
test.insert(1)
test.insert(1)
test.insert(502)
test.insert(55000)
test.insert(204)
test.insert(205)
test.insert(207)
test.insert(206)
test.insert(208)
test.insert(203)
test.insert(-51)
test.insert(-403)
test.insert(1001)
test.insert(57)
test.insert(60)
test.insert(4500);

exports.test = test