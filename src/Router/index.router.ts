import {Router, Request, Response} from 'express';

const router = Router();

router.use('/hi', (req: Request, res: Response) => {
    res.send({
        status: 200,
        message: "I just want to say hello"
    })
})

export default router;