console.log(20)
let n = Math.random() * 10
if (n > 3) {
  import('./tools.js').then((c) => {
    console.log(c.add(1,2))
  })
}