import Aside from './Components/Aside/Aside';
import './index.css';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <div className='flex flex-row'>
        <Aside />
        <div className='flex-1 p-6'>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
