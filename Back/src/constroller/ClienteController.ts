import { Cliente } from '../model/Cliente';
import { Request, Response } from 'express';

export class ClienteController {
    async create(req: Request, res: Response) {
        try {
            const createUser = await Cliente.create({ ...req.body });
            return res.json(createUser);
        } catch (e) {
            return res.json({ msg: "Fail to create user", status: 500, route: '/create' });
        }
    };

    async read(req: Request, res: Response) {
        try {
            const getUsers = await Cliente.findAll();
            return res.json(getUsers);
        } catch (e) {
            return res.json({ msg: "Fail to get all users", status: 500, route: '/read' })
        }
    };

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const userToBeDeleted = await Cliente.findOne({ where: { id_cliente: id } });
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
            const cliente= await Cliente.findOne({ where: { id_cliente: id } });
            
            if (cliente) {
            const user = await Cliente.update({ ...req.body }, {
                where: {
                    id_cliente: id,
                }
            });
            res.status(200).json({ msg: "User updated sucessfully", user });
            } else{
                return res.json({msg:"Cliente não encontrado"});

            }
        } catch (e) {
            return res.json(e)
        }
    };

// ordenar cliente por genero
    async readBymasculino(req: Request, res: Response) {
        try {
            const getUsers = await Cliente.findAll({ where: { genero: "masculino" } });
            return res.json(getUsers);
        } catch (e) {
            return res.json({ msg: "Fail to get all users", status: 500, route: '/read' })
        }
    }
    async readByfeminino(req: Request, res: Response) {
        try {
            const getUsers = await Cliente.findAll({ where: { genero: "feminino" } });
            return res.json(getUsers);
        } catch (e) {
            return res.json({ msg: "Fail to get all users", status: 500, route: '/read' })
        }
    }
// ordenar cliente por maior numero de compras e servicos
    async readByMostPurchasesAndServices(req: Request, res: Response) {
        
    }

};

export default new ClienteController();