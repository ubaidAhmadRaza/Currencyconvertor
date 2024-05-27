import { useState,useEffect } from 'react'

import './App.css'
import Input from './Components/Input';
import useCurrencyInfo from './Hooks/currency';
import { ThemeProvider } from './Context/darktheme';
import ThemeBtn from './Components/Themebutton';

function App() {
  const [from, setfrom] = useState('usd')
  const [to, setto] = useState('pkr')
  const [amount, setamount] = useState(1)
  const [key, setKey] = useState(Date.now()); // Generate a new key on each render
  const info = useCurrencyInfo(from, key);
  const keys=Object.keys(info)
  console.log(keys,info)
  const [converted, setconverted] = useState(0)
  const [thememode, setthememode] = useState("light")
  const lighttheme=()=>{

    setthememode("light")
  }
  const darktheme=()=>{

    setthememode("dark")
  }
  const convert = () => {
    setconverted(amount * info[to])
  }


  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(thememode)
    
  }, [thememode])
  

  const swap = () => {
    setfrom(to)
    setto(from)
    setconverted(amount)
    setamount(converted)
 
  }

  return (<ThemeProvider value={{thememode, lighttheme, darktheme}}>
    <div
      className="h-screen w-screen grid  mx-auto max-h-screen   justify-center  items-center bg-cover bg-no-repeat dark:bg-gray-800"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')`,
      }}
    >
    
                 
              
      <div className="   sm:col-span-4  justify-center my-4 px-7 mx-auto">
        <div className=" mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm justify-center bg-white/30 dark:bg-gray-700">
        <ThemeBtn />
         <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className=" mb-1">
              <Input
                label="From"
                amount={amount}
                currencyoption={keys}
                onAmountChange={(amount) => setamount(amount)}
                selectCurrency={from}
                oncurrenychange={(currency) => setfrom(currency)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 dark:bg-gray-600 dark:border-gray-400 dark:text-gray-200"
              >
                swap
              </button>
            </div>
            <div className=" mt-1 justify-center mb-4">
              <Input
                label="To"
                amount={converted}
                currencyoption={keys}
                onAmountChange={(amount) => setconverted(amount)}
                selectCurrency={to}
                oncurrenychange={(currency) => setto(currency)}
              />
            </div>
            <button
              type="submit"
              className=" bg-blue-600 text-white px-4 py-3 rounded-lg dark:bg-gray-600 dark:text-gray-200"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
  
                    }

export default App
