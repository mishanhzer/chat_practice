import AppHeader from '../appHeader/AppHeader';
import SendMessageForm from '../SendMessageForm/SendMessageForm';
import MessageList from '../MessageList/MessageList';

import './App.scss';

const App = () => {
  return (
    <div className="App">
        <AppHeader />
        <MessageList />
        <SendMessageForm />
    </div>
  );
}

export default App;
