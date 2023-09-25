const listStudents=require("../../model/listStudents");

const postListStudents=async(req,res)=>{
    const {name,Class} = req.body;
    try {
        if(!name||!Class)
        {
            res.status(404).json({
                message:"is not name or Class"
            })
        }
        const newStudents= new listStudents({
            name:name,
            Class:Class
        })
        await newStudents.save();
        const results=await listStudents.find({});
        res.json(results)
    } catch (error) {
        res.status(404).json({
            message:"error severs"
        })
    }

}

module.exports=postListStudents;