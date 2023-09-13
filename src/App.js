import {Routes,Route} from 'react-router-dom'
import { lazy,Suspense } from 'react';
import LoadingSkeleton from './Components/LoadingSkeleton';
import {QueryClient,QueryClientProvider} from 'react-query'


const Home=lazy(()=>import('./pages/Home'))
const NotFound=lazy(()=>import('./pages/NotFound'))
const SingleHotel=lazy(()=>import('./pages/SingleHotel'))
const queryClient=new QueryClient()

function App() {
  return (
    <Suspense fallback={<LoadingSkeleton/>}>
      <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/hotel/:slug' element={<SingleHotel/>}/>
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </QueryClientProvider>
    </Suspense>
    
  );
}

export default App;
