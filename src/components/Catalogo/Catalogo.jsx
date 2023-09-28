import React from 'react';
import { Link } from 'react-router-dom';
import modelos from '../../modelosGlb.js';
import ModelViewer from '../ModelViewer/ModelViewer';
import './Catalogo.scss';
const Catalogo = ({}) => {
  return (
    <div className='catalogo-container'>
      <h1>Catalogo</h1>
      <div className='models-container'>
        {modelos.map((modelo) => (
            <div className='modelo-catalogo' key={modelo.nombre}>
              <ModelViewer url={modelo.urlCatalogo} escala={modelo.escalaCat} />
              <Link to={`/modelInd/${modelo.nombre}`} key={modelo.nombre}>Ver detalles</Link>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
