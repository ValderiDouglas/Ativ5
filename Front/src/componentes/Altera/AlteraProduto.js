import Axios from "axios";
import React, { useState } from "react";

export default function AtualizaProduto(props) {
    const estiloBotao = `btn waves-effect #263238 blue-grey darken-4 ${props.tema}`

    const [values, setValues] = useState([]);
    const pega = (value) => {
        setValues(preValue => ({

            ...preValue,
            [value.target.name]: value.target.value,

        }))
    }
    var id = props.id
    const manda = () => {
        Axios.post(`http://localhost:3001/update/produto/${id}`, {
            nome: values.nome,
            descricao: values.descricao,
            preco: values.preco,
        }
        ).then(resp => {
            // console.log(values);
        });


    }

    return (
        <div className="row">
            <br></br><br></br>
            <div class="col s12 m4 l2"></div>
            <div class="col s12 m4 l8">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome" name="nome" onChange={pega} type="text"  className="validate"  placeholder="Nome"/>
                        </div>
                        <div className="input-field col s6">
                            <input id="preco" name="preco" onChange={pega} type="text" className="validate"   placeholder="Preço"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="descricao" name="descricao" onChange={pega} type="text" className="validate"  placeholder="Descrição"/>
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
