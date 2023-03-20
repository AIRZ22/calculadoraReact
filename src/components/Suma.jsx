import Proptypes from 'prop-types';
import './Suma.css';

const Suma = (params) => {
  
    return (
        <div className="sumatoria">
            la suma de dos valores a y b es { params.a + params.b };
        </div>
    )   
}

export default Suma;