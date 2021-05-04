const express = require('express')
const router = express.Router();
const Todo = require('../models/Todo')

router.get('/', async(req,res) => {
    console.log(req,'req9898');
    const Todos = await Todo.find({"key":req.query.key})
    try{
        res.json(Todos)
    }catch(e){
        res.json({message:e})
    }
})


module.exports = router