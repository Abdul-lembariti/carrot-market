import { NextPage } from 'next'

const Live: NextPage = () => {
  return (
    <div className="py10  space-y-4 divide-y-2">
      {[1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
        <div className="pt-4 px-4" key={i}>
          <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
          <h3 className=" text-gray-500 text-lg mt2">Let&apos;s try this</h3>
        </div>
      ))}
      <button className="fixed border-transparent bottom-24 right-5 bg-orange-400 rounded-full shadow-xl p-4 text-white hover:bg-orange-500 transition-colors cursor-pointer">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  )
}

export default Live
