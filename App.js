import './App.css';
import { useState } from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
 
function App() {
    
    const [ali, setAli]=useState(false);
    let counter = 1;
    const [step, setStep] = useState(1);
    function handlePrevious() {
      if (step > 1) {
        setStep(step - 1);
      } else {
        setStep(3);
      }
      counter = counter + 1;
    }
    function handleNext() {
      if (step < 3) {
        setStep(step + 1);
      } else {
        setStep(1);
      }
      counter = counter + 1;
    }
    if (counter === 10) {
      setAli = true;
    }
    return (
      <div className="steps">
      { ali&&<p className='my-2 fs-5'>On marta bosdingiz 👁️</p>}
        <div className='numbers'>
          <div className={`${step === 1 ? "active" : ""}`}>1</div>
          <div className={`${step === 2 ? "active" : ""}`}>2</div>
          <div className={`${step === 3 ? "active" : ""}`}>3</div>
        </div>
  
        <p className='message'>Step {step}:{messages[step - 1]}</p>
  
        <div className='buttons'>
          <button onClick={handlePrevious} style={{ backgroundColor: '#7950f2', color: '#fff' }}>Previous</button>
          <button onClick={handleNext} style={{ backgroundColor: '#7950f2', color: '#fff' }}>Next</button>
        </div>
      </div>
    );
  }
  

export default App;
