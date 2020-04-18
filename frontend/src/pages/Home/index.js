import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Home() {
    const [jobs, setJobs] = useState([]);
    const [query, setQuery] = useState([]);

    useEffect(() => {
        api.get('/', {
            params:{job: query}
        }).then(response => {
            setJobs(response.data);
        })
    }, [query]);


    return (
        <div>
            <div className="menu">
                <h2>Jobfinder</h2>
                <Link className="link" to="/job/new"><p>Adicionar vaga</p></Link>
            </div>
            <div className="container search">
                <input
                    placeholder="Faça sua pesquisa"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                ></input>
            </div>
            <div className="container jobs">
                <ul>
                    {jobs.map(job => (
                        <li key={job.id}>
                            <h2>{job.title}</h2>
                            <b>{job.company}</b>
                            <Link className="link" to={`/job/${job.id}`}><p>Ir para vaga</p></Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}