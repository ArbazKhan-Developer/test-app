const express = require('express');
const app = express()
const PORT = 80

app.get('/', (req,res)=>{
    res.send('Hello there, welcome to test application.')
})

app.get('/home',(req,res)=>{
    res.send('welcome to home page.')
})

app.get('test',(req,res)=>{
    res.send('hello Arbaz')
})


app.listen(PORT, ()=>{
    console.log(`application running on PORT: ${PORT}`);
})

