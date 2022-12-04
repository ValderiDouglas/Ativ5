import Axios from "axios";
import React, { useState } from "react";

export default function FormularioCadastroCliente(props){
    const estiloBotao = `btn waves-effect #263238 blue-grey darken-4 ${props.tema}`
    
    const [values, setValues] = useState([]);
    const pega = (value) => {
        setValues(preValue => ({

            ...preValue,
            [value.target.name]: value.target.value,

        }))
    }
    const manda = () => {
        Axios.post(`http://localhost:3001/create/cliente`, {
            nome: values.nome,
            nomeSocial: values.nomesocial,
            cpf: values.cpf,
            rgs: values.rgs,
            telefones: values.telefones,
            dataCadastro: values.datacadastro,
            genero: values.genero
        }
        ).then(resp => {
            // console.log(values);
        });


    }

    return (  
        <div className="row" >
            <br></br><br></br>
            <div class="col s12 m4 l2"></div>
            <div class="col s12 m4 l8">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="nome" onChange={pega} name="nome" type="text" className="validate" placeholder="Nome" />
                    </div>
                    <div className="input-field col s6">
                        <input id="nomeSocial" onChange={pega} name='nomesocial' type="text" className="validate" placeholder="Nome Social"/>
                    </div>

                    <div className="input-field col s6">
                        <input id="cpf" name='cpf' onChange={pega} type="text" className="validate" placeholder="CPF"/>
                    </div>

                    <div className="input-field col s6">
                        <input id="rgs" name='rgs' onChange={pega} type="text" className="validate" placeholder="rgs" />
                    </div>
                </div>
                <div className="row">

                <div className="input-field col s6">
                        <input id="dataCadastro" onChange={pega} name='datacadastro' type="text" className="validate" placeholder="Data Cadastro"/>
                    </div>

                    <div className="input-field col s6">
                        <input id="telefones" onChange={pega} name= 'telefones'type="text" className="validate" placeholder="Telefones"/>
                    </div>
                    
                    <div className="input-field col s6">
                        <input id="genero" onChange={pega} name="genero" type="text" className="validate" placeholder="Genero" />
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
        </div>
        </div>
    )

    }
