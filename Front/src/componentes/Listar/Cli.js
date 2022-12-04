import React, { useState } from "react";
import Axios from "axios";
import Lixeira from '../../assets/lixeira.png';
import Lapiz from '../../assets/lapiz.png';

import AtualizaCadastroCliente from "../Altera/AlteraCliente";

export default function Asso(props) {
    const [seila ,setSeila] = useState("0");
    const id = props.id
    const Link1 = () => {
        Axios.delete(`http://localhost:3001/delete/cliente/${id}`).then(resp => {
            console.log(resp);
        });
        alert("Cliente foi deletado!");

    }
    // mudar para a tela AtualizaCadastroCliente



    return <div className="section">
        <br></br>
        <div className="row col s7 ">
            <p class="col m1 "></p>
            <a class="col m6 cyan-text text-darken-1">Nome: {props.nome} </a>
            <a class="col m1 cyan-text text-darken-1">ID: {props.id}</a>
            <a class="col" href="/"><img src={Lixeira} alt="Lixeira" onClick={Link1} /></a>
            <a class="col"><img src={Lapiz} alt="Lixeira" onClick={() => setSeila("1")} /></a>
            { seila== "1"? <AtualizaCadastroCliente id={props.id}/> : null}
        </div>
        
    </div>
    

}