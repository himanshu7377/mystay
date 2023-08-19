import {Routes,Route} from 'react-router-dom'
import { lazy,Suspense } from 'react';
import LoadingSkeleton from './Components/LoadingSkeleton';

const Home=lazy(()=>import('./pages/home'))
const NotFound=lazy(()=>import('./pages/NotFound'))

function App() {
  return (
    <Suspense fallback={<LoadingSkeleton/>}>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </Suspense>
    
  );
}

export default App;
