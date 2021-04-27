import express from 'express';
import bodyPareser from 'body-parser';
import usersRoutes from './routes/users.js';


const app = express();
const port = 3000;
app.use(bodyPareser.json());
app.use('/users',usersRoutes);

app.get('/',(req,res)=>{
    res.send('Hola from home')
})
app.listen(port,()=>console.log(`Server running on port: http://localhost:${port}`));