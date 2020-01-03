class Stack {
    constructor() {
        this._storage = {} // an storage object to store value
        this._length = 0
    }

    /**
     * Add a new value at the end of the stack
     * @param {*} value to push
     */
    push(value) {
        //Todo add type checking and check arguments
        this._storage[this._length] = value
        this._length++
    }

    /**
     * Removes the value at the end of the stack and returns it
     * @return {*} the last and the newest value in the stack
     */
    pop() {
        //what if it is empty?
        if (this._length) {
            const last_val = this._storage[this._length - 1]
            this._storage[this._length - 1] = undefined
            this._length--
            return last_val
        }
        // Else case it returns undefined automatically
    }

    /**
     * Return the value at the end of the stack without removing it
     * @return {*} the last and the newest value in the stack
     */
    peek() {
        return this._storage[this._length - 1]
    }
}

const my_stack = new Stack()

my_stack.push("zero")
my_stack.push("one")
console.log(my_stack)
/**
 * {_storage :{
 *  0:'zero, 
 *  1:'one
 * }}
 * __length: 2
 */
console.log(my_stack.pop())
console.log(my_stack)
/**
 * {_storage: {0: 'zero'}}
 * __length: 1
 */
console.log(my_stack.peek())