const express =require('express');
const app = express();


app.listen(3000, ()=>{
    console.log('The Server Is ON');
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors());

app.get('/',(req,res)=>{
    res.send('hello world');
});