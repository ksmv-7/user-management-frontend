import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        Hello
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
