
import ImaginationCafe from './components/ImaginationCafe';
import MainTop from './components/MainTop';
import BottomInfo from './components/BottomInfo'
import ReservPlace from './components/ReservPlace';

function App() {
  return (
    <div>
      <MainTop/>

    {/*효과넣기*/}
      <div>  
        <ImaginationCafe />
        <BottomInfo/>
      </div>

      <ReservPlace/>
      
    </div>
  );
}

export default App;
