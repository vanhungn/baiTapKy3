const listStudents=require("../../model/listStudents");

const deleteListStudents=async(req,res)=>{
    const {_id}=req.query;
    try {
        const setList=await listStudents.findById({_id:_id})
        
        if(setList)
        {
            await listStudents.deleteOne({_id:_id});
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

module.exports=deleteListStudents;