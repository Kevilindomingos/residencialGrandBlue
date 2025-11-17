import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient()

export default {
    create: async (req: Request, res: Response) => {
        const user = await prisma.user.create({ data: req.body })
        return res.status(201).json(user)
    },

    read: async (req: Request, res: Response) => {
        const users = await prisma.user.findMany({ select: { password: false, id: true, name: true, email: true, type: true} })
        return res.status(200).json(users)
    },

    update: async (req: Request, res: Response) => {
        const id = req.params.id
        const user = await prisma.user.update({data: req.body, where: {id: +id}})
        return res.status(200).json(user)
    },

    delete: async (req: Request, res: Response) => {
        const id = req.params.id
        const user = await prisma.user.delete({where: {id: +id}})
        return res.status(200).json(user)
    },

    login: async (req: Request, res: Response) => {
        const {email, password, type} = req.body

        try {
            const user = await prisma.user.findFirst({where: {email, password, type}, 
                select: {password: false, id: true, name: true, email: true, type: true}})

        if(!user){
            return res.status(401).json({message: "Email, senha ou tipo de usuário inválido."})
        }
            res.json({message: `Login bem sucedido como ${type}`, user})
        } catch(err) {
            res.status(500).json({message: "Erro no login", err})
        }
    }
}