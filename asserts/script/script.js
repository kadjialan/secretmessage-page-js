const decode1 = document.getElementById('decoder1')
const decode2 = document.getElementById('decoder2')
const decode3 = document.getElementById('decoder3')
const decodeButton = document.querySelector('.button')
const input = document.querySelector('.text1')

decodeButton.onclick = function encode () {
  const text = (input.value).toLowerCase()
  console.log(text.length)
  if (text.length >= 50) {
    const empty = text.replace(/[^\w]/g, '')
    decode1.innerHTML = `${empty}`
    const col = Math.ceil(Math.sqrt(empty.length))
    let chunk = ''
    let message = ''
    for (let i = 0; i < col; i++) {
      for (let j = i; j < empty.length; j += col) {
        message += empty[j]
        chunk += empty[j]
      }
      console.log(`${chunk += '\n'}`)
    }
    decode2.innerHTML = chunk
    decode3.innerHTML = message
  } else {
    alert('input a string of atleast 50 characters')
  }
}
