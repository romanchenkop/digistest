const Location = require('./models/Location');

function getArray() {
  return Location.findOne();
}

function createLocationArray(data) {
  const locationArray = new Location({
    markers: data.markers,
    createdAt: new Date()
  });

  return locationArray.save();
}

module.exports.createLocationArray = createLocationArray;
module.exports.getArray = getArray;
