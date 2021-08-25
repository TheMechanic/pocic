import { useEffect, useRef, useState } from "react"
import { searchapi } from "../../data/fake"

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [isOpen, setOpen] = useState(false)
  const [results, setResults] = useState([])

  const input = useRef(null)
  const resultsblock = useRef(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!isOpen || resultsblock.current.contains(target) || input.current.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!isOpen || keyCode !== 27) return;
      setOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    if (search.length < 2) return setOpen(false)
    searchapi(search).then(data => {
      console.log(data)
      setResults(data)
      setOpen(true)
    })
  }, [search])

  const goto = (data) => console.log('goto', data)

  return <div className="w-8/12 relative">
    <input ref={input} name="search" autocomplete="off" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} type="search" className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" />
    <div ref={resultsblock} className={`transition-all origin-top-left z-10 absolute top-full left-0 right-0 bg-white p-3 -mt-3 border-l-2 border-r-2 border-b-2 border-blue-500 rounded-b-xl ${!isOpen && 'hidden'}`}>
      <ul>
        { results.map(result =>
          <li key={result.irn} className="w-full flex justify-between border rounded-xl border-gray-300 p-4 mb-2 cursor-pointer hover:bg-gray-100" onClick={() => goto(result)}>
            <div className="font-semibold italic">{result.type}</div>
            <div>{result.name}</div>
            <div className={`text-white rounded-xl ${result.status === 0 ? 'bg-green-500' : 'bg-red-600'} p-2 font-semibold`}>{result.status === 0 ? 'OK' : 'KO'}</div>
          </li>)
        }
      </ul>
    </div>
  </div>
}

export default SearchBar
