class Tree {
    constructor(question, recommendation = null) {
        this.question = question
        this.yes = null
        this.no = null
        // if (recommendation) {
        //     this.recommendation = recommendation
        // }
    }
    insert_child(question, side) {
        const new_question = new Tree(question)
        this.children.push(new_tree)
    }
}