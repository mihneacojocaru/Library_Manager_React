const express = require('express');
const {sequelize} = require('../models');

const {BookStore} = require('../models');

const appRoute = express.Router();

function asyncHandler(callback){
    return async (req,res,next) => {
        try {
            await callback(req,res,next);
        } catch (error) {
            next(error)
        }
    }
}

module.exports = appRoute; 

appRoute.get('/books/:id', asyncHandler(async (req,res,next)=>{
    const currentBook = await BookStore.findByPk(req.params.id);
    return res.status(200).json(currentBook);
}));


//--- GET BOOKS

appRoute.get('/books', asyncHandler(async (req,res,next)=>{
    const books = await BookStore.findAll();
    return res.status(200).json(books);
}));


appRoute.post('/books', asyncHandler(async (req,res,next)=>{
    const {title,author,release_date,isbn_no} = req.body;
    const createBook = await BookStore.create({title,author,release_date,isbn_no});
    return res.status(200).json(createBook);
}));

appRoute.put('/books', asyncHandler(async(req,res,next)=>{
    let item = req.body;
    let {id} = req.body;
    let d = await BookStore.findByPk(id);

    if(item.title != '') d.title = item.title;
    if(item.author != '') d.author = item.author;
    if(item.release_date != '') d.release_date = item.release_date;
    if(item.isbn_no != '') d.isbn_no = item.isbn_no;
    
    d.save();

    res.json(d);
}));

appRoute.delete('/books/:id', asyncHandler(async(req,res,next)=>{
    let {id} = req.params;
    let d = await BookStore.findByPk(id);
    await d.destroy();
    res.json('Item was successfuly deleted');
}));