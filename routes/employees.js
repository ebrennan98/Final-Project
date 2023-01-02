const express = require('express')
const router = express.Router()
const db = require('../connection')

router.get('/edit/:eid', (req, res) => {
    res.send('Employees')
})

router.get('/', (req, res) => {
    db.promise().query('SELECT * FROM employee')
    })
    

router.get('/edit/:eid', (req, res) => {
    console.log('Here')
    res.send('Hi')
})

module.exports = router