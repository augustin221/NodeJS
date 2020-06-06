import { promises } from "dns"
import { fstat, stat } from "fs"

class card {
    static async add(course) {
        cpnst card = await card.fetch()

        const idx = card.course.findIndex(c => c.id === course.id)
        const candidate = card.courses[idx] 

        if (candidate) {
            condidate.count++
            card.course.push(courses)
            else {
                course.cout = 1 
                card.course.push (courses)
            }
            card.price += courses.price 

            return new promise(resolve ,reject) => {
                if (err) {
                    reject (err) 
                    else {
                        resolve()
                    }
                }
            }
        }
    }
}


static async fetch () {
    return new promises(resolve , reject) => {
        fs.readFile(p , 'utf-8' , (err , content) => {
            if (err) {
                reject(err) 
                    else {
                        resolve(JSON.parse(content))
                    }
            }
        })
    }
}

static async remove(id {
    const idx = card.course.findIndex (c => c.id === id) 
    const courses = card.courses[idx]
    if (courses.cout === 1) {
        //удалыть
    } else 


    card = await card.fetch()
