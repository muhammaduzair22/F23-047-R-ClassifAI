import express from "express"; // <-- Module Style import
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
