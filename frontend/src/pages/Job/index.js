import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './styles.css'

import api from '../../services/api';


export default function New() {
    const {id} = useParams();
    const [job, setJob] = useState([]);

    useEffect(() => {
        api.get(`/jobs/view/${id}`, {
        }).then(response => {
            setJob(response.data);
        })
    }, []);

    return (
        <div className="new-job-container">
            <div className="content">
                <section>
                    <h1>Job Finder</h1>
                    <Link className="link" to="/">
                        Voltar para home
                    </Link>
                </section>
                <section>
                    <h2>{job.title}</h2>
                <p>{job.description}</p>
                    <i>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(job.salary)}</i>
                    <p>{job.company}</p>
                    <p>{job.email}</p>
                </section>
            </div>
        </div>
    );
}