const list = require("../../model/listStudents");

const getListStudent = async (req, res) => {
  try {
    const listStudents = await list.find({});

    if (!listStudents) {
      res.status(404).json({
        message: "no data",
      });
    } else {
      res.json({
        data: listStudents,
      });
    }
  } catch (error) {
    res.json({
      message: "not found",
    });
  }
};
module.exports = getListStudent;
