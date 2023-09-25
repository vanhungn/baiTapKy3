const multer = require('multer');
const path=require("path");

  const storage = multer.diskStorage({
  destination: function (req, file, cb) {
 
    cb(null, 'upload')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' +  path.extname(file.originalname)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const maxSize = 1 * 1000 * 1000;
const upload = multer({ storage: storage ,
  fileFilter:(req,file,cd)=>{
   
    if(path.extname(file.originalname)===".docx"||path.extname(file.originalname)===".pdf"){
      cd(null,true);
    }else{
      cd(null,false);
      cb(new Error('I don\'t have a clue!'))
    }

  },
  limits: { fileSize: maxSize }
});


	


module.exports=upload;