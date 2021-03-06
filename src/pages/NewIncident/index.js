import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../service/api'
import './style.css';

import logoTag from '../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongToken = localStorage.getItem('#be_the_hero:ongToken');
  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {

      await api.post('incidents', data, {
        headers: {
          Authorization: 'Bearer ' + ongToken
        }
      });

      history.push('/profile');
    } catch (err) {
      alert('Erro no cadastrar caso, tente novamente');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoTag} alt="Be The Hero"/>
          
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar par home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição" 
            value={description}
            onChange={e => setDescription(e.target.value)}/>
          <input 
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}