var express = require("express");
var router = express.Router();
var config = require('../movies.json');
router.get("/", function(req, res, next) {
    res.send(config)
});

router.post('/edit/:id', function (req, res) {
    if (!req.body.storyline) {
        return res.status(400).json({
          status: 'error',
          error: 'req body cannot be empty',
        });
      }
      res.status(200).json({
        status: 'succes',
        storyline: req.body.storyline
      })
    for (var i = 0; i < config.length; i++) {
        if (config[i].id === req.params.id) {
            config[i].storyline = req.body.storyline;
        }
    }
});



module.exports = router;