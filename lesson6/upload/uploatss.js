const path = require("path");
const infiStudentModule = require("../model/infoStudents");
const uploatModel = require("../model/baocao");
const uploadss = async (req, res) => {
  const { email, avatar } = req.body;

  try {
    if (!email) {
      res.status(404).json({
        message: "is not email or file",
        data: null,
      });
    }
    let roleProduct = null;
    
    const hendlerUploads = await infiStudentModule.find({ email: email });

    hendlerUploads.forEach((product) => {
      roleProduct = product.role;

    });
    const hendlersFiles = await uploatModel.findOne({
      nameFile: req.file.originalname,email:email
    });
 
    if (!hendlersFiles) {
      const newdata = new uploatModel({
        email: email,
        path: path.join(`${__dirname}//${req.file.filename}`),
        role: roleProduct,
        nameFile: req.file.originalname,
      });

      await newdata.save();

      const upll = await uploatModel.find({});
      res.json(upll);
    } else {
      res.status(404).json({ message: "da ton tai" });
    }
  } catch (error) {
    res.json({ message: "error!" });
  }
};

module.exports = uploadss;
