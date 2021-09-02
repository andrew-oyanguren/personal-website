import { Suspense } from 'react';
import Layout from './components/Layout/Layout';
import Routes from "./routes/Routes";

function App() {
  return (
    <Suspense fallback="...loading">
      <Layout>
        <Routes />
      </Layout>
    </Suspense>
  );
}

export default App;
