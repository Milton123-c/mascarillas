const express = require("express");

const routes = express.Router();



routes.get('/', (req, res) => {
    res.render("index");
});

routes.get('/correo', (req, res) => {
    res.redirect('https://mail.google.com/mail/miltonmercado92@gmail.com');
});

routes.get('/ms/rosa1', (req, res) => {
    res.redirect('https://api.whatsapp.com/send?phone=50670451147&text=Quiero%20una%20mascarilla%20Rosa%201');
});

routes.get('/ms/pirata1', (req, res) => {
    res.redirect('https://api.whatsapp.com/send?phone=50670451147&text=Quiero%20una%20mascarilla%20Pirata%201');
});

routes.get('/ms/oscuro1', (req, res) => {
    res.redirect('https://api.whatsapp.com/send?phone=50670451147&text=Quiero%20una%20mascarilla%20Oscuro%201');
});

routes.get('/ms/oscuro2', (req, res) => {
    res.redirect('https://api.whatsapp.com/send?phone=50670451147&text=Quiero%20una%20mascarilla%20Oscuro%202');
});

routes.get('/ms/blancoNegro', (req, res) => {
    res.redirect('https://api.whatsapp.com/send?phone=50670451147&text=Quiero%20una%20mascarilla%20blancoNegro');
});

routes.get('/ms/colorido', (req, res) => {
    res.redirect('https://api.whatsapp.com/send?phone=50670451147&text=Quiero%20una%20mascarilla%20Colorido');
});

routes.get('/ms/oscuro3', (req, res) => {
    res.redirect('https://api.whatsapp.com/send?phone=50670451147&text=Quiero%20una%20mascarilla%20Oscuro%203');
});

routes.get('/ms/azul1', (req, res) => {
    res.redirect('https://api.whatsapp.com/send?phone=50670451147&text=Quiero%20una%20mascarilla%20Azul%201');
});

routes.get('/nf/infantil1', (req, res) => {
    res.redirect('https://api.whatsapp.com/send?phone=50670451147&text=Quiero%20una%20mascarilla%20Infantil %201');
});

routes.get('/nf/infantil2', (req, res) => {
    res.redirect('https://api.whatsapp.com/send?phone=50670451147&text=Quiero%20una%20mascarilla%20Infantil %202');
});
routes.get('/nf/infantil3', (req, res) => {
    res.redirect('https://api.whatsapp.com/send?phone=50670451147&text=Quiero%20una%20mascarilla%20Infantil %203');
});
routes.get('/nf/infantil4', (req, res) => {
    res.redirect('https://api.whatsapp.com/send?phone=50670451147&text=Quiero%20una%20mascarilla%20Infantil %204');
});
routes.get('/nf/infantil5', (req, res) => {
    res.redirect('https://api.whatsapp.com/send?phone=50670451147&text=Quiero%20una%20mascarilla%20Infantil %205');
});

module.exports = routes;