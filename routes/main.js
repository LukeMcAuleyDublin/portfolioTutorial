const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

    const data = req.context
    res.render('landing', data)
})

module.exports = router