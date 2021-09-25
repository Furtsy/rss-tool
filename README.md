Rss Tool
---
It makes it easy for you to read rss and find rss on the site.

[Github](https://github.com/Furtsy) , [Discord](https://discord.com/invite/JSvKxPs)
---
```shell
npm install rss-tool
```
```javascript
const tool = require('rss-tool')

async function read() {
let res = await tool.read('https://www.reddit.com/.rss', 1) //read rss url
console.log(res)
}

async function find() {
let res = await tool.find('https://www.reddit.com/.rss', 1) //find rss url
console.log(res)
}

read() 
/*/
[
  {
    title: "İmamoğlu'nun açtığı İBB yurtları; ayda 600 TL, günde 2 öğün yemek, spor salonu var. 10%'luk şehit ve gazi çocukları için kontenjan ayrıldı ve şeffaf seçimlerle, torpilsiz öğrenci alımı yapıldı. Şimdilik 600 küsür öğrenci var, gelecek yıllarda 5000 yatak kapasitesi hedefleniyor.",
    link: 'https://www.reddit.com/r/Turkey/comments/pv3hxm/imamoğlunun_açtığı_ibb_yurtları_ayda_600_tl_günde/',
    content: 'submitted by    /u/DutchClocker    to    r/Turkey  \n [link]   [comments]'
  },
  {
    title: "Sabah 40dk'mı harcadım.",
    link: 'https://www.reddit.com/r/KGBTR/comments/pv19m5/sabah_40dkmı_harcadım/',
    content: 'submitted by    /u/Montevar    to    r/KGBTR  \n [link]   [comments]'
  }
]
/*/

find()
/*/
{
  status: true,
  title: 'reddit: the front page of the internet',
  favicon: 'https://www.reddit.com/favicon.ico',
  url: 'https://www.reddit.com/',
  feedurl: [
    {
      title: 'reddit: the front page of the internet',
      url: 'https://www.reddit.com/.rss'
    }
  ]
}
/*/