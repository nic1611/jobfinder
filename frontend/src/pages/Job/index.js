import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css'

export default function New(){
    return(
        <div className="new-job-container">
            <div className="content">
                <section>
                    <h1>Cadastrar nova vaga</h1>
                    <p>Descreva sua vaga detalhadamente.</p>
                    <Link className="link" to="/">
                        Voltar para home
                    </Link>
                </section>
                <section>
                    <h2>Programador</h2>
                    <p>Vaga para programador C# com experiência.</p>
                    <i>R$ 4000</i>
                    <p>BNE</p>
                    <p>email@email.com</p>
                </section>
            </div>
        </div>
    );
}