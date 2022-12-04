import Axios from "axios";
import React, { useState } from "react";

export default function FormularioCadastroPedido(props){
    
    const estiloBotao = `btn waves-effect #263238 blue-grey darken-4 ${props.tema}`
    
    const [values, setValues] = useState([]);
    const pega = (value) => {
        setValues(preValue => ({

            ...preValue,
            [value.target.name]: value.target.value,
        }))
    }
    const manda = () => {
        if (values.idProduto || values.idServico) {
        Axios.post(`http://localhost:3001/create/pedido`, {
            id_cliente: values.idCliente,
            id_produto: values.idProduto?values.idProduto:null,
            id_servico: values.idServico?values.idServico:null,
            quantidade: values.quantidade,
        }
        ).then(resp => {
            // console.log(values);
        });
    }else{
        alert("Preencha pelo menos um campo de produto ou serviço")
    }
    }

    return (
        <div className="row">
        <br></br><br></br>
        <div class="col s12 m4 l2"></div>
        <div class="col s12 m4 l8">
        <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <input id="idCliente" name="idCliente" type="text" className="validate" onChange={pega}  placeholder="Id do Cliente"/>
                </div>
                <div className="input-field col s6">
                    <input id="idProduto" name="idProduto"type="text" className="validate" onChange={pega}  placeholder="Id do Produto"/>
                </div>
                <div className="input-field col s6">
                    <input id="idServico" name="idServico"type="text" className="validate" onChange={pega}  placeholder="Código do Serviço"/>
                </div>
                <div className="input-field col s6">
                    <input id="quantidade" name="quantidade"type="text" className="validate" onChange={pega}  placeholder="Quantidade"/>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <button className={estiloBotao} onClick={() => manda()} type="submit" name="action">Cadastrar
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </form>
    </div></div>
    )
}