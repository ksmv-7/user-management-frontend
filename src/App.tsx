import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RoutesWrapper } from './components/wrappers/RoutesWrapper';
import { GlobalStyles } from './components/ui/common/GlobalStyles';
import { Toaster } from 'react-hot-toast';
import { SelectedUserProvider } from './context/user/UserContext';

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <SelectedUserProvider>
          <GlobalStyles />
          <Toaster />
          <RoutesWrapper />
        </SelectedUserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
