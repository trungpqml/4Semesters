const make_change = (value) => {
    let results = []
    let coins = [25, 10, 5]
    while (value) {
        coin = coins.shift()
        let remain = value % coin
        results.push((value - remain) / coin)
        value = remain
    }
    // return `# of coins: ${results.reduce((a,b)=> (a+b), 0)} `
    return results
}

// console.log(make_change(40))
// console.log(make_change(35))
// console.log(make_change(50))

const make_change_bf = (value) => {
    const coins = [1, 6, 10]
    if (value == 0) {
        return 0
    }
    let min_coins;
    coins.forEach((coin) => {
        if (value - coin >= 0) {
            let current_min_coins = make_change_bf(value - coin)
            if (min_coins === undefined || current_min_coins < min_coins) {
                min_coins = current_min_coins
            }
        }
    })
    return min_coins + 1
}

console.log(make_change_bf(12))