import './App.css';
import ImaginationCafe from './components/ImaginationCafe';
import MainTop from './components/MainTop';
import BottomInfo from './components/BottomInfo'
import ReservPlace from './components/ReservPlace';

function App() {
  return (
    <div>
      <MainTop/>

    {/*효과넣기*/}
      <div className='ReservPAll'>  
        <ImaginationCafe />
        <ReservPlace/>
      </div>
      
    </div>
  );
}

export default App;
