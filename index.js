const express = require('express') 
const app = express() 
const exhbs = require('express-handlebar')
const home = homeRouters = require('./routes/courses')
const addRoutes = require('./routers/courses')
const courseRoutes = require('./routers/courses')


const hbs = expbhs.create({
    defaultLayout: ' main'
    extname: 'hbs'

})

app.engine('hbs' , hbs.engine) 
app.set(' view engine ' , 'hbs') 
app.set('views' , 'views') 

app.use(express.static('public'))
app.use(homeRouters)
app.use(addRoutes)
app.use(courseRoutes)



    app.get('/' , (req , res) => {
        res.render('index')
        res.render('about')
    })


const PORT = process.env.PORT || 3000

app.listen (PORT , () => {
    console.log('вова ' ${PORT}) 
})