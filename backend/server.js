const express = require('express');
const cors = require('cors');

const router = express.Router();
const app = express();

app.use(cors())
app.use(express.json());



//Post Method
router.get('/api/products', async (req, res) => {
     res.status(200).json([{
        name: "apple",
        price: 2000
    },
    {
        name: "apple -2",
        price: 300
    },
    {
        name: "apple -3",
        price: 20
    },
    {
        name: "apple -4",
        price: 2
    },
    {
        name: "apple -5",
        price: 4
    },
    {
        name: "apple -6",
        price: 5
    }])
    
})
app.use(router)

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})