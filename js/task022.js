const arr = [7, 10, 15, 22]

function t1() {
  let p = []
  for (let i = 0; i < arr.length; i++) {
    p[i] = arr[i] * 2
  }
  console.log(p)

  let out = ''
  for (let i = 0; i < arr.length; i++) {
    out += `${p[i] + ' '}`
  }

  document.querySelector('.out').innerHTML = out
}
document.querySelector('.button').addEventListener('click', t1)
