const fs = require("fs")

global.owner = ["6283850246271", "48699552763", "621111111111"];

//watermark 
global.packname = 'Author'
global.author = 'RenzGG'
global.idcennel = '<id_saluran>@newsletter'
global.thumb = 'https://imgur.com/a/aTJIgvn' // Your Thumbnail

global.mess = {
    success: 'Done Abangku 🔥',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    owner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    group: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*⏳ Sedang Di Proses !*_',
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update ${__filename}`);
    delete require.cache[file];
    require(file);
});
