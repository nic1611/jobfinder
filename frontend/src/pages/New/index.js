
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api'

import './styles.css'

export default function New() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const job = {
            title,
            description,
            salary,
            company,
            email,
        };

        try {
            await api.post('jobs/add', job);

            history.push('/');
            alert(`Vaga cadastrada!!`);
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="new-job-container">
            <div className="content">
                <section>
                    <h1>Cadastrar nova vaga</h1>
                    <p>Descreva sua vaga detalhadamente.</p>
                    <Link className="link" to="/">
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Função"
                        name={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        name={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        name={salary}
                        onChange={e => setSalary(e.target.value)}
                    />
                    <input
                        placeholder="Empresa"
                        name={company}
                        onChange={e => setCompany(e.target.value)}
                    />
                    <input
                        placeholder="E-mail"
                        name={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}