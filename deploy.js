const fs = require("fs");
const Web3 = require("web3");
const mnemonic = "hip place blur trouble all stamp kidney foster chair crater april vacant"
const truffleURL = "https://rinkeby.infura.io/v3/3bbbfc57ab84437d844047c56a039466"
const HDWalletProvider = require("truffle-hdwallet-provider");
const provider = new HDWalletProvider(mnemonic, truffleURL)
const web3 = new Web3(provider);
const bytecode = fs.readFileSync('./build/__contracts_lottery_sol_Lottery.bin');
const abi = JSON.parse(fs.readFileSync('./build/__contracts_lottery_sol_Lottery.abi'));
const deploy = async() => {
    accounts = await web3.eth.getAccounts()
    console.log("Trying to deploy from accounts ", accounts[0]);
    lottery = await 
    new web3.eth.Contract(abi)
        .deploy({ 
            data: '0x'+bytecode, 
        }).send({
            from: accounts[0], 
            gas:'1000000'
    });
    console.log('contract deployed to',lottery.options.address);
    // const message = await 
    //     lottery.methods.message().call();
    // console.log(message);
    process.exit();             
};
deploy();