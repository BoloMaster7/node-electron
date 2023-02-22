import React from 'react';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';

const App =() => {

      const [status, setStatus] = useState('off');
      const [time, setTime] = useState(null);
      const [timer, setTimer] = useState(null);

      let timeleft = 1200;
      let minutes = parseInt(timeleft / 60, 10);
      let seconds = parseInt(timeleft % 60, 10);
     

    
      const startTimer = () => {
        setTime(timeleft);
        setStatus('work');
        setTimer(setInterval(() => {
          setTime(time => time -1);
        }));
  }

            useEffect(() => {
          if (timeleft=== 0){
            if(status === 'work'){
            setStatus('rest'),
            setTime(20)
          
            }else (status === 'rest')
            setStatus('work'),
            setTime(timeleft)       
           }
  })
  
      return (
      <div>
        <h1>Protect your eyes</h1>
        { status === 'off' && (
          <div>
            <p>According to optometrists in order to save your eyes, you should follow the 20/20/20. It means you should to rest your eyes every 20 minutes for 20 seconds by looking more than 20 feet away.</p>
            <p>This app will help you track your time and inform you when it's time to rest.</p>
          </div>
        )}
        { status === 'work' && (<img src="./images/work.png" />)}
        { status === 'rest' && (<img src="./images/rest.png" />)}
        { status !== 'off' && (
          <div className="timer">
            {minutes}:{seconds}
          </div>
        )}
        { status === 'off' && (<button className="btn" onClick={startTimer}>Start</button>)}
        { status !== 'off' && (<button className="btn">Stop</button>)}
        <button className="btn btn-close">X</button>
      </div>
    );
  }


render(<App />, document.querySelector('#app'));
