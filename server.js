const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const FILE_PATH = './products.json';

app.post('/update-products', (req, res) => {
    const newProduct = req.body;

    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        let products = [];
        
        if (!err && data) {
            try {
                products = JSON.parse(data);
            } catch (e) {
                console.error("Error parsing JSON, starting with empty array");
            }
        }

        const index = products.findIndex(p => p.id === newProduct.id);
        if (index !== -1) {
            products[index] = newProduct; 
        } else {
            products.push(newProduct);
        }

        fs.writeFile(FILE_PATH, JSON.stringify(products, null, 2), (err) => {
            if (err) {
                return res.status(500).send({ message: "Error writing file" });
            }
            res.send({ message: "Product saved successfully to products.json!" });
        });
    });
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
