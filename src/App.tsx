import Router from "./routes/Router";
import {ContextProvider} from "./core/context/contextProvider";

const App = () => (
        <ContextProvider>
            <Router/>
        </ContextProvider>
    );

export default App;
