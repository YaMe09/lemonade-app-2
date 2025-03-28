import LemonadeLogo from '../assets/LemonadeLogo.png';
import 'bulma/css/bulma.min.css';
import { useNavigate } from 'react-router-dom';


function Forside() {
  const navigate = useNavigate();
 

  return (
    <div className="container is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      <a href="/" target="_blank" className="is-align-items-center">
        <img src={LemonadeLogo} className="forside" alt="LemonadeLogo" />
      </a>
      <h1 className="title is-1 has-text-weight-medium is-align-items-center" style={{ color: '#188151', textShadow: '#fad342 0 0 0.3em' }}> Lemonade Stand</h1>
      <div className="Køb">
        <button className="button is-large is-warning is-outlined is-inverted is-align-items-center my-3" onClick={() => navigate('/lemonade-stand')}>
          Velkommen
        </button>
      </div>
      <p className="is-size-4 is-align-items-center my-3 mx-5" style={{ color: '#188151' }}>
        Velkommen til Lemonade Stand! Her kan du købe den bedste lemonade i byen.
      </p>
    </div>
  );
}

export default Forside;