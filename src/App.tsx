import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RoutesWrapper } from './components/wrappers/RouterWrapper';
import { GlobalStyles } from './components/ui/common/GlobalStyles';
import { Toaster } from 'react-hot-toast';

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Toaster />
        <RoutesWrapper />
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
