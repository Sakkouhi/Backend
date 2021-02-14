const express = require('express');
const mongoose = require("mongoose");
const {ProviderService} = require("../services/provider");
const router = express.Router();

router.post('/', async (req, res) => {
  console.log(JSON.stringify(req.body));
  const provider = await ProviderService.save(req.body);
  console.log(provider);
  res.status(201).json(provider);
});

router.get('/:provider_id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.provider_id))
    res.status(400).json({
      message: "Invalid ID"
    });
  const provider = await ProviderService.findById(req.params.provider_id);
  if (provider) {
    res.status(200).json(provider);
  }
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
  const provider = await ProviderService.deleteOne({_id: req.params.provider_id});
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
  const provider = await ProviderService.findOneAndUpdate(req.params.provider_id, req.body);
  if (provider)
    res.status(200).json(provider);
  else
    res.status(404).json({
      message: "Provider not found"
    });
});

module.exports = router;
