const web3 = require('../utils/web3');

const getCode = async (address) => {
    try {
        const receipt = await web3.getCode(address);
        console.log({ receipt });
        return receipt;
    } catch (error) {
        console.log({ error: error.message });
    }
}

module.exports = {
    getCode
}