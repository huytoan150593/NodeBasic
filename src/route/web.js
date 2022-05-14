import express from "express";
import homeController from "../controller/homeController"

const router = express.Router();

const initWebRouter = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/detail/users/:id', homeController.getUserPage)
    router.post('/create-new-user', homeController.createUser)

    router.get('/edit-user/:id', homeController.showInfo)
    router.post('/update-user', homeController.updateUser)

    router.get('/about', (req, res) => {
        res.send("I'm Toan!!")
    })

    return app.use('/', router)
}

export default initWebRouter;