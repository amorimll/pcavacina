import React, { useState } from "react";
import Navbar from "../components/navbar.js"
import "../styles/agendamento.css"
import { postAgendamento } from "../api/index.js";

const vacinas = ["Pfizer", "Astrazeneca", "Butantan", "Janssen"]
const horarios = ["8:00", "8:30", "9:00", "9:30", "10:00"]

function Agendamento() {

    const [formularioData, setFormularioData] = useState({
        nome: "",
        email: "",
        cpf: "",
        tel: "",
        data: "",
        horario: "",
        vacina: "",
    })

    const handleSubmit = () => {
        postAgendamento({
            ...formularioData
        })
    }

    return (
        <body className="body">
            <div>
                <Navbar/>
                <div className="div-main">
                    <form onSubmit={handleSubmit} className="div-main-form">
                        <label className="div-main-form-label" >Nome</label>
                        <input className="div-main-form-input" placeholder="Nome" type={"text"} onChange={(e) => setFormularioData({ ...formularioData, nome: e.target.value})}></input>

                        <label className="div-main-form-label" >Email</label>
                        <input className="div-main-form-input" placeholder="Email" type={"text"} onChange={(e) => setFormularioData({ ...formularioData, email: e.target.value})}></input>

                        <label className="div-main-form-label" >CPF</label>
                        <input className="div-main-form-input" placeholder="CPF" type={"text"} onChange={(e) => setFormularioData({ ...formularioData, cpf: e.target.value})}></input>

                        <label className="div-main-form-label" >Telefone</label>
                        <input className="div-main-form-telefone" placeholder="Telefone"type={"tel"} onChange={(e) => setFormularioData({ ...formularioData, tel: e.target.value})}></input>
                        
                        <label className="div-main-form-label" >Data</label>
                        <input className="div-main-form-data" type={"date"} onChange={(e) => setFormularioData({ ...formularioData, data: e.target.value})}></input>

                        <label className="div-main-form-label" >Horário</label>
                        <select className="div-main-form-horario" onChange={(e) => setFormularioData({ ...formularioData, horario: e.target.value})}>
                            {horarios.map(module => (
                                <option>{module}</option>
                            ))}
                        </select>

                        <label className="div-main-form-label">Vacina</label>
                        <select className="div-main-form-input" onChange={(e) => setFormularioData({ ...formularioData, vacina: e.target.value})}>
                            {vacinas.map(module => (
                                <option>{module}</option>
                            ))}
                        </select>
                        <button className="div-main-form-button" type="submit">Agendar</button>
                    </form>
                </div>
            
            </div>
        </body>
    )
}
   
export default Agendamento;