import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient()

export default {
    
    create: async (req: Request, res: Response) => {
    const id = req.params.id
    const data = req.body

    const dailylist = await prisma.dailyList.create({ data: { ...data, listId: parseInt(id) }})
    return res.status(201).json(dailylist)
    },

    read: async (req: Request, res: Response) => {
        const dailylists = await prisma.dailyList.findMany({ select: { id: true, horaRefeicao: true, medicamentos: true, atvRealizadas: true, humorGeral: true, higienePessoal: true }})
        return res.status(200).json(dailylists)
    },

    update: async (req: Request, res: Response) => {
        const id = req.params.id
        const data = req.body

        const dailylist = await prisma.dailyList.update({where: { id: parseInt(id) }, data})
        return res.status(200).json(dailylist)
    },

    delete: async (req: Request, res: Response) => {
        const id = req.params.id
        const dailylist = await prisma.dailyList.delete({where: { id: parseInt(id) }})
        res.status(200).json(dailylist)
    },

    listIdoso: async (req: Request, res: Response) => {
        const id = req.params.id
        const daily = await prisma.dailyList.findMany({where: { listId: parseInt(id) }})
        return res.status(200).json(daily)
    }
}