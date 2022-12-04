import { Request, Response } from 'express';
import { Servico } from '../model/Servico';


export class ServicoController {
    async create(req: Request, res: Response) {

        try {
            const createServico = await Servico.create({ ...req.body });
            return res.json(createServico);
        } catch (e) {
            return res.json({ msg: "Fail to create Servico", status: 500, route: '/create/Servico' });
        }
    };
    async read(req: Request, res: Response) {
        try {
            const getUsers = await Servico.findAll();
            return res.json(getUsers);
        } catch (e) {
            return res.json({ msg: "Fail to get all users", status: 500, route: '/read' })
        }
    };
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const userToBeDeleted = await Servico.findOne({ where: { id_servico: id } });
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
            const servico= await Servico.findOne({ where: { id_servico: id } });
            
            if (servico) {
            const user = await Servico.update({ ...req.body }, {
                where: {
                    id_Servico: id,
                }
            });
            res.status(200).json({ msg: "User updated sucessfully", user });
            } else{
                return res.json({msg:"Servico não encontrado"});

            }
        } catch (e) {
            return res.json(e)
        }
    };

    
}







export default new ServicoController();