import { Request, Response } from 'express';


export default function login(req: Request, res: Response) {
    console.log(req.body);
    res.send('Login controller');
}