import './App.css'
import Navbar from './components/Navbar'
import Models from './components/Models'
import Banner from './components/Banner'
import Footer from './components/Footer'
import { Suspense } from 'react'

const getModels = async () =>{
  const res = await fetch('/public/models.json')
  return res.json();
}


function App() {
  const modelPromise = getModels();
  
  return (
    <>
     <Navbar></Navbar>
     
     <Banner></Banner>

     <Suspense>
     <Models modelPromise={modelPromise}></Models>
     </Suspense>

     <Footer></Footer>
    </>
  )
}

export default App
