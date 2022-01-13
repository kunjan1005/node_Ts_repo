import { Request, Response } from "express"
export const register = (req: Request, res: Response) => {
    return res.send('this is registration page')
}
export const login = (req: Request, res: Response) => {
    return res.send('hello this is login page')
}
export const getUser = (req: Request, res: Response): any => {
    return res.send('hello this is from the service side')
}
