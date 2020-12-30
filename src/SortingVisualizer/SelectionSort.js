function getSelectionSortAnimations(array){
    let animations=[]
    for (let k =0;k<array.length-1;k++){
        let index=k
        for(let j=k+1;j<array.length;j++){
            animations.push([j,j])
            animations.push([j,j])
            animations.push([j,array[j]])
            if (array[j]<array[index]){
                 index=j
            }
        }
    //    if (index!==-1){
        animations.push([k,index])
        animations.push([k,index])
        animations.push([k,array[index]])
        animations.push([k,index])
        animations.push([k,index])
        animations.push([index,array[k]])
    //    }
        let val=array[k]
        array[k]=array[index]
        array[index]=val
    }
    return animations;
}
export default getSelectionSortAnimations;