/**
 * cheerio 这是一个node模块，
 * 可以用来提供HTML中的内容
 */
let html = (
  `
   <ul class="list-group">
      <li id="1" class="list-group-item">朗读者</li>
   </ul>
   <ul class="list-group">
      <li id="2" class="list-group-item">激情8</li>
   </ul>
  `
)
//类似于jquery
let cheerio = require('cheerio');
let $ = cheerio.load(html);
$('.list-group .list-group-item').each(function(index,item){
   let $this = $(item);
   let movie = {
     id:$this.attr('id'),
     title:$this.text()
   }
  console.log(movie);
});
