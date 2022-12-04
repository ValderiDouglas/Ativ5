/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Asso from "./Ser";
export default function ListaServico(props) {
    const estilo = `${props.tema} waves-effect #263238 blue-grey darken-4 btn`
    const formatacao = "col"
    const [lista, setLista] = useState([]);
    useEffect(() => {
        Axios.get(`http://localhost:3001/read/servico`).then((resp) => {
            setLista(resp.data);
        });
    }, [])
    return (
        <div>

            <p className="row">
                <h5 className='col m0.1'>Filtrar por:</h5>
                <div className={formatacao}>
                    <p className={estilo}>Mais consumidos</p>
                </div>
                <div className={formatacao}>
                    <p className={estilo}>Mais consumidos por Gênero</p>
                </div>
            </p>

            <div className="collection">
            {lista && lista.map((value) => {
                return <Asso
                    id={value.id_servico} nome={value.Snome}
                />
            })}
        </div>
        </div>
    )
}
