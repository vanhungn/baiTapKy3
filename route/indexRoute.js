
const apiRoute = require('./ipa');
function route(app){
    
    app.get("/age",apiRoute)
    app.get("/status",apiRoute)
    app.get("/qery",apiRoute)
    app.get("/:id",apiRoute)
    // app.put("/",apiRoute)
    // app.post("/",apiRoute)
    app.use("/",apiRoute)
   
  
}

module.exports = route;