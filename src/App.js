import ImaginationCafe from './components/ImaginationCafe';
import MainTop from './components/MainTop';
import BottomInfo from './components/BottomInfo'
import ReservPlace from './components/ReservPlace';
import '../src/App.css'

function App() {
  return (
    <div>
      <MainTop/>

    {/*효과넣기*/}
      <div className='ImaginationWBottom'>  
        <ImaginationCafe />
        <BottomInfo/>
      </div>

      <ReservPlace/>
      
    </div>
  );
}

export default App;
