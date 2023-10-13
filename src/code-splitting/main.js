console.log(20)
let n = Math.random() * 10
if (n > 3) {
  import('./tools.js').then(({add}) => {
    console.log(add(1,2))
  })
}