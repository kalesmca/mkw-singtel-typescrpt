import React from "react";
import "./app.css";
import Header from "./containers/layout/header";
import DashboardComponent from "./containers/dashboard/dashboardComponent";
import SpinnerComponent from "./common-components/spinner/spinnerComponent";
import { useSelector } from "react-redux";
import ToastComponent from "./common-components/toast/toastComponent";

const App = () => {
  const appConfigState = useSelector((State: any) => State.appConfig);
  return (
    <div className="app-container" data-testid="app">
      <div className="header-container" data-testid="header">
        <Header />
      </div>
      <ToastComponent />

      {appConfigState.showSpinner && (
        <div className="spinner-container">
          <SpinnerComponent />
        </div>
      )}

      <div
        className={
          appConfigState.showSpinner
            ? "body-container loading"
            : "body-container"
        }
        data-testid="body"
        style={{}}
      >
        <DashboardComponent />
      </div>
    </div>
  );
};

export default App;
