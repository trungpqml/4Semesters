class HashTable {
    constructor(value) {
        this._storage = []
        this._table_size = value
    }

    /*
     * Inserts a new key-value pair
     * @param {string} key - the key associated with the value
     * @param {*} value - the value to insert
     */
    insert(key, value) {
        const index = this._hash(key, this._table_size)
        if (!this._storage[index]) {
            this._storage[index] = []
        }
        this._storage[index].push([key, value])
    }

    /*
     * Deletes a key-value pair
     * @param {string} key - the key associated with the value
     * @return {*} value - the deleted value
     */
    remove(key) {
        let i = this._hash(key)
        let value = this._storage[i]
        delete this._storage[i]
        return value
    }

    /*
     * Returns the value associated with a key
     * @param {string} key - the key to search for
     * @return {*} - the value associated with the key
     */
    retrieve(key) {
        const index = this._hash(key, this._table_size)
        const array_at_index = this._storage[index]
        if (array_at_index) {
            for (let i = 0; i < array_at_index.length; i++) {
                if (array_at_index[i][0] === key) {
                    return array_at_index[i][1]
                }
            }
        }
    }

    /*
     * Hashes string value into an integer that can be mapped to an array index
     * @param {string} str - the string to be hashed
     * @param {number} n - the size of the storage array
     * @return {number} - an integer between 0 and n
     */
    _hash(str, n = 255) {
        let sum = 0;
        for (let index = 0; index < str.length; index++) {
            sum += str.charCodeAt(index) * 3
        }
        return sum % n
    }
}

const hb = new HashTable(25)
hb.insert("a", 1)
hb.insert("b", 2)
hb.insert("b", 2)
// console.log(hb.remove("one"))
// console.log(hb)
console.log(hb.retrieve("a"))
// console.log(hb)