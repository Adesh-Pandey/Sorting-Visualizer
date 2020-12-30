function getShellSortAnimations(array){
    const length=array.length
    let gap=Math.floor(length/2)
    let animations=[]
    while (gap>0){

        for (let k =gap;k<length;k++ ){
            let j=k
            const curr=array[k]
            while(j>=gap && curr<array[j-gap]){
                animations.push([j,j-gap])
                animations.push([j,j-gap])
                animations.push([j,array[j-gap]])
                array[j]=array[j-gap]
                j-=gap;

            }
            animations.push([j,j])
            animations.push([j,j])
            animations.push([j,curr])
            array[j]=curr
        }
        
        gap=Math.floor(gap/2)
    }
    return animations
}

export default getShellSortAnimations;