import { Router } from "express";
import { createUserController } from "./useCases/createUser";

const router = Router()

router.post('/users',(request,response)=>{
    return createUserController.handle(request,response)
})
router.get('/',(request,response)=>{
    response.send('Hello World!')
})
export {router}