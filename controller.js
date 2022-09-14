const { Item } = require('./models/users.js')

exports.index = async function (req,res,next) {
    const items = await Item.find()
    res.send(items)
}

exports.create = async function (req, res, next) {
    const item = new Item({
        name: req.body.name,
        type: req.body.type,
        desc: req.body.desc,
        price: req.body.price,
        stock: req.body.stock
    })

    const savedItem = await item.save()
    res.send(savedItem)
}

