import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <div className="app">

      {/* Sidebar Component */}
      <Sidebar />
      {/* Feed Component */}
      <Feed/>
    </div>
  );
}

export default App;
