function findClosestValueInBst(tree,target){
    let currentNode = tree.test
    let closest = Infinity
    while(currentNode){
        let value = currentNode.value
        if (Math.abs(target - closest) > Math.abs(target - value)){
            closest = value
        }
        if (value > target){
            currentNode = currentNode.left
        }else if(value < target){
            currentNode = currentNode.right
        }else {
            return closest
        }
    }
    return closest

}
exports.findClosestValueInBst = findClosestValueInBst