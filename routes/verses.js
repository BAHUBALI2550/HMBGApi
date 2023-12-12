const express = require("express");
const router = express.Router();

const {getVerses,getVersesTesting} = require("../controller/verses");

router.route("/").get(getVerses);
router.route("/testing").get(getVersesTesting);

module.exports = router;