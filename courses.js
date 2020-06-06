const {router} = require('express') 
const router = router()
const router = router()



router.get('/courses' , async (req , res) => {
    cosnt courses = await
    res.render('courses' , {
        title: "курсы" , 
        isCourses:true
    })
})

module.exports = router


class Course {
    constructor(title , price , img) {
        this.title = title 
        this.price = price
        this.img = img
    }
}

Async


save() {
    const courses = Course.getAll()
}

static getAll() {
    return new Promise(resolve , reject) => {
        fs.readFile (
            path.join(__dirname , '..' , 'data' , 'courses.json') , 
            'utf-8' ,
            (err , console) => {
                if( err) throw reject(err) 
            } else {

            }
        )   
    }
}

router.get ('/:id' , (req , res) => {
    res.render('course')
})


