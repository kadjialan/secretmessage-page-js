const decode1 = document.getElementById('decoder1')
const decode2 = document.getElementById('decoder2')
const decode3 = document.getElementById('decoder3')
const decodeButton = document.querySelector('.button')
const input = document.querySelector('.text1')
let signs = ['.','!',';',',',':','?']

decodeButton.onclick = function encode() {
let text = (input.value).toLowerCase()
let empty = text.replace(/[^\w]/g, '')
decode1.innerHTML = `${empty}`
let col = Math.ceil(Math.sqrt(empty.length))
console.log(col) 
let chunk = ''
let message = ''
for (let i = 0; i< col; i++) {
for (let j = i; j < empty.length; j+=col) {
message += empty[j]
chunk += empty[j]
}
console.log (`${chunk += '\n'}`)
}
console.log(`${chunk}`)
decode2.innerHTML = chunk
decode3.innerHTML = message
} 
