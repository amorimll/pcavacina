import React, { useState } from "react";
import Navbar from "../components/navbar.js"
import "../styles/verAgendamentos.css"
import { getAgendamentos } from "../api/index.js";

const vacinas = ["Pfizer", "Astrazeneca", "Butantan", "Janssen"]
const horarios = ["8:00", "8:30", "9:00", "9:30", "10:00"]

const data = []

getAgendamentos()
    .then((response) => {
        for (var i = 0; i < response.length; i++) {
            data.push(response[i])
        }
        console.log(data)
    })

function Agendamento() {
    return (
        <body className="body">
            <div>
                <Navbar/>
                <div className="verAgendamento-main">

                {data.map(function(object, i){
                    return (
                        <div className="div-main-data">
                            <div className="div-main-data-nome">
                                <p className="div-main-data-labels-item"><b>Nome:</b>  {object.nome}</p>
                            </div>

                            <div className="div-main-data-dados">
                                <div className="div-main-data-fichaEsquerda">
                                    <p className="div-main-data-labels-item"><b>Email:</b> {object.email}</p>
                                    <p className="div-main-data-labels-item"><b>CPF:</b>  {object.cpf}</p>
                                    <p className="div-main-data-labels-item"><b>Telefone:</b>  {object.tel}</p>
                                </div>
                                
                                <div className="div-main-data-fichaDireita">
                                    <p className="div-main-data-labels-item"><b>Data:</b>  {object.data}</p>
                                    <p className="div-main-data-labels-item"><b>Horario:</b>  {object.horario}</p>
                                    <p className="div-main-data-labels-item"><b>Vacina:</b>  {object.vacina}</p>
                                </div>
                            </div>
                            
                        </div>
                    )
                })}
                </div>
            </div>
        </body>
    )
}
   
export default Agendamento;