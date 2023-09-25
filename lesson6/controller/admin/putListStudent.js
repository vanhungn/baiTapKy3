const listStudents=require("../../model/listStudents");

const putListStudent=async(req,res)=>{
    const {_id}=req.query;
    const {name}=req.body;
    try {
        const setList=await listStudents.findById({_id:_id})
        
        if(setList)
        {
            await listStudents.updateOne({_id:_id},{name:name});
            const newStudents=await listStudents.find({});
            res.json(newStudents);
        }
        else{
            res.status(404).json({
                message:"not found student",
                data:null
            })
        }
    } catch (error) {
        res.status(404).json({
            message:"error sever"
        })
    }
}

module.exports=putListStudent;