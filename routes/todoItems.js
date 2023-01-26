const router = require('express').Router();

//import todo model
const todoItemsModel = require('../models/todoItems');

//first route -- add TodoItem to Database
router.post('/api/item', async (req, res) => {
    try {
        const newItem = new todoItemsModel({
            item: req.body.item
        })
        //save this item in database
        const saveItem = await newItem.save()
        res.status(200).json(saveItem);
    } catch(err) {
        res.json(err)
    }
})


//Second route -- get data from database
router.get('/api/items', async (req, res) => {
    try{
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems)
    } catch(err) {
        res.json(err);
    }
})

//Updating items
router.put('/api/item/:id', async (req, res) => {
    try{
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json("Item Updated");
    }catch(err) {
        res.json(err);
    }
})

//Deleting items from database
router.delete('/api/item/:id', async (req, res) => {
    try{
        //finding item by id and deleting
        const deletedItem = await todoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Item Deleted");
    }catch(err) {
        res.json(err);
    }
})



//export router
module.exports = router;