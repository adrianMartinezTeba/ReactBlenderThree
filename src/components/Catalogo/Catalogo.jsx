import React, { useEffect } from 'react';
import ModelViewer from '../ModelViewer/ModelViewer'; // Ajusta la ruta según tu estructura de carpetas
import modelos from '../../modelosGlb';
import './Catalogo.scss';

const Catalogo = () => {
  useEffect(() => {
    console.log(modelos);
  }, [])

  return (
    <div>
      <h1>Catalogo</h1>
      <div className='models-container'>
        {modelos.map((modelo) => (
          <div className='modelo-catalogo' key={modelo.nombre}>
            <ModelViewer url={modelo.url} escala={modelo.escala} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
