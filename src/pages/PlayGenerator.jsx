import { useEffect, useRef } from 'react';
import './PlayGenerator.css';

function PlayGenerator() {
  const isScriptInjected = useRef(false);

  function prepareGame() {
    if (!isScriptInjected.current) {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.innerHTML = "init_godot_game()";
      document.body.appendChild(script);
      isScriptInjected.current = true;
    }
  }

  useEffect(() => {
    prepareGame();
  }, []);

  return (
    <>
      <canvas id='canvas'>
        HTML5 canvas appears to be unsupported in the current browser.<br />
        Please try updating or use a different browser.
      </canvas>
      <div id='status'>
        <div id='status-progress' style={{display: 'none'}} onContextMenu={(event) => event.preventDefault()}><div id ='status-progress-inner'></div></div>
        <div id='status-indeterminate' style={{display: 'none'}} onContextMenu={(event) => event.preventDefault()}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div id='status-notice' className='godot' style={{display: 'none'}}></div>
      </div>

    </>
  )
}
export default PlayGenerator;