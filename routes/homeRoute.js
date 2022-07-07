
router = require("express").Router()

router.get('/', (req, res)=> {
    res.json({
        "title" : "Test",
        "Message" : "Hello Ma "
    })
    console.log("hellow")
})

module.exports = router