const {Router} = require("express")  //destructuring 
const {getToDo, saveToDo, updateToDo, deleteToDo} = require("../controllers/ToDoController")

const router = Router()

//creating routes

router.get('/',getToDo)

router.post('/save',saveToDo)

router.put('/update',updateToDo)

router.delete('/delete',deleteToDo)

module.exports = router