import { Suspense } from 'react';
import Routes from "./routes/Routes";

function App() {
  return (
    <Suspense fallback="...loading">
      <Routes />
    </Suspense>
  );
}

export default App;
