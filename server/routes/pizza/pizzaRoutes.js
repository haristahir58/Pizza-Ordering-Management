const express = require('express');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = express.Router();
const Pizza = require('../../model/pizza/pizzaModel')
const db = require('../../db/conn')

//For Getting All the Pizzas
router.get('/pizza', async(req,res)=>{
    try{
        const pizza =  await Pizza.find();
        if(!pizza){
            res.status(404).json({error:"Cant find Pizzas"})
        }
        res.json(pizza)

    }catch(err){
        res.status(400).json({message: err.message})
    }
});

// For getting specific Pizza

router.get('/pizza/:id', async(req,res)=>{
    try{
        const pizza = await Pizza.findOne({_id:req.params.id})
        if(!pizza){
            res.status(404).json({error: "Pizza Not found"})
        }
        res.json(pizza)

    }
    catch(err){
    res.status(400).json({message: err.message})
    }

})

// For Posting Pizza Details

router.post('/pizza/new',upload.single('image'), async(req,res)=>{
    console.log(req.file, req.body, 42)
    const {title, description,price} = req.body;
    const imageUrl = req.file.path;
    if(!title || !description || !price || !imageUrl){
        res.status(422).json({message: "PLease fill all the fields"})
    }
    const pizza = new Pizza({title,description,price,imageUrl})
    try{
        await pizza.save();
        res.status(201).json({message:"Pizza added successfully"})
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
})

//For updating Pizza Details

router.put('/pizza/:id',async(req,res)=>{
    try{
        const pizza = await Pizza.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        if(!pizza){
            res.status(404).json({message:"Pizza not found"})
        }
        res.json(pizza)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

//For deleting Pizza

router.delete('/pizza/:id',async(req,res)=>{
    try{
        const pizza = await Pizza.findOneAndDelete({_id:req.params.id})
        if(!pizza){
            res.status(404).json({message:"Pizza not found"})
        }
        res.json(pizza)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

module.exports = router;
