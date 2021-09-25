const fetch = require('node-fetch')

function urlsorgu(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ 
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
    '(\\#[-a-z\\d_]*)?$','i');
  return !!pattern.test(str);
}

module.exports=function(key){
	if(!key) throw 'Api keyini gir.'
	this.kısalt =  async function(link, type) {
    if(!urlsorgu(link) || !link) throw 'Link gir'
    if(isNaN(type)) throw 'Type sayı olmalı'
    const api = await fetch(`https://www.pnd.tl/api?api=${key}&category=${type}&url=${link}`)
    .then(response => response.json());
    if(!api || !api.shortenedUrl) throw 'Apiden kaynaklı sorun oluştu'
    return api.shortenedUrl
	}, this.özelkısalt =  async function(özel, link, type) {
    if(!urlsorgu(link) || !link) throw 'Link gir'
    if(isNaN(type)) throw 'Type sayı olmalı'
    if(!özel) throw 'Aliasi gir'
    const api = await fetch(`https://www.pnd.tl/api?api=${key}&category=${type}&url=${link}&alias=${özel}`)
    .then(response => response.json());
    if(!api || !api.shortenedUrl) throw 'Apiden kaynaklı sorun oluştu'
    return api.shortenedUrl
	}
	return this;
}
//&alias=furtsi
