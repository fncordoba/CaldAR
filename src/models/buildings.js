module.exports = mongoose => {
  const Building = mongoose.model(
    'buildings',
    mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      adress: {
        type: String,
        required: true
      },
      company: {
        type: String
      },
      phone: {
        type: String,
        required: true
      },
      boilers: [{
        type: Number,
        required: true
      }]
    },
    { timestamps: true })
  );
  return Building;
};
