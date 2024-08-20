const naipe_controller = require ("./src/naipe.js")
const express = require("express");
const app = express();
const porta = 3000;

app.get("/naipe", (req, res)=> {
    const content = naipe_controller.index()
    res.json(content)
})

app.get("/naipe/:id", (req, res)=> {
    const content = naipe_controller.show(req.params.id)
    res.json(content)
})

app.post("/naipe", (req, res) => {
    const code = naipe_controller.store(req.body)
    res.status(code).json()
})

app.put("/naipe/:id", (req, res) => {
    const code = naipe_controller.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/naipe/:id", (req, res) => {
    const code = naipe_controller.destroy(req.params.id);
    res.status(code).json()
})

app.listen(porta, () => {
    console.log("servidor iniciado na porta 3000!")
})
