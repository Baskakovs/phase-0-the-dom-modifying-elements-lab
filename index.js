// Write your code here!

const main = document.querySelector("main")
const body = document.querySelector('body')
main.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = 'Peter is the champion'
body.append(newHeader)