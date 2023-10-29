import logo from './logo.svg';
import './App.css';
import Rating from './Rating';
import "antd/dist/antd.css";
import InteractiveRating from './InteractiveRating';


function App() {
  return (<div>
    {/* <Rating value={3}/>
    <Rating value={3.1}/>
    <Rating value={3.25}/>
    <Rating value={3.5}/>
    <Rating value={3.74}/>
    <Rating value={3.75}/>
    <Rating value={4}/> */}
    <InteractiveRating/>
    </div>
  );
}

export default App;
