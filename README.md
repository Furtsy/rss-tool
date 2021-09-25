Pnd.tl
---
Bu modülü, kullanarak URL'lerinizi pnd.tl üzerinden kısaltmanıza olanak sağlar.

[Sitemiz](https://codare.fun) , [pnd.tl](https://www.pnd.tl)
---
```shell
npm install pnd.tl
```
```javascript
const modül = require('pnd.tl')('api keyiniz')

//normal url kısalt
async function kısalt() {
let link = await modül.kısalt('https://github.com/CodAre-Development', 1) //link ve type giriyoruz
console.log(link)
}
kısalt() //https://pnd.tl/fUyy

//özel url kısalt
async function özelurl() {
let link = await modül.özelkısalt('codare', 'https://codare.fun', 1) // alias, link ve type giriyoruz
console.log(link)
  }
  özelurl() // https://pnd.one/codare
```
### Typelar
| Type | Kategorisi 
|---|---
| `1` | Genel reklam kolay 
| `2` | Genel reklam zor
| `3` | +18 Kolay
| `4` | +18 Zor
| `6` | Telegram +18
| `7`     | Telegram Genel