import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

import ErrorBoundary from './helpers/ErrorBoundary';
import Loading from './shared/Loading';
import NavigationRoutes from "./routes/NavigationRoutes";
import ErrorBoundaryAlert from './helpers/ErrorBoundaryAlert';
import CustomNavbar from "./shared/CustomNavbar";

const App = () => {
  return (
    <ErrorBoundary fallback={<ErrorBoundaryAlert />}>
      <Suspense fallback={<Loading />}>
        <Router>
          <CustomNavbar />
          <NavigationRoutes />
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
