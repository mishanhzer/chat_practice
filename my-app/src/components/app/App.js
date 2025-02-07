import AppHeader from '../appHeader/AppHeader';
import SendMessageForm from '../Form/SendMessageForm';
import MessageList from '../MessageList/MessageList';

import './App.scss';

const App = () => {
  return (
    <div className="App">
        <AppHeader />
        <MessageList />
        <SendMessageForm/>
    </div>
  );
}

export default App;
