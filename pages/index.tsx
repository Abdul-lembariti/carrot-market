import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20  px-20 grid  min-h-screen shadow-2xl flex-col space-y-5 ">
      <div className="bg-white p-7 rounded-2xl">
        <span className="font-bold text-3xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Gray Chair</span>
          <span className="font-bold">$4</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Gray Chair</span>
          <span className="font-bold">$4</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-bold">$7</span>
        </div>
        <button className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-3/4 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-white">
          CheckOut
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-2xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">profile</span>
        </div>
        <div className="rounded-3xl p-6 relative -top-5 bg-white">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative  flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">Migugu</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-2xl">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐ 4.9</span>
            <span className="shadow-lg p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-60 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium mb-1.5 text-xl">Swoon lounge</span>
          <span className="text-xs text-gray-500 -mt-3 mb-3">chair</span>
          <div className="flex justify-between my-5 items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500" />
              <button className="w-5 h-5 rounded-full bg-indigo-500" />
              <button className="w-5 h-5 rounded-full bg-teal-500" />
            </div>
            <div className="flex space-x-3">
              <button className="text-lg text-white w-10 h-10 bg-blue-500 rounded-lg ">
                +
              </button>
              <span className="font-medium text-2xl">1</span>
              <button className="text-lg text-white w-10 h-10 bg-blue-500 rounded-lg ">
                -
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">$450</span>
            <button className="bg-blue-600 p-2 text-white rounded-lg w-1/2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
