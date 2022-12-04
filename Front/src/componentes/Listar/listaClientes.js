/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Asso from "./Cli";
import style from "../../assets/custom.css"

export default function ListaClientes(props) {
    const estilo = `${props.tema} waves-effect #263238 blue-grey darken-4 btn`
    const formatacao = "col"
    const [lista, setLista] = useState([]);
    useEffect(() => {
        Axios.get(`http://localhost:3001/read/cliente`).then((resp) => {
            setLista(resp.data);
        });
    }, [])

    // quando clicar no genero, ele vai filtrar a lista de acordo com o genero
    const filtraLista = () => {
        Axios.get(`http://localhost:3001/read/filtro/masculino`).then((resp) => {
            setLista(resp.data);
        });
    }
    const filtraLista1 = () => {
        Axios.get(`http://localhost:3001/read/filtro/feminino`).then((resp) => {
            setLista(resp.data);
        });
    }

    // quando clicar no maior numero compra, ele vai filtrar a lista de acordo com o maior numero de compra
    const filtraConsumo = () => {
        Axios.get(`http://localhost:3001/read/filtro/consumo`).then((resp) => {
            setLista(resp.data);
        });
    }

    return (
        <div>
            
            <p className="row">
                <h5 className='col m0.1'>Filtrar por:</h5>       
                <div className={formatacao}>
                    <p className={estilo} onClick={() => filtraLista()} value= "">Masculino</p>
                </div>
                <div className={formatacao}>
                    <p className={estilo} onClick={() => filtraLista1()} value= "">Feminino</p>
                </div>

                <div className={formatacao}>
                    <p className={estilo} onClick={() => filtraConsumo()} value= "">Maior número de compras</p>
                </div>

                <div className={formatacao}>
                    <p className={estilo}>Maior Valor</p>
                </div>
            </p>

        <div className="collection">  
            {lista && lista.map((value) => {
            return <Asso
              id={value.id_cliente} nome={value.nome}
            />
            
          })}</div>
        </div>
    )
}