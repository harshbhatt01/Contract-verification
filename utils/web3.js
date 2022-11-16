const Web3 = require('web3');
//const ethers = require('ethers');
const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/cd7739e1d7bd4587bcdd6bf1144b03fb'));

const getCode = async (address) => {
    try {
        const receipt = await web3.eth.getCode(address);
        return receipt;
    } catch (error) {
        console.log({ error: error.message });
    }
}

module.exports = {
    getCode
}