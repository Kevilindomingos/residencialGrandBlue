import { Router, Request, Response } from "express";
import userController from './controllers/user';
import listController from './controllers/list';
import dailyList from './controllers/dailyList';

const routes = Router()

routes.get("/", (req: Request, res: Response) : any => {
    return res.send('rota de teste')
})

routes.post("/users", (req: Request, res:Response) : any => userController.create(req,res))
routes.get("/users", (req: Request, res:Response) : any => userController.read(req,res))
routes.put("/users/:id", (req: Request, res:Response) : any => userController.update(req,res))
routes.delete("/users/:id", (req: Request, res:Response) : any => userController.delete(req,res))
routes.post("/login", (req: Request, res:Response) : any => userController.login(req,res))

routes.post("/list", (req: Request, res:Response) : any => listController.create(req,res))
routes.get("/list", (req: Request, res:Response) : any => listController.read(req,res))
routes.put("/list/:id", (req: Request, res:Response) : any => listController.update(req,res))
routes.delete("/list/:id", (req: Request, res:Response) : any => listController.delete(req,res))

routes.post("/list/:id/dailyList", (req: Request, res: Response) : any => dailyList.create(req, res));    //atribuição da rotina diaria ao id do idoso
routes.get("/dailyList", (req: Request, res:Response) : any => dailyList.read(req,res))
routes.put("/dailyList/:id", (req: Request, res:Response) : any => dailyList.update(req,res))
routes.delete("/dailyList/:id", (req: Request, res:Response) : any => dailyList.delete(req,res))
routes.get("/list/:id/dailyList", (req: Request, res: Response) : any => dailyList.listIdoso(req, res));  //rota para visualizar a rotina por id

export default routes