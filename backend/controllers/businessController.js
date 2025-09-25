const Business = require("../models/Business");

// GET all businesses
const getBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find({});
    res.status(200).json(businesses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST new business
const createBusiness = async (req, res) => {
  try {
    const business = await Business.create(req.body);
    res.status(201).json(business);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getBusinesses, createBusiness };
