import express from 'express';
const app = express()


app.get('/', (req,res) =>{
        res.send('Ok!');
});

app.get('/sum/:um/:dos', (req,res) =>{
   let um = parseInt(req.params.um);
    let dos = parseInt(req.params.dos);
    if(isNaN(um)){
     res.send('ERROR')
    } 
    if(isNaN(dos)){
      res.send('ERROR')
    }else{
      let Soma = um + dos;

        res.send("resultado: " + Soma)  
    } 
});

app.get('/subt/:um/:dos', (req,res) =>{
    let um = parseInt(req.params.um);
    let dos = parseInt(req.params.dos);
    if(isNaN(um)){
     res.send('ERROR')
    } 
    if(isNaN(dos)){
      res.send('ERROR')
    }
    else{
       let subt = um - dos;
        res.send("resultado: " + subt) 
    }
});

app.get('/divi/:um/:dos', (req,res) =>{
    let um = parseInt(req.params.um);
    let dos = parseInt(req.params.dos);
    if(isNaN(um)){
     res.send('ERROR')
    } 
    if(isNaN(dos)){
      res.send('ERROR')
    }
    else{
       let divi = um / dos;
      res.send("resultado: " + divi) 
    }
});

app.get('/multi/:um/:dos', (req,res) =>{
  let um = parseInt(req.params.um);
    let dos = parseInt(req.params.dos);
    if(isNaN(um)){
     res.send('ERROR')
    } 
    if(isNaN(dos)){
      res.send('ERROR')
    }else{
      let multi = um * dos;

        res.send("resultado: " + multi)  
    } 
});

app.listen(3000, () => {
    console.log('Servidor executando ');
    console.log('http://localhost:3000');


}); 

}); 

