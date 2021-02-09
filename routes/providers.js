const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {ProviderController} = require("../controllers/provider");

router.post('/', async (req, res) => {
  const provider = await ProviderController.save(req.body);
  res.status(201).json(provider);
});

router.get('/:provider_id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.provider_id))
    res.status(400).json({
      message: "Invalid ID"
    });
  const provider = await ProviderController.findById(req.params.provider_id);
  if (provider)
    res.status(200).json(provider);
  else
    res.status(404).json({
      message: "Provider not found"
    });
});

router.delete('/:provider_id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.provider_id))
    res.status(400).json({
      message: "Invalid ID"
    });
  const provider = await ProviderController.deleteOne({_id: req.params.provider_id});
  if (provider)
    res.status(201).json(provider);
  else
    res.status(404).json({
      message: "Provider not found"
    });
});

router.put('/:provider_id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.provider_id))
    res.status(400).json({
      message: "Invalid ID"
    });
  const provider = await ProviderController.findOneAndUpdate(req.params.provider_id, req.body);
  if (provider)
    res.status(200).json(provider);
  else
    res.status(404).json({
      message: "Provider not found"
    });
})

module.exports = router;
