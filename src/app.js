import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let usuario =[]
let lista = []
let avatar=""


app.get("/tweets", (req, res)=>{
        if (lista.length>10){
            let novaLista=[]
            for (let j= 0; j<10; j++){
                novaLista.push(lista[lista.length-1-j])
            }
            res.send(novaLista)
        } else{
            res.send(lista)
        }


})

app.post("/tweets", (req, res)=>{
    let nome = req.body.username
    if(!req.body.username)
    {        
        res.status(401).send("UNAUTHORIZED")
    } else{
        const consulta = usuario.find((d)=>d.username==nome? avatar = d.avatar:false)
        if(consulta){
            lista.push({id: lista.length+1, username : req.body.username, avatar: avatar, tweet: req.body.tweet})
            res.send(lista)
        } else{
            res.status(401).send("UNAUTHORIZED")
        }
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