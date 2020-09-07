const express = require('express');
const hbs = require('hbs');
const b_parser = require('body-parser');
const app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/assets'));
app.set('view engine', 'hbs')
app.use(b_parser.urlencoded({extended:true}));
const port = process.env.PORT ||5000;

app.get('/', (req, res)=>{
    res.render('home.hbs', {posicion: 'home'});
});

app.get('/about', (req, res)=>{
    res.render('about.hbs', {posicion: 'about'});
});

app.get('/blog', (req, res)=>{
    res.render('blog.hbs', {posicion: 'blog'});
});

app.get('/blog-post', (req, res)=>{
    res.render('blog-post.hbs',);
})

app.get('/documentation', (req, res)=>{
    res.render('documentation.hbs', {posicion: 'documentation'});
});

app.get('/contact', (req, res)=>{
    res.render('contact.hbs', {posicion: 'contact'});
});

app.get('/design-style', (req, res)=>{
    res.render('design-style.hbs', {posicion: 'design'});
});

app.get('/portfolio', (req, res)=>{
    hbs.registerHelper('portfolio', function(context, options) { return "flex" })
    res.render('portfolio.hbs', {posicion: 'flex'});
});

app.post('/portfolio', (req, res) =>{
    let flex = req.body.flex || ''
    let stati = req.body.static || ''
    let swit = req.body.switch || ''
    let masonry = req.body.masonry||''
    let item = req.body.item || ''
    let posi = '';
    if (flex != ''){
        hbs.registerHelper('portfolio', function(context, options) { return flex })
        posi = flex;
    }else if (stati != ''){
        hbs.registerHelper('portfolio', function(context, options) { return stati })
        posi = stati;
    }else if (swit != ''){
        hbs.registerHelper('portfolio', function(context, options) { return swit })
        posi = swit;
    }else if(masonry != ''){
        hbs.registerHelper('portfolio', function(context, options) { return masonry })
        posi=masonry
    }else if(item != ''){
        hbs.registerHelper('portfolio', function(context, options) { return item })
    }
    res.render('portfolio.hbs', {posicion:posi})
});

app.get('/doc-hover', (req, res)=>{
    res.render('doc-hover.hbs');
});


app.listen(port);

console.log('Servidor escuchandoe en el puerto 5000')
