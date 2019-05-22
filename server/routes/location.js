const router = require('express').Router();
const db = require('../utils');

router.get('/markers-array', async (req, res) => {
  db.getArray().then(data => res.send(data));
});

router.post('/markers-array', async (req, res) => {
  db.createLocationArray(req.body).then(data => res.send(data));

});

module.exports = router;
