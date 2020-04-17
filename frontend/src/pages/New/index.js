
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

                <form >
                    <input
                        placeholder="Função"
                        onChange={e => e}
                    />
                    <textarea
                        placeholder="Descrição"
                        onChange={e => e}
                    />
                    <input
                        placeholder="Valor em reais"
                        onChange={e => e}
                    />
                    <input
                        placeholder="Empresa"
                        onChange={e => e}
                    />
                    <input
                        placeholder="E-mail"
                        onChange={e => e}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}