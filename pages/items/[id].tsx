import { NextPage } from 'next'

const ItemDetail: NextPage = () => {
  return (
    <div className="px-4 py-10">
      <div>
        <div className="h-96 bg-slate-300" />
        <div className="flex cursor-pointer items-center space-x-3 py-3 border-t border-b">
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div>
            <p className="text-sm font-medium text-gray-700">Steve Jobs</p>
            <p className="text-xs font-medium text-gray-500">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-bold text-gray-900">Galaxy S23</h1>
          <p className="text-3xl mt-3 text-gray-900 block">$140</p>
          <p className="text-base my-6 text-gray-700">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className="flex items-center justify-between">
            <button className="flex-1 bg-orange-500 text-white py-3 rounded-md shadow-sm focus:otline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              Talk to seller
            </button>
            <button>
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2>Similar items</h2>
        <div>
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div />
              <h3>Galaxy S23 Ultra</h3>
              <p>$6</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail