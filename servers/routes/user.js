const express = require('express'); 

const router = express.Router();

router.get('/user', async (req, res) => {
    const allDbusers = await User.find({});

    const html = `
    <ul>
        ${allDbusers.map((user)=> `<li>${user.firstname} - ${user.email}</li>`)};
    </ul>
    `;
    res.send(html);
});

router.get("/api/users", async(req, res) =>{
    const allDbusers = await User.find({});
    res.json(allDbusers);
})

router
    .router("/api/users/:id")
    .get(async(req,res)=>{
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).send("User not found");
        }
        return res.json(user);
    })

    router.post("/api/users", async(req,res)=>{
        const body =req.body;
        if(!body.email){
            return res.status(400).send("Email is required");
        }
        const result = await User.create({
            firstname: "John",
            lastName: "Doe",
            email: body.email,
        })
        return res.status(201).json({msg: "success"});


    });


    module.exports = router;
