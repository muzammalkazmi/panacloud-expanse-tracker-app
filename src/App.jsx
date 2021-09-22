
import './App.css';
import Header from './components/Header.jsx'
import Balance from './components/Balance'
import AccountSummary from './components/AccountSummary'
import History from './components/History'
import AddTransaction from './components/AddTransaction'
//import globalContext
// import {GlobalContext} from './context/GlobalContext';
//import GlobalProvider 
import {GlobalProvider} from './context/GlobalContext'
function App() {
  return (
    
    <div className="app">
      <GlobalProvider>
      <Header/>
      <Balance/>
      <AccountSummary/><hr/>
      <History/><hr/>
      <AddTransaction/><hr/>
      </GlobalProvider>
      
    </div>
  );
}

export default App;
