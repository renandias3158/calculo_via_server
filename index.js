import express from 'express';
const app = express()


app.get('/', (req,res) =>{
        res.send('Ok!');
});

app.get('/soma/:pri/:sec', (req,res) =>{
    let pri = parseInt(req.params.pri);
    let sec = parseInt(req.params.sec);

    let Soma = pri + sec;

    res.send("resultado: " + Soma)
});

app.get('/subtracao/:pri/:sec', (req,res) =>{
    let pri = parseInt(req.params.pri);
    let sec = parseInt(req.params.sec);

    let Subt = pri - sec;

    res.send("resultado: " + Subt)
});

app.listen(3000, () => {
    console.log('Servidor em execução... ');
    console.log('http://localhost:3000');


}); 