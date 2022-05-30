class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
         var newNode = new Node(val);
        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head){
            return undefined;
        }
        var poppedNode = this.tail;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(!this.head){
            return undefined;
        }
        var oldHead = this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
        
    }
    unShift(val){
        var newNode = new Node(val);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(this.length <0 || index >= this.length || index < 0){
            return null;
        }
        if(index<=this.length/2){
            var count = 0;
            var current  = this.head;
            while(count != index){
                current = current.next;
                count++;
            }
        }else{
            
            var count = this.length -1;
            var current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
            
        }
        return current;
    }
    set(index,val){
        var foundNode = this.get(index);
        if(foundNode !== null){
             foundNode.val = val;
            
             return true;
        }
        return false;
        
    }
    insert(index,val){
        if(index < 0 || index > this.length){
            return false;
        }
        if(index ==0){
            return !!this.unShift(val);
        }
        if(index ==this.length){
            return !!this.push(val);
        }
        var beforeNode = this.get(index -1);
        var newNode = new Node(val);
        var afterNode = beforeNode.next;

        newNode.prev = beforeNode;
        beforeNode.next = newNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
        
        
    }
    remove(index){
        if(index < 0 || index >= this.length){
            return false;
        }
        if(index ===0){
            return this.shift();
        }
        if(index === this.length-1){
            return this.pop();
        }
        var removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;

        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}
var list = new DoublyLinkedList();
list.push('Harry');
list.push('Ron');
list.push('Hermoine');