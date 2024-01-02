import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const handleSeachSubmit = (e) => {

  console.log(e)

}


const App = ()=> {
  return (
    <div className="App">
      <Header title="Images Gallery"/>
      <Search handleSubmit={handleSeachSubmit} />
    </div>
  );
}

export default App;
