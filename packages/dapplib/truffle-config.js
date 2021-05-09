require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remind method imitate private flee stadium'; 
let testAccounts = [
"0x1cfed8c45ecbb8743219f336dde7d7ea02b0551ee4df8ba9681dd329ce000592",
"0xd48c3e037f51bc2eaa88818942f9654e0949ccdd618a77cd1ac6ff98b1572b4c",
"0x507caed67699804c25b7afbbdd80535655cd095b482f31b37fd774ad7f500de0",
"0x2aad8db423ba0f0c08b0acee07674e82a371b546dd971a6e0051c32bc4626a7b",
"0xdcf56f987d7bde8075e11d71020dab2825cdc7639501b1944800291b4e523bc0",
"0x8363eded0a3f270d358c10980c9dd0ec5dc73499c94681111d29c6d9d2274ae5",
"0xa864215ca7b9e1fd15936065e909eadea6cf114a8d24d8d228a13f4a5afc5d0e",
"0xb85bc22c3effe40462cadd28bb644ca1d06473b2612bd4e40e4f0f38f2de3d46",
"0xbab3420751292307570fd9a453d4f156c147fc9e13b46b3b2af0ddfc72cdbc4c",
"0xbe2320cd7f1ae3afe56c348869b3bdc965e7efa17afca69f91b3e41d8beb3f81"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
