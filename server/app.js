import express from 'express'
import concectaNaDb from './db.js';
import cors from 'cors'


const app = express();
app.use(cors());
const conexao = await concectaNaDb();

conexao.on('error', (erro) => {
    console.error('Erro ao conectar ao MongoDB',erro)
})

conexao.once('open', () => {
    console.log('Conectado no MongoDB')
})

app.listen(3000, () => {
        console.log('Servidor conectado')
})