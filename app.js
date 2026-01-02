const express = require("express");
const { blogs } = require("./model/index");
const { where } = require("sequelize");
const app = express()

app.set("view engine", "ejs")

//database connetion 
require("./model/index")

app.use(express.json())  // app.js lai explity ma form use gari ra xu vanyera vanyeko 
app.use(express.urlencoded({extended:true}))


//homepage api
app.get("/",async(req,res)=>{
    //table bata data nikalnu paryo 
     const allBlogs =  await blogs.findAll()
     console.log(allBlogs)
   res.render("homepage",{blogs:allBlogs})
    
    //blogs vanney key ma all blogs ko data pass garyeko ejs file lai 
    
})
// Add blog page api
app.get("/createform", (req,res)=> {
    res.render("createform")
}   )
//get form data api
app.post("/createform",async(req,res)=>{
      const title = req.body.title;
        const subTitle  = req.body.subTitle;
        const description = req.body.description;
        // const {title, subtitle, description} = req.body 

    //database ma halnye aba 
await blogs.create({
    title : title,
    subTitle : subTitle,
    description : description
})


    res.redirect("/")
})
//singlepage
app.get("/singlepage/:id",async(req,res)=> {
   const id = req.params.id
const data =  await blogs.findAll({
    where: {
        id : id
    }
})

    res.render("Singlepage",{data:data})
})


//delete page
app.get("/delete/:id",async(req,res)=>{
    const id = req.params.id
    await blogs.destroy({
        where: {
            id:id
        }
    })
    res.redirect("/")
})

//edit page 
app.post("/edit/:id",async(req,res)=>{
    const id = req.params.id 
    const title = req.body.title
    const description = req.body.description
    const subTitle = req.body.subTitle

    await blogs.update({
        title : title,
        description:description,
        subTitle:subTitle

    }, {
        where: {
            id:id
        }
    }
)
res.redirect("/singlepage/"+id)
    
})

app.get("/edit",(req,res)=>{
    res.render("editPage")
})


app.listen(3000,function(){
    console.log("server running 30000")
})


 