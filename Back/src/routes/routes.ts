import express from "express";
import ClienteController from "../constroller/ClienteController";
import PedidoController from "../constroller/PedidoController";
import ProdutoController from "../constroller/ProdutoController";
import ServicoController from "../constroller/ServicoController";

const route = express.Router();


route.post('/create/cliente', ClienteController.create)
route.get('/read/cliente', ClienteController.read)
route.delete('/delete/cliente/:id', ClienteController.delete)
route.post('/update/cliente/:id', ClienteController.update)
route.get('/read/filtro/masculino', ClienteController.readBymasculino)
route.get('/read/filtro/feminino', ClienteController.readByfeminino)
route.get('/read/filtro/consumo', ClienteController.readByMostPurchasesAndServices)


route.post('/create/produto', ProdutoController.create)
route.get('/read/produto', ProdutoController.read)
route.delete('/delete/produto/:id', ProdutoController.delete)
route.post('/update/produto/:id', ProdutoController.update)

route.post('/create/pedido', PedidoController.create)
route.get('/read/pedido', PedidoController.read)
route.delete('/delete/pedido/:id', PedidoController.delete)
route.post('/update/pedido/:id', PedidoController.update)

route.post('/create/servico', ServicoController.create)
route.get('/read/servico', ServicoController.read)
route.delete('/delete/servico/:id', ServicoController.delete)
route.post('/update/servico/:id', ServicoController.update)



export default route;