// function findClosestValueInBst(tree,target){
//     let currentNode = tree.test
//     let closest = Infinity
//     while(currentNode){
//         let value = currentNode.value
//         if (Math.abs(target - closest) > Math.abs(target - value)){
//             closest = value
//         }
//         if (value > target){
//             currentNode = currentNode.left
//         }else if(value < target){
//             currentNode = currentNode.right
//         }else {
//             return closest
//         }
//     }
//     return closest

// }

function findClosestValueInBst(tree,target){
    let newTree = tree.test 
    let closest = Infinity
    return findClosestHelper(newTree,target,closest)
}

function findClosestHelper(tree,target,closest){
    if(!tree){
        return closest
    }
    let value = tree.value
    if(Math.abs(target - closest) > Math.abs(target - value)){
        closest = value
    }

    if(value > target){
        return findClosestHelper(tree.left, target,closest)
    }else if (value < target){
        return findClosestHelper(tree.right,target,closest)
    }else {
        return closest
    }
}



exports.findClosestValueInBst = findClosestValueInBst

// Other solution
