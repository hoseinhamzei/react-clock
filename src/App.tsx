import AnalogClock from "./components/AnalogClock/AnalogClock";
import "./App.css";
import customBg from "./assets/custom-bg.png";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header />
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
          <AnalogClock numbersType="dots" />
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
          <AnalogClock square numbersType="numbers" />
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
          <AnalogClock numbersType="lines" showBorder={false} />
          <pre>
            <code>
              {`<AnalogClock 
        numbersType="lines"
        showBorder={false}
/>`}
            </code>
          </pre>
        </div>

        <div className="preview">
          <h2>Roman face with custom hands:</h2>
          <AnalogClock
            numbersType="roman"
            handLength={{
              hour: "40px",
              minute: "50px",
              second: "60px",
            }}
            handThickness={{
              hour: "5px",
              minute: "3px",
              second: "1px",
            }}
          />
          <pre>
            <code>
              {`<AnalogClock 
        numbersType="roman"
        handLength={{
          hour: "40px",
          minute: "50px",
          second: "60px",
        }}
        handThickness={{
          hour: "5px",
          minute: "3px",
          second: "1px",
        }}
/>`}
            </code>
          </pre>
        </div>

        <div className="preview">
          <h2>Custom Clock Face and Size:</h2>
          <AnalogClock customBg={customBg} size="300px" />

          <pre>
            <code>
              {`import customBg from "./assets/custom-bg.png";
            .
            .
            .
/*  It is recomended that the customBg be svg with
no padding however other image formats are
supported as well */

<AnalogClock customBg={customBg} size="250px" />`}
            </code>
          </pre>
        </div>

        <div className="preview">
          <h2>Custom Colors:</h2>
          <AnalogClock
            whiteNumbers
            backgroundColor="slateBlue"
            handBaseColor="cyan"
            borderColor="darkBlue"
            handColor={{
              hour: "white",
              minute: "white",
              second: "blue",
            }}
          />

          <pre>
            <code>
            {`<AnalogClock 
        whiteNumbers
        backgroundColor="slateBlue"
        handBaseColor="cyan"
        borderColor="darkBlue"
        handColor={{
          hour: "white",
          minute: "white",
          second: "lightBlue",
        }}
/>`}
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}

export default App;
