class Node {
    constructor(value) {
        this.data = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        let node = Node(value)
        this.length++;
        if (!this.head) {
            this.head = node
        } else {
            this.tail.next = node
        }
        this.tail = node
    }

    pop() {
        return this.delete(this.length - 1)
    }

    _test_index(search, __, i) {
        return search === i
    }
    get(index) {
        const node = this._find(index, this._test_index);
        if (!node) {
            return null
        }
        return node.value
    }
    delete(index) {
        if (index === 0) {
            const head = this.head;
            if (head) {
                this.head = head.next
            } else {
                this.head = null
                this.tail = null
            }
            this.length--
            return head.value
        }

        const node = this._find(index - 1, this._test_index)
        const excise = node.next
        if (!excise) { // node is tail
            return null
        }

        node.next = excise.next
        if (node.next && !node.next.next) { // if at index is tail node
            this.tail = node.next
        }
        this.length--
        return excise.value
    }
    _find(value, test = this._test) {
        let current = this.head
        let i = 0;
        while (current) {
            if (test(value, current.value, i, current)) {
                return current
            }
            current = current.next
            i++
        }
        return null
    }
    _test(a, b) {
        return a === b
    }
}

module.exports = LinkedList