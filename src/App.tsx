import { Provider } from "react-redux";
import "./styles.css";
import { Data } from "./components/Data";
import { store } from "./services/store";
import { TYPESCRIPT_LANG } from "./constants";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Trending repositories</h1>
        <Data language={TYPESCRIPT_LANG} />
      </div>
    </Provider>
  );
}
