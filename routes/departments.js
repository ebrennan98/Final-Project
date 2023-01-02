const express = require('express')
const router = express.Router()
const mysql = require('mysql')

router.get('/', (req, res) => {
    console.log('Here')
    res.send('Departments')
})


router.get('/delete/:did', (req, res) => {
    console.log('Here')
    res.send('Hi')
})

module.exports = router
