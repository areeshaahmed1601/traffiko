import '../styles/globals.css';
import '../testimonialSlider.css';
import {QueryClient,QueryClientProvider} from '@tenstack/react-query';

const queryClient=new QueryClient({
  defaultOptions:{
    queries:{
      cacheTime:1*60*60*1000,
      staleTime:1*60*60*1000
    }
  }
});

function MyApp({ Component, pageProps }) {
  return(
 <QueryClientProvider client={queryClient}>
      

 <Component {...pageProps} />;
   </QueryClientProvider>
 
  ) 
}

export default MyApp;
