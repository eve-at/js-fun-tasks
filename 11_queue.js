// 11. Queue Data Structure in JavaScript (FIFO)

class Queue {
    #storage = {}
    #first = 0
    #last = 0

    enqueue(value) {
        this.#storage[this.#last++] = value
    }

    dequeue() {
        if (! this.size) return null

        const value = this.#storage[this.#first]
        delete this.#storage[this.#first++]

        return value
    }

    get size() {
        return this.#last - this.#first
    }

    print() {
        console.log(this.#storage)
    }
}


const list = new Queue()

list.enqueue(1)
list.enqueue(2)
list.enqueue(3)
console.log(list.size) // 3

list.dequeue()
console.log(list.size) // 2

list.enqueue(4)
list.enqueue(5)
list.dequeue()
console.log(list.size) // 3

list.print() // { '2': 3, '3': 4, '4': 5 }
