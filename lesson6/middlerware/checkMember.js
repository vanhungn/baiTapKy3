const infoStudentsModel = require("../model/infoStudents");
const checkMember = async (req, res,next) => {
  const {email,password} = req.body;
  try {
    if(!email||!password)
    {
        res.status(404).json({
            message:"is not email or password",
            data:null
        })
    }
    const member = await infoStudentsModel.find({
      email: email,
      password: password,
    });
    member.forEach((product) => {
      if (product.role === "member") {

       
        next();
        
      } else {
        res.status(404).json({
          message: "account password is incorrect",
          data: null,
        });
      }
    });
  } catch (error) {
    res.status(404).json({
      message: "sever error!!!",
    });
  }
};

module.exports = checkMember;
