import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';


const prisma = new PrismaClient()

export default {
    create: async (req: Request, res: Response) => {
        const list = await prisma.list.create({ data: req.body })
        return res.status(201).json(list)
    },

    read: async (req: Request, res: Response) => {
        const lists = await prisma.list.findMany({ select: { id: true, image: true, name: true,
             bornAge: true, roomNumber: true, caregiverName: true, especialConditions: true} })
        return res.status(200).json(lists)
    },

    update: async (req: Request, res: Response) => {
        const id = req.params.id
        const list = await prisma.list.update({data: req.body, where: {id: +id}})
        return res.status(200).json(list)
    },

    delete: async (req: Request, res: Response) => {
        const id = req.params.id
        const list = await prisma.list.delete({where: {id: +id}})
        return res.status(200).json(list)
    }
}