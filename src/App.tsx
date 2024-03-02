import AnalogClock from "./components/AnalogClock";
import "./App.css";

function App() {
  return (
    <div className="previews-container">
      <div className="preview">
        <h1>Default (no props):</h1>
        <AnalogClock />

        <pre>
          <code>{`<AnalogClock />`}</code>
        </pre>
      </div>

      <div className="preview">
        <h1>Dark:</h1>
        <AnalogClock
          whiteNumbers
          backgroundColor="black"
          handBaseColor="white"
          handColor={{ hour: "white", minute: "white", second: "tomato" }}
        />
        <pre>
          <code>
            {`<AnalogClock 
        whiteNumbers 
        backgroundColor="black" 
        handBaseColor="white"
        handColor={{ 
          hour: "white", 
          minute: "white", 
          second: "tomato" 
        }} 
/>`}
          </code>
        </pre>
      </div>

      <div className="preview">
        <h1>Static with no second hand:</h1>
        <AnalogClock
          staticDate={new Date(2022, 0, 1, 12, 15, 0)}
          showSecondHand={false}
        />
        <pre>
          <code>
            {`<AnalogClock 
        staticDate={new Date(2022, 0, 1, 12, 15, 0)}
        showSecondHand={false}
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default App;
