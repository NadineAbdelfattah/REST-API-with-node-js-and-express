import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();


let users=[]
// All routings here are starting with /users
router.get('/',(req,res)=>{
    // console.log(users);
    res.send(users);
});

router.post('/',(req,res)=>{
    const user = req.body;
    users.push({...user,id:uuidv4()});
    res.send(`user with name: ${user.name} added to the DB`);
});

//the column':' means that anything comes after /user/ will be directed here
// but how can we specify the id?the answer is: using req.params  
router.get('/:id',(req,res)=>{
    const { id } = req.params;
    const foundUser= users.find((user)=>user.id === id);
    res.send(foundUser);
});

router.delete('/:id',(req,res)=>{
    const { id } = req.params;
    users = users.filter((user)=>user.id !== id);
    res.send(`User with the Id ${id} has been deleted successfully`);
});

router.patch('/:id',(req,res)=>{
    const { id } = req.params;
    const {name,age,city} = req.body;
    const user = users.find(user.id === id);

    if(name) user.name = name;
   if(age) user.age = age;
   if(city) user.city = city;
   res.send(`User with Id ${id} has been updated`)
});

export default router;