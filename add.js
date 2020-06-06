import { Router } = require ("express")
import { stat } from "fs"
cosnt router = Router()

router.get('/' , (req  ,res) => {
    res.render ('add' , {
        isADd: true
    })
})

module.exports = router 


if (scard) {
    Scard.addEventListerend('click' , evetn => {
        if (evetn.target.classList.contanins('js-remove')) {
            cosnt id = evetn.target.dateset.id 


        fetch('/card/remove' + id , {
            method: 'delete'
        }) .then(res => res.json()) {
            .then(card => }
                if (card.)
        }
        }
    