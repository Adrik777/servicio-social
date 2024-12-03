import express from 'express';
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript Node Express!');
});

app.listen(port, () =>{
  console.log(`El servidor esta corriend en el puerto ${{port}}`)
})