import { Request, Response } from 'express';
import { Produto } from '../model/Produto';


export class ProdutoController {
    async create(req: Request, res: Response) {

        try {
            const createProduto = await Produto.create({ ...req.body });
            return res.json(createProduto);
        } catch (e) {
            return res.json({ msg: "Fail to create Produto", status: 500, route: '/create/Produto' });
        }
    };
    async read(req: Request, res: Response) {
        try {
            const getUsers = await Produto.findAll();
            return res.json(getUsers);
        } catch (e) {
            return res.json({ msg: "Fail to get all users", status: 500, route: '/read' })
        }
    };
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const userToBeDeleted = await Produto.findOne({ where: { id_produto: id } });
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
            const produto= await Produto.findOne({ where: { id_produto: id } });
            
            if (produto) {
            const user = await Produto.update({ ...req.body }, {
                where: {
                    id_produto: id,
                }
            });
            res.status(200).json({ msg: "User updated sucessfully", user });
            } else{
                return res.json({msg:"Produto não encontrado"});

            }
        } catch (e) {
            return res.json(e)
        }
    };

    
}







export default new ProdutoController();