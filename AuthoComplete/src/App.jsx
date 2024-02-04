import { useEffect, useRef, useState } from "react"
import PP from './assets/dneeme.png'
const data = [
  {
    id: 1,
    title: "test 1"
  },
  {
    id: 2,
    title: "Test 2"
  },
  {
    id: 3,
    title: "deneme 1"
  },
  {
    id: 4,
    title: "Deneme 2"
  },
]

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState([]);
  const [value, setValue] = useState([]);
  //girilen karakterler sadece boşluk ise true döner
  const isEmpty = !(/^\s*$/.test(searchTerm));
  const inputRef = useRef();

  useEffect(() => {
    if (isEmpty) {
      setResult(value.filter(value => value.name.toLowerCase().includes(searchTerm.toLowerCase())))
    }
    else {
      setResult([])
    }
  }, [searchTerm])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setValue(data))
  },[])


  const handleClick = e => {
    if (!inputRef.current.contains(e.target))
      setSearchTerm('');
  }
  //bileşen ilk yüklendiğinde bir olay dinleyici eklenir bu olay dinleyicisi herhangi bir alana tıklandığında handleClick fonksiyonunu çağırır ve component unmounted olduğunda bu dinleyici kaldırılır
  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return (
    <>
      <div ref={inputRef} className="search-box w-[350px] md:w-[485px] rounded-md mx-auto">
        <input type="text"
          value={searchTerm}
          placeholder="Search something..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 outline-none rounded-md focus:drop-shadow-xl placeholder:text-purple-400 placeholder:italic" />
        {
          result && isEmpty && (
            <>
              <div className="scrollbar bg-white mt-3 rounded-md max-h-[265px] scroll-smooth overflow-auto">
                {
                  result.map(item => (
                    <div
                      className="p-1 flex items-center border-b-2 transform hover:scale-95 duration-200 rounded-md hover:bg-fuchsia-100"
                      key={item.id}>
                      <div>
                        <img
                          className="w-16 h-16 rounded-md mr-3 hover:cursor-pointer "
                          src={PP} alt="resim yok" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold">Name: {item.name}</span>
                        <span className="font-semibold">Email: {item.email}</span>
                        <span className="font-semibold">Address: {item.address.street} {item.address.suite} / {item.address.city}</span>
                      </div>
                    </div>
                  ))
                }
              </div>

              {
                result.length <= 0 && (
                  <div
                    className="bg-white p-2 text-purple-300 rounded-md text-center"
                  >{searchTerm} ile ilgili kişi veya  konu bulunamadı...</div>
                )
              }
            </>

          )
        }
      </div>
    </>
  )
}

export default App
