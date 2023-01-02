const express = require('express')
const mysql = require('mysql')
const app = express()

app.get('/', (req, res) => {
    console.log('Here')
    res.send('Hi')
})

const deptRouter = require('./routes/departments')
const empRouter = require('./routes/employees')
const empMongoRouter = require('./routes/employeesMongo')

app.use('/departments', deptRouter)
app.use('/employees', empRouter)
app.use('/employeesMongo', empMongoRouter)

app.set('view engine', 'ejs');

app.render('home', function (err, html) {
    if (err) console.log(err);
    console.log(html);
 });


app.listen(3000)