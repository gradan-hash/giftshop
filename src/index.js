import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RegContextProvider } from "./context/regContext";
import { LogContextProvider } from "./context/logContext";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <RegContextProvider>
          <LogContextProvider>
            <App />
            <ToastContainer className="toast-container" />
          </LogContextProvider>
        </RegContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
