class Queue {
    constructor() {
        this._storage = {}
        this._length = 0
        this._head_index = 0
    }

    enqueue(value) {
        //Todo type checking, input validation
        this._storage[this._length + this._head_index] = value
        this._length++
    }

    dequeue() {
        if (this._length) {
            const first_val = this._storage[this._head_index]
            delete this._storage[this._head_index]
            this._length--
            this._head_index++
            return first_val
        }
    }
    peek() {

    }
}

const my_queue = new Queue()
my_queue.enqueue("zero")
my_queue.enqueue("one")
my_queue.enqueue("three")
console.log(my_queue)
/**
 * Queue {
     _storage: {
         '0': 'zero',
         '1': 'one',
         '2': 'three'
     },
     _length: 3,
     _head_index: 0
 }
 */
my_queue.dequeue()
console.log(my_queue)
/**
 * Queue {
     _storage: {
         '1': 'one',
         '2': 'three'
     },
     _length: 2,
     _head_index: 1
 }
 */
my_queue.enqueue("four")
console.log(my_queue)
/**
 * Queue {
     _storage: {
         '1': 'one',
         '2': 'three',
         '3': 'four'
     },
     _length: 3,
     _head_index: 1
 }
 */
my_queue.dequeue()
console.log(my_queue)
/**
 * Queue {
     _storage: {
         '2': 'three',
         '3': 'four'
     },
     _length: 2,
     _head_index: 2
 }
 */