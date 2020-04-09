const CryptoJS = require("crypto-js");

var encrypted = CryptoJS.AES.encrypt('{"test":1}', "175345a789abcdef", {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.NoPadding
});

console.log(encrypted.toString());

// /sag5h5swQKND6ZmdlfuIg==
