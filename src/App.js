import './App.css';
import Content from './Components/Content';
import Display from './Components/Display';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <div className="myBG">
      <NavigationBar />
      <Display job="FRONTEND DEVELOPER" code="MongoDB, Express, React JS, & Node JS"/>
      <Content name="M RIZKI"/>
    </div>
  );
}

export default App;
