class MaxBinaryHeap{
    constructor(){
        this.values = [41,39,33,18,27,12];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
      var index = this.values.length -1;
        var element = this.values[index];
        while(index > 0){
            var parentIndex = Math.floor((index -1)/2);
            var parent = this.values[parentIndex];
            if(element <= parent){
                break;
            }
              this.values[parentIndex] = element;
              this.values[index] = parent;
              index = parentIndex;
        }
    }
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
        this.values[0] = end;
        this.sinkDown();
        }
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2* idx+1;
            let rightChildIdx = 2* idx+2;

            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap == null && rightChild > element) || 
                   (swap!==null && rightChild > leftChild)){
                    swap = rightChildIdx;
                }
            }
            if(swap == null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
            
        }
    }
}
let heap1 = new MaxBinaryHeap();
heap1.insert(55);
heap1.insert(54);
heap1.insert(5);
heap1.insert(10);
heap1.insert(22);
heap1.insert(77);