import { useEffect, useState } from 'react'
import './App.css'
import cube from './assets/images/icon-dice.svg'
import separator from './assets/images/pattern-divider-desktop.svg'
import Loading from './components/Loading'

function App() {
  const [advice, setAdvice] = useState()
  const [number, setNumber] = useState()
  const [loading, setLoading] = useState(false)

  const getAdvice = async () => {
    setLoading(true)
    const data = await fetch('https://api.adviceslip.com/advice')
    const respons = await data.json()
    setAdvice(respons.slip.advice)
    setNumber(respons.slip.id)
    setTimeout(() => setLoading(false), 1000)
  }

  useEffect(() => {
    getAdvice()
    setLoading(false)
  }, [])

  return (
    <div className="App">
      <div className='bg-blue-300 h-screen flex items-center justify-center'>
        <div className="max-w-xl rounded-xl bg-blue-200 py-10 px-10 text-center shadow-2xl relative">
          {loading ? <Loading /> : <><div className="text-green text-xs uppercase font-extrabold tracking-widestXL">ADVICE #{number}</div>
          <div className="py-6 text-cyan text-3xl font-extrabold">{advice}</div>
          <div className="w-full mb-5">
            <img className="mx-auto" src={separator} alt="" />
          </div></>}
          
          <button onClick={() => getAdvice()} className={`${loading ? 'blur' : null} hover:shadow-shadow absolute -bottom-8 right-2/4 translate-x-2/4 h-16 w-16 rounded-full bg-green flex items-center justify-center`}>
            <img src={cube} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App