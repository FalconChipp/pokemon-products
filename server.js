const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;
const JSON_FILE = 'products.json';

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

app.post('/update-products', (req, res) => {
    const updatedProduct = req.body;

    fs.readFile(JSON_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).send("Error reading file");

        let products = JSON.parse(data || "[]");

        const index = products.findIndex(p => p.id === updatedProduct.id);

        if (index !== -1) {
            products[index] = updatedProduct;
            console.log(`Updating existing product: ${updatedProduct.id}`);
        } else {
            products.push(updatedProduct);
            console.log(`Adding new product: ${updatedProduct.id}`);
        }

        fs.writeFile(JSON_FILE, JSON.stringify(products, null, 2), (err) => {
            if (err) return res.status(500).send("Error writing file");
            res.send({ message: "Success" });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
