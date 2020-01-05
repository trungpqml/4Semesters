class Node {
    constructor(value, next = null) {
        this._value = value
        this._next = null
    }
}

class LinkedList {
    constructor(value) {
        this._head = {
            value,
            next: null
        }
        this._tail = this._head
    }

    /**
     * Inserts new value to the end of the linked list
     * @param {*} value - the value to insert
     */
    insert(value) { //update head and tail as needed
        const new_node = {
            value,
            next: null
        }
        this._tail.next = new_node
        this._tail = new_node
    }

    /**
     * Delete a node
     * @param {*} node - the node to remove
     * @return {*} value - the deleted node's value
     */
    remove() {

    }

    /**
     * Delete a node at tail of linked list
     * @return {*} value - the deleted node's value
     */
    remove_tail() {
        //loop and find the node before the tail
        // node.next = this._tail
        let current_node = this._head
        //getting the node before tail
        while (current_node.next !== this._tail) {
            current_node = current_node.next
        }
        // Set current_node as tail
        current_node.next = null
        this._tail = current_node
    }

    /**
     * Searches the linked list and returns if it contains the value passed
     * @param {*} value - the value to search for
     * @return {boolean} -  true if value is found, otherwise false
     */
    _contains(value) {
        let current_node = this._head
        //getting the node before tail
        while (current_node.value !== value) {
            current_node = current_node.next
        }
        return current_node.value === value
    }

    /**
     * Check if a node is the head of the linked list
     * @param {{prev:Object|null, next:Object|null}} node - the node to check
     * @return {boolean} - true if node is the head, otherwise false
     */
    is_head(node) {
        return node === this._head
    }
    /**
     * Check if a node is the tail of the linked list
     * @param {{prev:Object|null, next:Object|null}} node - the node to check
     * @return {boolean} - true if node is the tail, otherwise false
     */
    is_tail(node) {
        return node === this._tail
    }

    /**
     * Print the linked list value
     * @return {string} - a string of node's values
     */
    print() {
        let list = ""
        let current_node = this._head
        while (current_node) {
            if (!current_node.next) {
                list = list + `(${current_node.value},*)`
            } else {
                list = list + `(${current_node.value},*) -> `
            }
            current_node = current_node.next
        }
        return list
    }
}

const my_list = new LinkedList(1)
//Initiate with a value of empty
/**
 * _storage: {}
 * _head: {
 *      value: 1,
 *      next: null
 * }
 * _tail :{
 *      value: 1,
 *      next: null
 * }
 */
// console.log(my_list)
my_list.insert(2)
my_list.insert(3)
my_list.insert(4)
console.log(my_list.print())
my_list.insert(5)
my_list.insert(6)
console.log(my_list.print())
my_list.remove_tail()
console.log(my_list.print())