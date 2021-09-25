const fetch = require('node-fetch');

module.exports = {
    find: async function(val) {
        const api = await fetch(`https://api.codare.fun/rss-bul?link=${val}`).then(
            (response) => response.json()
        );
        if (api.error || api.status == 'false') throw "Apide has been problem";
        let str = JSON.stringify(api);
        str = str.replace(/\"başlık\":/g, "\"title\":");
        let json = JSON.parse(str);
        return json;
    },
    read: async function(val) {
        const api = await fetch(`https://api.codare.fun/rss-oku?link=${val}`).then(
            (response) => response.json()
        );
        if (api.error || api.status == "false") throw "Apide has been problem";
        let str = JSON.stringify(api);
        str = str.replace(/\"başlık\":/g, "\"title\":");
        let json = JSON.parse(str);
        return json;
    },
};