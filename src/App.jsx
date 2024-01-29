import { useState } from 'react'
import { useCurrencyInfo } from './hooks/useCurrencyInfo'
import {InputBox} from './components/InputBox'

function App() {

const [amount, setAmount] = useState(0)
const [convertedAmount, setConvertedAmount] = useState(0)
const [from, setFrom] = useState("usd")
const [to, setTo] = useState("inr")

  const currencyInfo = useCurrencyInfo(from)
  //console.log("currencyInfo:", currencyInfo)

  const options = Object.keys(currencyInfo)
  //console.log("options:", options)

  const swap = () => {
    setTo(from)
    setFrom(to)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
    console.log(currencyInfo[to])
  }


  const BackgroundImage = "https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"


  return (
    <>
      <h1 className="text-3xl font-bold transition duration-500 text-center text-black bg-[#FC6736] p-4 mx-4 shadow-md border rounded-lg mt-4">Currency Converter App</h1>
      <div
        className="w-[90vw] h-[80vh] ml-[5vw] mt-10 flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${BackgroundImage}')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount= {amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => {
                    setFrom(currency)
                  }}
                  onAmountChange={(amount) => 
                    setAmount(amount)
                  }
                  selectCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-[#435585] hover:text-lg hover:shadow-xl hover:rounded hover:transition duration-100"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  selectCurrency={to}
                  onCurrencyChange={(currency) => {
                    setTo(currency)
                  }}
                  onAmountChange={(amount) => {
                    setConvertedAmount(amount)
                  }}
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-[#435585] hover:shadow-xl transition duration-100"
              onClick={convert}
              >
                Convert {from.toUpperCase()} To {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
