import { Pedido } from '../model/Pedido';
import { Request, Response } from 'express';
const nodemailer = require('nodemailer');

export class PedidoController {
    async create(req: Request, res: Response) {

        try {
            const createPedido = await Pedido.create({ ...req.body });
            return res.json(createPedido);
        } catch (e) {
            return res.json({ msg: "Fail to create Pedido", status: 500, route: '/create/Pedido' });
        }
    };
    async read(req: Request, res: Response) {
        try {
            const getUsers = await Pedido.findAll();
            return res.json(getUsers);
        } catch (e) {
            return res.json({ msg: "Fail to get all users", status: 500, route: '/read' })
        }
    };
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const userToBeDeleted = await Pedido.findOne({ where: { id_pedido: id } });
            if (!userToBeDeleted) {
                return res.json("This user id doesn't exist!");
            }
            const deletedUser = await userToBeDeleted.destroy()
            return res.json({ userToBeDeleted: deletedUser, msg: "User sucessfully deleted" });
        } catch (e) {
            res.json({ msg: "Fail to delete user", status: 500, route: '/delete/:id' });
        }
    }
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const pedido= await Pedido.findOne({ where: { id_pedido: id } });
            
            if (pedido) {
            const user = await Pedido.update({ ...req.body }, {
                where: {
                    id_pedido: id,
                }
            });
            res.status(200).json({ msg: "User updated sucessfully", user });
            } else{
                return res.json({msg:"pedido não encontrado"});

            }
        } catch (e) {
            return res.json(e)
        }
    };
   
};



export default new PedidoController();