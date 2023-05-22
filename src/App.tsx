import AsyncAutocomplete from "./Presentation/AsyncAutocomplete";
import NormalAutocomplete from "./Presentation/NormalAutocomplete";

const App = () => {
  return (
    <div className="demo-container">
      <div className="column">
        <h2 className="divider">Async Autocomplete</h2>
        <p className="paragraph">
          This is an asynchronous autocomplete. It calls a callback function to
          retrieve the options list and displays a loading spinner until the
          data is fetched. The fetch request is triggered when the user focuses
          on the input.
        </p>
        <AsyncAutocomplete />
        <div className="stick-down">
          <h2 className="divider">Autocomplete Options</h2>
          <p className="paragraph">
            when the autocomplete input is near to the bottom of the page, the
            options dropdown will open on top of the input
          </p>
          <AsyncAutocomplete />
        </div>
      </div>
      <div className="column">
        <h2 className="divider">Normal Autocomplete</h2>
        <p className="paragraph">
          This is a normal autocomplete that takes a list of options and
          displays them accordingly.
        </p>
        <NormalAutocomplete />
      </div>
    </div>
  );
};

export default App;
