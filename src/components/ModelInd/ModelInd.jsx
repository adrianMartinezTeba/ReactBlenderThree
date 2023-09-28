import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import modelos from '../../modelosGlb.js'; // Importa tu lista de modelos desde el archivo correspondiente
import ModelViewer from '../ModelViewer/ModelViewer.jsx';
import './ModelInd.scss'
const ModelInd = () => {
  const { nombre } = useParams();

  // Busca el modelo correspondiente en tu lista de modelos
  const modelo = modelos.find((modelo) => modelo.nombre === nombre);

  if (!modelo) {
    return <div>Modelo no encontrado</div>;
  }
useEffect(()=>{
console.log(modelo);
},[modelo])
  return (
    <div className='model-ind-container'>
     <ModelViewer url={modelo.urlInd} escala={modelo.escalaInd} ind={true} />
     <div className='model-details'>
       <h2>{modelo.nombre}</h2>
       <p>{modelo.descripcion}</p>
     </div>
    </div>
  );
}

export default ModelInd;
