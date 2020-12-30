function getInsertionSortAnimation(array){
        let animation=[];
        for (let k =1;k<array.length;k++){
            let j=k;
            let curr=array[k];

            while (j>=1 && curr<array[j-1]){
                animation.push([j,j-1])
                animation.push([j,j-1])
                animation.push([j,array[j-1]])
                array[j]=array[j-1]
                j--;
            }
            
            animation.push([j,j])
            animation.push([j,j])
            animation.push([j,curr])
            array[j]=curr;
        }
        return animation
}

export default getInsertionSortAnimation;