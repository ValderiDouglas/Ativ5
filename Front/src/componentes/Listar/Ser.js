import React, { useState } from "react";
import Axios from "axios";
import Lixeira from '../../assets/lixeira.png';
import Lapiz from '../../assets/lapiz.png';

import AtualizaServico from "../Altera/AlteraServico";

export default function Ser(props) {
    const [seila ,setSeila] = useState("0");
    const id = props.id
    const Link = () => {
        Axios.delete(`http://localhost:3001/delete/servico/${id}`).then(resp => {
            console.log(resp);
        });
        alert("Serviço foi deletado!");
        
    }
    return <div className="section">
    <br></br>
    <div className="row col s7 ">
        <p class="col m1 "></p>
        <a class="col m6 cyan-text text-darken-1">Nome: {props.nome} </a>
        <a class="col m1 cyan-text text-darken-1">ID: {props.id}</a>
        <a class="col" href="/"><img src={Lixeira} alt="Lixeira" onClick={Link} /></a>
        <a class="col"><img src={Lapiz} alt="Lixeira" onClick={() => setSeila("1")} /></a>
        { seila== "1"? <AtualizaServico id={props.id}/> : null}
    </div>
    </div>
}
