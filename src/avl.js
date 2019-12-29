class Node {
    constructor(value, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
        this.height = 1
    }
    add(value) {
        if (value < this.value) {
            if (this.left) {
                this.left.add(value)
            } else {
                this.left = new Node(value)
            }
            if (!this.right || this.right.height < this.left.height) {
                this.height = this.left.height + 1
            }
        } else {
            if (this.right) {
                this.right.add(value)
            } else {
                this.right = new Node(value)
            }
            if (!this.left || this.right.height > this.left.height) {
                this.height = this.right.height + 1
            }
        }
        this.balance()
    }

    balance() {
        const right_height = (this.right) ? this.right.height : 0
        const left_height = (this.left) ? this.left.height : 0
        if (left_height > right_height + 1) {
            const left_right_height = (this.left.right) ? this.left.right.height : 0
            const left_left_height = (this.left.left) ? this.left.left.height : 0
            if (left_right_height > left_left_height) {
                this.left.rotate_rr()
            }
            this.rotate_ll()
        } else {
            const right_right_height = (this.right.right) ? this.right.right.height : 0
            const right_left_height = (this.right.left) ? this.right.left.height : 0
            if (right_left_height > right_right_height) {
                this.right.rotate_ll()
            }
            this.rotate_rr()
        }
    }

    rotate_rr() {
        const value_before = this.value
        const left_before = this.left
        this.value = this.right.value
        this.left = this.right
        this.right = this.right.right
        this.left.right = this.left.left
        this.left.left = left_before
        this.left.value = value_before
        this.left.update_in_new_location()
        this.update_in_new_location()
    }
    rotate_ll() {
        const value_before = this.value
        const right_before = this.right
        this.value = this.left.value
        this.right = this.left
        this.left = this.left.left
        this.right.left = this.right.right
        this.right.right = right_before
        this.right.value = value_before
        this.right.update_in_new_location()
        this.update_in_new_location()
    }

    update_in_new_location() {
        if (!this.right && !this.left) {
            this.height = 1
        } else if (!this.right || (this.left && this.right.height < this.left.height)) {
            this.height = this.left.height + 1
        } else {
            this.height = this.right.height + 1
        }
    }
}

class AVL {
    constructor() {
        this.root = null
    }
    add(value) {
        if (!this.root) {
            this.root = new Node(value)
        } else {
            this.root.add(value)
        }
    }
}

module.exports = AVL