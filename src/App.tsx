import AnalogClock from "./components/AnalogClock";
import "./App.css";

function App() {
  return (
    <>
      <h2 className="page-title">
        Visit{" "}
        <a href="https://github.com/hoseinhamzei/react-clock">
          The Github Repo
        </a>{" "}
        for instructions
      </h2>
      <div className="previews-container">
        <div className="preview">
          <h2>Default (no props):</h2>
          <AnalogClock />

          <pre>
            <code>{`<AnalogClock />`}</code>
          </pre>
        </div>

        <div className="preview">
          <h2>Dark:</h2>
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
          <h2>Static with no second hand:</h2>
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

        <div className="preview">
          <h2>Dots Clock Face:</h2>
          <AnalogClock
            numbersType="dots"
          />
          <pre>
            <code>
              {`<AnalogClock 
        numbersType="dots"
/>`}
            </code>
          </pre>
        </div>

        <div className="preview">
          <h2>Square Numbers Clock Face:</h2>
          <AnalogClock
            square
            numbersType="numbers"
          />
          <pre>
            <code>
              {`<AnalogClock 
        square
        numbersType="numbers"
/>`}
            </code>
          </pre>
        </div>

        <div className="preview">
          <h2>Lines Clock Face With No Border:</h2>
          <AnalogClock
            numbersType="lines"
            showBorder={false}
          />
          <pre>
            <code>
              {`<AnalogClock 
        numbersType="lines"
        showBorder={false}
/>`}
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}

export default App;
