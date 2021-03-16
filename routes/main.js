const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const data = {
        greeting: 'Welkom!',
        introduction: 'My name is Luke from Dublin, Ireland.'
    }

    res.render('landing', data)
})

module.exports = router