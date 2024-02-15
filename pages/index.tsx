import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-300">
      <input
        type="text"
        required
        placeholder="Username"
        className="required:border-2 peer border-yellow-400"
      />
      <span className="peer-invalid:text-red-500 peer-valid:hidden">
        This is input is invalid
      </span>
      <input type="submit" value="Login" className="bg-white" />
    </form>
  )
}

export default Home
