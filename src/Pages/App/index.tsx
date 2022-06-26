import {Component} from 'react'
import './app.scss'

import FriendList from '../../Components/FriendList'
import ChatList from '../../Components/ChatList'
import Chat from '../../Components/Chat'

class App extends Component
{
    render() {
        return(
            <div className="App flex flex-row">
                <ChatList className="chat-list basis-1/6 max-w-[17%] h-screen"/>
                <Chat className="chat basis-4/6 w-[66%] h-screen"/>
                <FriendList className="friend-list basis-1/6 max-w-[17%] h-screen h-screen"/>
            </div>
        );
    }
}

export default App;
