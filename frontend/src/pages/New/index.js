import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import camera from '../../assets/camera.svg';
import './styles.css';

export default function New({ history }){
    const [image, setImage] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const preview = useMemo(() => {
        return image ? URL.createObjectURL(image) : null;
    },[image])

    async function handleSubmit(event){
        event.preventDefault();
        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('image', image);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);
        
        await api.post('/spots', data, {
            headers: { user_id }
        })

        history.push('/dashboard');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label id="image"
             style={{backgroundImage: `url(${preview})`}}
             className={image ? 'has-image' : ''}
             >
                <input type='file' onChange={event => setImage(event.target.files[0])} />
                <img src={camera} alt='Select image'/>
            </label>

           <label htmlFor='company'>Empresa *</label> 
           <input
           id='company'
           placeholder='Digite o nome de sua empresa'
           value={company}
           onChange={event => setCompany(event.target.value)}
           />

           <label htmlFor='techs'>Tecnologias * <span>(separadas por vírgula)</span></label> 
           <input
           id='techs'
           placeholder='Quais tecnologias sua empresa usa?'
           value={techs}
           onChange={event => setTechs(event.target.value)}
           />

           <label htmlFor='price'>Preço * <span>(Em branco para gratuito)</span></label> 
           <input
           id='price'
           placeholder='Qual o preço da diária?'
           value={price}
           onChange={event => setPrice(event.target.value)}
           />

           <button className='btn' type="submit">Cadastrar</button>
        </form>
    )
}