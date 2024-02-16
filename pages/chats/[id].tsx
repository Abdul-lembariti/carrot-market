import type { NextPage } from 'next'

const ChatDetail: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm border-gray-300 text-gray-700 p-2 border rounded-md">
          <p>Hi!</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm border-gray-300 text-gray-700 p-2 border rounded-md">
          <p>Hi how much are you selling?</p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm border-gray-300 text-gray-700 p-2 border rounded-md">
          <p>I want $20,000</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm border-gray-300 text-gray-700 p-2 border rounded-md">
          <p>Cool let make a deal!</p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm border-gray-300 text-gray-700 p-2 border rounded-md">
          <p>I want $20,000</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm border-gray-300 text-gray-700 p-2 border rounded-md">
          <p>Cool let make a deal!</p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm border-gray-300 text-gray-700 p-2 border rounded-md">
          <p>I want $20,000</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm border-gray-300 text-gray-700 p-2 border rounded-md">
          <p>Cool let make a deal!</p>
        </div>
      </div>{' '}
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm border-gray-300 text-gray-700 p-2 border rounded-md">
          <p>I want $20,000</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm border-gray-300 text-gray-700 p-2 border rounded-md">
          <p>Cool let make a deal!</p>
        </div>
      </div>{' '}
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm border-gray-300 text-gray-700 p-2 border rounded-md">
          <p>I want $20,000</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm border-gray-300 text-gray-700 p-2 border rounded-md">
          <p>Cool let make a deal!</p>
        </div>
      </div>
      <div className="fixed w-full bottom-3 mx-auto max-w-md inset-x-0">
        <div className="flex items-center relative">
          <input
            type="text"
            className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500 pr-12"
          />
          <div className="absolute inset-y-o flex py-1.5 pr-1.5 right-0">
            <button className="flex focus:ring-2 focus:offset-2 ring-orange-500 cursor-pointer items-center bg-orange-500 px-3 text-sm text-white rounded-full hover:bg-orange-600">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatDetail
