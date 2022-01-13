import {Router } from 'express'
import  * as user from '../controller/user'
let router:Router=Router()
router.get('/',user.getUser)
router.get('/register',user.register)
router.get('/login',user.login)
export=router
