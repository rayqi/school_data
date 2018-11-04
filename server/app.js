const express = require('express')
const app = express();
const morgan = require('morgan')

app.use(morgan('dev'))
app.use('/api', require('./routes')) //require the api pages for students and grades

app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    // res.status(err.status || 404).json({
    //     message: err.message,
    //     error: err
    // });
    res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(3000, () => {
    console.log('server is running at 3000')
})

module.exports = app;