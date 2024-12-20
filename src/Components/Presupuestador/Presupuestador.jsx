import { useState } from 'react';
import CheckBox from './CheckBox';
import AutoResizingInput from './AutoResizingInput';


function Presupuestador() {
    const [color, setColor] = useState('No color');
    const [count, setCount] = useState(0);
  
    function handleColor(color) {
      setColor(color);
      console.log(color);
      return;
    }
  
    function Divisor({ nombre }) {
      return (
        <>
          <div className="divisor">
            <div className="nombreSeccion">
              <p>{nombre}</p>
            </div>
            <div className="line">
              <hr />
            </div>
          </div>
        </>
      );
    }
  
    function InputText({ placeholder, type }) {
      return (
        <input className="input-text" type={type} placeholder={placeholder} />
      );
    }
  
    return (
      <div className="presupuestador">
        <div className="header">
          <p>Nuevo Presupuesto</p>
        </div>
        <div className="titulo">
          <InputText placeholder={'Titulo de presupuesto...'} />
          <div className="paleta-colores">
            <p>Asignarle un color</p>
            <button className="circle red" onClick={() => handleColor('red')} />
            <button
              className="circle yellow"
              onClick={() => handleColor('yellow')}
            />
            <button
              className="circle green"
              onClick={() => handleColor('green')}
            />
            <button className="circle cyan" onClick={() => handleColor('cyan')} />
            <button className="circle blue" onClick={() => handleColor('blue')} />
            <button
              className="circle purple"
              onClick={() => handleColor('purple')}
            />
          </div>
  
          <div className="seccion descripcion">
            <Divisor nombre={'Descripción'} type={'text'} />
            <div className="inputDetalle">
              <div className="opciones">
                <div className="opcionesEstilo">
                  <button className="opcion bold">
                    <p>B</p>
                  </button>
                  <button className="opcion italic">
                    <p>I</p>
                  </button>
                  <button className="opcion sub">
                    <p>S</p>
                  </button>
                </div>
                <div className="opcionesAlineacion">
                  <button className="opcion left">
                    <p>1</p>
                  </button>
                  <button className="opcion center">
                    <p>2</p>
                  </button>
                  <button className="opcion right">
                    <p>3</p>
                  </button>
                  <button className="opcion fill">
                    <p>4</p>
                  </button>
                  <button className="opcion list">
                    <p>5</p>
                  </button>
                </div>
              </div>
              <div className="inputText">
                <input
                  className="inputTexto"
                  type="text"
                  placeholder="Detalle el presupuesto aquí..."
                />
              </div>
            </div>
          </div>
          <div className="seccion destinatario">
            <Divisor nombre={'Destinatario'} />
            <InputText placeholder={'Nombre'} type={'text'} />
            <InputText placeholder={'Dirección de trabajo'} type={'text'} />
            <InputText placeholder={'Teléfono'} type={'text'} />
            <InputText placeholder={'Email'} type={'email'} />
          </div>
          <div className="seccion tipo-trabajo">
            <Divisor nombre={'Tipo de trabajo'} />
            <CheckBox />
          </div>
          <div className="seccion incluyeSection">
            <Divisor nombre={'Qué incluye'} />
            <AutoResizingInput />
          </div>
          <div className="seccion noIncluyeSection">
            <Divisor nombre={'No incluye'} />
            <AutoResizingInput />
          </div>
          <div className='seccion GarantiaSection'>
            <Divisor nombre={'Detalle de Garantia'} />
            <input className="inputGarantia input-text" type='text' placeholder='Detalle qué tiene garantía y qué no la tiene.' />
          </div>
          <div className='seccion VencimientoSection'>
            <Divisor nombre={'Fecha de Vencimiento de Presupuesto'} />
            <input className='inputVencimiento input-text' type='date'/>
          </div>
          <div className='seccion ImagenesSection'>
            <Divisor nombre={'Referencias Anteriores'} />
            
          </div>
        </div>
      </div>
    );

}

export default Presupuestador;