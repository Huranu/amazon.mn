const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/protect");

const {
  createComment,
  updateComment,
  deleteComment,
  getComment,
  getComments,
} = require("../controller/comments");

router
  .route("/")
  .get(getComments)
  .post(protect, authorize("admin", "operator", "user"), createComment);

router
  .route("/:id")
  .get(getComment)
  .put(protect, authorize("admin", "operator", "user"), updateComment)
  .delete(protect, authorize("admin", "operator", "user"), deleteComment);

module.exports = router;
