import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Home() {
    return (
        <div>
            <div className="menu">
                <h2>Jobfinder</h2>
                <Link className="link" to="/job/new"><p>Adicionar vaga</p></Link>
            </div>
            <div className="container search">
                <input placeholder="Faça sua pesquisa"></input>
                <button className="button">Pesquisar</button>
            </div>
            <div className="container jobs">
                <ul>
                    <li>
                        <h2>Programador</h2>
                        <b>BNE</b>
                        <Link className="link" to="/job/:id"><p>Ir para vaga</p></Link>
                    </li>
                    <li>
                        <h2>Programador</h2>
                        <b>BNE</b>
                        <Link className="link"><p>Ir para vaga</p></Link>
                    </li>
                    <li>
                        <h2>Programador</h2>
                        <b>BNE</b>
                        <Link className="link"><p>Ir para vaga</p></Link>
                    </li>
                    <li>
                        <h2>Programador</h2>
                        <b>BNE</b>
                        <Link className="link"><p>Ir para vaga</p></Link>
                    </li>
                    <li>
                        <h2>Programador</h2>
                        <b>BNE</b>
                        <Link className="link"><p>Ir para vaga</p></Link>
                    </li>
                    <li>
                        <h2>Programador</h2>
                        <b>BNE</b>
                        <Link className="link"><p>Ir para vaga</p></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}