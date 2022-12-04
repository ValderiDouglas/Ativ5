import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./Cadastro/formularioCadastroCliente";
import FormularioCadastroProduto from "./Cadastro/formularioCadastroProduto";
import FormularioCadastroServico from "./Cadastro/formularioCadastroServiço";
import FormularioCadastroPedido from "./Cadastro/formularioCadastroPedido";
import ListaClientes from "./Listar/listaClientes";
import ListaProdutos from "./Listar/listaProduto";
import ListaServico from "./Listar/listaServiços";
import AtualizaCadastroCliente from "./Altera/AlteraCliente";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {

        if (tela === 'Clientes') {
            return (

                <>
                    <BarraNavegacao seletorView={seletorView} tema="cyan-text text-darken-1" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Cadastrar Pedido']} />
                    <ListaClientes tema="cyan-text text-darken-1" />
                </>

            )

        }
        if (tela === 'Cadastrar Cliente') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="cyan-text text-darken-1" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Cadastrar Pedido']} />
                    <FormularioCadastroCliente tema="cyan-text text-darken-1" />
                </>
            )
        }
        if (tela === 'Cadastrar Produto') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="cyan-text text-darken-1" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Cadastrar Pedido']} />
                    <FormularioCadastroProduto tema="cyan-text text-darken-1" />
                </>
            )
        }

        if (tela === 'Cadastrar Serviço') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="cyan-text text-darken-1" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Cadastrar Pedido']} />
                    <FormularioCadastroServico Clienteervico tema="cyan-text text-darken-1" />
                </>
            )
        }

        if (tela === 'Serviços') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="cyan-text text-darken-1" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Cadastrar Pedido']} />
                    <ListaServico tema="cyan-text text-darken-1" />
                </>
            )
        }

        if (tela === 'Produtos') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="cyan-text text-darken-1" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Cadastrar Pedido']} />
                    <ListaProdutos tema="cyan-text text-darken-1" />
                </>
            )
        }
        if (tela === 'Cadastrar Pedido') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="cyan-text text-darken-1" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Cadastrar Pedido']} />
                    <FormularioCadastroPedido tema="cyan-text text-darken-1" />
                </>
            )
        }
        if (tela === 'Atualiza Cliente') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="cyan-text text-darken-1" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço', 'Cadastrar Pedido']} />
                    <AtualizaCadastroCliente tema="cyan-text text-darken-1" />
                </>
            )
        }
        else {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="cyan-text text-darken-1" botoes={['Clientes', 'Cadastrar Cliente', 'Cadastrar Produto']} />
                    <ListaProdutos tema="cyan-text text-darken-1" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}