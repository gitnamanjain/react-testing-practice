
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Form from './Form';


function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Form></Form>
      </ErrorBoundary>

    </div>
  );
}

export default App;
