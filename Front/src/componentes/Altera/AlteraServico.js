import Axios from "axios";
import React, { useState } from "react";

export default function AtualizaServico(props) {
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
        Axios.post(`http://localhost:3001/update/servico/${id}`, {
            Snome: values.Snome,
            Sduracao: values.Sduracao,
            Sdescricao: values.Sdescricao,
            Spreco:values.Spreco
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
                    <input id="Snome" name="Snome" type="text" className="validate" onChange={pega}  placeholder="Nome"/>
                </div>
                <div className="input-field col s6">
                    <input id="Sduracao" name="Sduracao" type="text" className="validate" onChange={pega}  placeholder="Duração"/>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input id="Sdescricao" name="Sdescricao" type="text" className="validate" onChange={pega}  placeholder="Descrição"/>
                </div>
                <div className="input-field col s6">
                    <input id="Spreco" name="Spreco" type="text" className="validate" onChange={pega}  placeholder="Preço po hora"/>
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
