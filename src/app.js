import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var usuario =[]


var lista = []

app.get("/tweets", (req, res)=>{
    res.send(lista)
})

app.post("/tweets", (req, res)=>{
    console.log(req.body.username)
    if(!req.body.username)
    {        
        res.send("UNAUTHORIZED")
    } else{
        lista.push({username : req.body.username, tweet: req.body.tweet})
        res.send(lista)
    }

})

app.post('/sign-up', (req, res)=> {
    const { username, avatar } = req.body

    if(!username||!avatar){
        res.status(400).send("Todos os campos são obrigatorios")
        return
    }

    usuario.push({id: usuario.length+1, username,avatar});
    res.status(201).send("OK")
})

const PORT = 5000;
app.listen(PORT);