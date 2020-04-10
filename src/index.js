const CryptoJS = require("crypto-js");

let data = '{"test":1}'
let key = 'NdRgUkXp2s5v8y/A'

console.log('\n---------------- Encryption ----------------\n')

var encrypted = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
});

console.log(encrypted.toString());

console.log('\n---------------- Decryption ----------------\n')

var decrypted = CryptoJS.AES.decrypt(encrypted.toString(), CryptoJS.enc.Utf8.parse(key), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
})

console.log(decrypted.toString(CryptoJS.enc.Utf8) + "\n")
