import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));

var usuario =[
    {
        name: "bobesponja",
    }
]

console.log("oi")

var lista = [
    {
        username: "bobesponja",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
    }
]

app.get("/", (req, res) => {
    res.send("Sejá bem vindo!")
});

app.get("/tweets", (req, res)=>{
    res.send(lista)
})

app.post('/sign-up', (req, res)=> {
    let name = req.body.name;
    usuario[(usuario.length)] = name;
    return res.json([usuario[(usuario.length-1)]])
})

app.listen(5000);