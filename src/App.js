import './App.css';
import Logo from './assets/capybaraLogo.png';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/capybara.png';
import { sendMsgToOpenAI } from './openai';
import { useEffect, useRef, useState } from 'react';

function App() {
  const msgEnd = useRef(null);

  const [ input, setInput ] = useState("");
  const [ messages, setMessages ] = useState([
    {
      text: "Hi!",
      isBot: true,
    }
  ]);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  },[messages]);

  const handleSend = async () => {
    const text = input;
    setInput('');
    setMessages([
      ...messages,
      { text, isBot: false }
    ]);

    const res = await sendMsgToOpenAI(text);
    setMessages([
      ...messages, 
      { text, isBot: false },
      { text: res, isBot: true}
    ]);
  }

  const handleEnter = async (e) => {
    if(e.key === 'Enter') await handleSend();
  }

  const handleQuery = async (e) => {
    const text = e.target.value;
    setMessages([
      ...messages,
      { text, isBot: false }
    ]);

    const res = await sendMsgToOpenAI(text);
    setMessages([
      ...messages, 
      { text, isBot: false },
      { text: res, isBot: true}
    ]);
  }

  return (
    <div className="App">
      <div className="sideBar">
          <div className="upperSide">
            <div className="upperSideTop"><img src={Logo} alt="Logo" className="logo" /><span className="brand">CapyLove</span></div>
            <button className="midBtn" onClick={() => {window.location.reload()}}><img src={addBtn} alt="addBtn" className="addBtn" />New Chat</button>
            <div className="upperSideBottom">
              <button className="query" onClick={handleQuery} value={"What's Your Hobby?"}><img src={msgIcon} alt="query" />What's Your Hobby?</button>
              <button className="query" onClick={handleQuery} value={"Hi!"}><img src={msgIcon} alt="query" />Hi!</button>
            </div>
          </div>
          <div className="lowerSide">
              <div className="listItems"><img src={home} alt="" className="listItemsImg" />Home</div>
              <div className="listItems"><img src={saved} alt="" className="listItemsImg" />Saved</div>
              <div className="listItems"><img src={rocket} alt="" className="listItemsImg" />Upgrade to Pro</div>
            </div>
      </div>

      <div className='main'>
        <div className="chats">
            {messages.map((message, i) => 
              <div key={i} className={message.isBot ? "chat bot" : "chat"}>
                <img className='chatImg' src={userIcon} alt="" /><p className="txt">{ message.text }</p>
              </div>
            )}
            <div ref={msgEnd}/>
        </div>
        <div className="chatFooter">
            <div className="inp">
              <input type="text" placeholder='Send a message' value={input} onKeyDown={handleEnter} onChange={(e) => {setInput(e.target.value)}}/><button className="send" onClick={handleSend}><img src={sendBtn} alt="sendBtn" /></button>
            </div>
          </div> 
      </div>
    </div>
  );
}

export default App;
