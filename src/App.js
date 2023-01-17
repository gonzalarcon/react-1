import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header className="Title" title="Galería de Imágenes con React"/>
      <div className='rounded img-fluid'>
        <Cards style={{ width: "300px" }} describe="Pokémon Legandario Tipo Fuego" title="Moltres" source='https://cdn.pixabay.com/photo/2016/08/05/15/26/team-1572486_1280.jpg'/>
        <Cards style={{ width: "300px" }} describe="Pokémon Legendario Tipo Hielo" title="Articuno" source='https://cdn.pixabay.com/photo/2016/08/05/15/24/team-1572483_1280.jpg'/>
        <Cards style={{ width: "300px" }} describe="Pokémon Legendario Tipo Eléctrico" title="Zapdos" source='https://cdn.pixabay.com/photo/2016/08/05/15/22/team-1572475_1280.jpg'/>
      </div>
      <Button variant='primary'> Elige tu Pokémon </Button>
      <Footer className="Pie" title="Elige tu destino con sabiduría"/>
    </div>
  );
}

export default App;
