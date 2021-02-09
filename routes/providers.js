const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


router.post('/', async (req, res) => {
  
  res.status(201).json({
        message : 'created'
    });
});

router.get('/:provider_id',  (req, res) => {
    const id = req.params.provider_id;
    res.status(200).json({
        id: id
    });
    
});

router.delete('/:provider_id',  (req, res) => {
    res.status(200).json({
        message : 'deleated'
    });
});

router.put('/:provider_id',  (req, res) => {
    res.status(200).json({
        message : 'updated'
    });
})

module.exports = router;
