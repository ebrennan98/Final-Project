const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('Here')
    res.send('Hi')
})

router.get('/add', (req, res) => {
    console.log('Here')
    res.send('Hi')
})

module.exports = router