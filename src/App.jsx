
import { Suspense } from 'react';
import './App.css'
import Heading from './components/Heading'
import Navbar from './components/Navbar'
import OrderContainer from './components/OrderContainer';
import { ToastContainer } from 'react-toastify';

const loadOrders = () =>fetch("/orders.json").then(res => res.json());

function App() {
  const ordersPromise = loadOrders();
  
  return (
    <>
      <header className='w-11/12 mx-auto py-4'>
        <Navbar />
      </header>

      <section>
        <Heading>Kitchen Room</Heading>
      </section>

      <section>
        <Suspense fallback={`Loading. . . . ⏳`}>
          <OrderContainer promise={ordersPromise} />
        </Suspense>
      </section>

      <ToastContainer position='bottom-right' newestOnTop={true} theme='colored' hideProgressBar= {false} closeOnClick = {true} pauseOnHover draggable />
    </>
  )
}

export default App
