const Donor = require('../models/Donor');

const causes = [
  "Support Children's Education",
  "Medical Aid for All",
  "Food for the Needy",
  "Clean Water Initiative",
  "Disaster Relief Fund"
];

exports.addDonor = async (req, res) => {
  try {
    const randomCause = causes[Math.floor(Math.random() * causes.length)];
    const donor = new Donor({ ...req.body, cause: randomCause });
    await donor.save();
    res.status(201).json(donor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};