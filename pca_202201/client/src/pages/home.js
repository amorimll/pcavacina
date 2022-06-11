import React, { useState } from 'react';
import Navbar from "../components/navbar";
import { getTeste } from '../api';
import '../styles/home.css'

function Home() {

    var [nome, setNome] = useState()
    var [palavra, setPalavra] = useState()

    const nomeUpdate=(event)=>{
        setNome(event.target.value)
    }
    const palavraUpdate=(event)=>{
        setPalavra(event.target.value)
    }

    return (
        <body className='body'>
            <Navbar/>
            <div className='divdiv'>
                <div className='div-texto'>
                    <h1 className='div-texto-titulo'>Agendamento</h1>
                    <h2 className='div-texto-subtitulo'>Agende sua próxima dose da vacina.</h2>
                    <p className='div-text-paragrafo'>Proporcionamos serviços de agendamento 24hr para as próximas doses da vacina.</p>
                    <button className="home-button">Agendar</button>
                    <button className="home-button">Quem Somos</button>
                </div>
            </div>
        </body>
    )
}

export default Home;