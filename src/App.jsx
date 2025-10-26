
import './App.css'
import Heading from './components/Heading'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <header className='w-11/12 mx-auto py-4'>
        <Navbar />
      </header>
      <section>
        <Heading>Kitchen Room</Heading>
      </section>
    </>
  )
}

export default App
