const customer = require('../models/customer.js')

exports.index = (req,res) => {
    customer.find().then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500),send({
            msg: err.message
        })
    })
}