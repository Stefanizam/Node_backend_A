const express = require("express");
const { getManjas, getManja, createManja, updateManja, deleteManja } = require("../controllers/manjas_controller");
const router = express.Router();

router.route("/")
  .get(getManjas)
  .post(createManja);

router.route("/:id")
  .get(getManja)
  .put(updateManja)
  .delete(deleteManja);

module.exports = router;