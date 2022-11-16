const { Router } = require('express');
const router = Router();
const {  getCode } = require('../controllers/explorer');


router.get('/byt/:address', async (req, res) => {
    try {
        const { address } = req.params;
        const result = await getCode(address);
        console.log({ result });
        return res.status(200).json({ result });
    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;