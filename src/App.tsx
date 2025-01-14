import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RoutesWrapper } from './components/wrappers/RouterWrapper';
import { GlobalStyles } from './components/ui/common/GlobalStyles';

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <RoutesWrapper />
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
