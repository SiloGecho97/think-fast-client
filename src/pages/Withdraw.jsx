import React from 'react'
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowCircleDown,
} from 'react-icons/fa'
import Header from '../partials/Header'

const Withdraw = () => {
  return (
    <div>
      <Header />
      <div className="flex lg:flex-row flex-col w-full">
        <div className="px-4 md:px-20 w-full ">
          <div className="relative my-8 bg-indigo-800 px-8 pt-10 h-64 text-white rounded-2xl w-full max-w-xl ">
            <div className="flex flex-col">
              <span className="text-xl">Your Balance</span>
              <span className="text-5xl font-bold">126.12 ETB</span>
              <div className="absolute mb-4 bottom-4 right-4 flex">
                <span className="bg-indigo-200 text-indigo-900 px-4 py-3 mx-4 rounded-full flex items-center">
                  Transfer <FaArrowAltCircleRight className="ml-4" />
                </span>
                <span className="bg-indigo-200 text-indigo-900 px-4 py-3 mx-4 rounded-full flex items-center">
                  Withdraw <FaArrowAltCircleLeft className="ml-4" />
                </span>
              </div>
            </div>
          </div>
          <div className="my-4 w-full">
            <h4 className="font-bold">Latest Transactions</h4>
            <div className="flex items-center my-4">
              <FaArrowCircleDown className="text-blue-500 text-4xl" />
              <div className="mx-4">
                <h6 className="font-bold">25 Mobile Card </h6>
                <p className="text-sm">Withdraw 50 etb mobile card</p>
              </div>
              <span className="text-yellow-600 mx-4">50ETB</span>
            </div>
            <div className="flex items-center my-4">
              <FaArrowCircleDown className="text-blue-500 text-4xl" />
              <div className="mx-4">
                <h6 className="font-bold">25 Mobile Card </h6>
                <p className="text-sm">Withdraw 50 etb mobile card</p>
              </div>
              <span className="text-yellow-600 mx-4">100ETB</span>
            </div>
            <div className="flex items-center my-4">
              <FaArrowCircleDown className="text-blue-500 text-4xl" />
              <div className="mx-4">
                <h6 className="font-bold">25 Mobile Card </h6>
                <p className="text-sm">Withdraw 50 etb mobile card</p>
              </div>
              <span className="text-yellow-600 mx-4">50ETB</span>
            </div>
          </div>
        </div>
        <div className="flex w-full my-10">
          <div className="max-w-xl w-full">
            <h4 className="mb-4">Withdrawal Options</h4>
            <div className="card m-4">
              <div class="card-body">
                <h2 class="card-title">Exchange to mobile card</h2>
                <div>
                  <button className="btn m-4">Select 50 ETB</button>
                  <button className="btn m-4">Select 100 ETB</button>
                </div>
              </div>
            </div>
            <div className="card m-4">
              <div class="card-body">
                <h2 class="card-title">Transfer</h2>
                <div>
                  <input
                    type="text"
                    placeholder="09316441**"
                    class="input w-full max-w-xs border lg:mx-4 input-bordered"
                  ></input>
                  <button className="btn my-4">Transfer</button>
                </div>
              </div>
            </div>
            <div className="card m-4">
              <div class="card-body">
                <h2 class="card-title">Cash out</h2>
                <div>
                  <input
                    type="text"
                    placeholder="50"
                    class="input w-full max-w-xs border lg:mx-4 input-bordered"
                  ></input>
                  <button className="btn my-4">Cashout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Withdraw
