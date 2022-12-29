function breakingRecords(scores) {
    let max = 0
    let min = 0
    let bigest = scores[0]
    let smallest = scores[0]
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < smallest) {
            smallest = scores[i]
            console.log(smallest)
            min++
        }
        if (scores[i] > bigest) {
            bigest = scores[i]
            max++
        }
    }
      return [max, min]  
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))