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
import { useState } from 'react';

function App() {
  const [ input, setInput ] = useState("");

  const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    console.log(res);
  }

  return (
    <div className="App">
      <div className="sideBar">
          <div className="upperSide">
            <div className="upperSideTop"><img src={Logo} alt="Logo" className="logo" /><span className="brand">CapyLove</span></div>
            <button className="midBtn"><img src={addBtn} alt="addBtn" className="addBtn" />New Chat</button>
            <div className="upperSideBottom">
              <button className="query"><img src={msgIcon} alt="query" />What's Your Hobby?</button>
              <button className="query"><img src={msgIcon} alt="query" />How to use an API?</button>
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
            <div className="chat">
              <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusamus molestias vitae laborum officia natus veritatis veniam eum id animi! Voluptates magni voluptatibus, numquam quidem dolorum dolorem ducimus hic quibusdam?</p>
            </div>
            <div className="chat bot">
              <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, nihil veniam recusandae, eos obcaecati sapiente impedit libero similique facilis maxime numquam! Nihil eius iusto quaerat fugiat quam voluptatum praesentium dicta cumque. Quidem obcaecati aperiam assumenda vitae quo quam? Iusto voluptas suscipit, a atque ex praesentium? Labore voluptas excepturi deleniti, nulla tenetur consequuntur maiores obcaecati porro consectetur provident, facilis voluptatem reprehenderit. At, eius animi unde dolor accusantium illo, sit quos in fugit voluptatibus, voluptatum atque quae labore? Deserunt, dolore veniam. Vitae ea mollitia quae nemo tempore aliquam, odit ad rerum sint enim quo repellendus corrupti sed itaque earum ipsum suscipit molestias!</p>
            </div>
        </div>
        <div className="chatFooter">
            <div className="inp">
              <input type="text" placeholder='Send a message' value={input} onChange={(e) => {setInput(e.target.value)}}/><button className="send" onClick={handleSend}><img src={sendBtn} alt="sendBtn" /></button>
            </div>
          </div> 
      </div>
    </div>
  );
}

export default App;
