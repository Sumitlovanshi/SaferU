// controllers/helplineController.js

exports.getHelplines = (req, res, next) => {
  // This sends a JSON list of important numbers to the app
  res.status(200).json({
    status: 'success',
    results: 3,
    data: [
      {
        service: "Police Control Room",
        number: "100",
        priority: "High"
      },
      {
        service: "Ambulance",
        number: "102",
        priority: "High"
      },
      {
        service: "Women Helpline (Domestic Abuse)",
        number: "181",
        priority: "Medium"
      }
    ]
  });
};