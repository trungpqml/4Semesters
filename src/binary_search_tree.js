class Node {
    constructor(value, left = null, right = null) {
        this.data = value
        this.left = left
        this.right = right
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    toObject() {
        return this.root
    }

    add(value) {
        const node = new Node(value)
        if (!this.root) {
            this.root = node
            return
        } else {
            let current = this.root
            while (true) {
                if (current.data <= value) {
                    if (!current.right) {
                        current.right = node
                        return
                    } else {
                        current = current.right
                    }
                } else {
                    if (!current.left) {
                        current.left = node
                        return
                    } else {
                        current = current.left
                    }
                }
            }
        }
    }

}

module.exports = BinarySearchTree