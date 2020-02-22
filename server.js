const express = require('express');
const app = express();


app.get('/api/users',(req,res)=>{
    res.json([
        { 
            id:1,
            username:'Francis'
        },
        { 
            id:2,
            username:'Jones'
        }
    ])
})


const port = process.env.PORT || 3001;

app.listen(port);

