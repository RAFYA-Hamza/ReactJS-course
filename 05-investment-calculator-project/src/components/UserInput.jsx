export default function UserInput({ onChangeInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            value={userInput.initialInvestment}
            onChange={(event) => {
              onChangeInput("initialInvestment", event.target.value);
            }}
            type="number"
            required
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            value={userInput.annualInvestment}
            onChange={(event) => {
              onChangeInput("annualInvestment", event.target.value);
            }}
            type="number"
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            value={userInput.annualInvestment}
            onChange={(event) => {
              onChangeInput("expectedReturn", event.target.value);
            }}
            type="number"
            required
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            value={userInput.annualInvestment}
            onChange={(event) => {
              onChangeInput("duration", event.target.value);
            }}
            type="number"
            required
          />
        </p>
      </div>
    </section>
  );
}
