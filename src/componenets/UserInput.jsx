export default function UserInput({ onChange, userInput }) {

  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input 
            type="number" 
            required 
            value={userInput.initialInvestment}
            onChange={(event) => onChange('initialInvestment', event.target.value)} 
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input 
            type="number" 
            required 
            value={userInput.annualInvestment}
            onChange={(event) => onChange('annualInvestment', event.target.value)} 
          />
        </div>
        <div>
          <label>Expected Return (percentage)</label>
          <input 
            type="number" 
            required 
            value={userInput.expectedReturn}
            onChange={(event) => onChange('expectedReturn', event.target.value)}   
          />
        </div>
        <div>
          <label>Duration (years)</label>
          <input 
            type="number" 
            required 
            value={userInput.duration}
            onChange={(event) => onChange('duration', event.target.value)}
          />
        </div>
      </div>
    </section>
  );
}