

function App() {


  return (
    <div className="w-full  h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="lg:w-1/2 p-1 rounded-md bg-gray-200">
        <table className="w-full font-popins">
          <thead className="bg-[#362F4B] text-white">
            <tr>
              <th className="py-2 px-6 lg:px-0">Name</th>
              <th className="py-2 px-6 lg:px-0">Lastname</th>
              <th className="py-2 px-6 lg:px-0">Country</th>
              <th className="py-2 px-6 lg:px-0">Age</th>
            </tr>
          </thead>
          <tbody className="bg-white text-center text-sm">
            <tr className="hover:bg-gray-400 hover:text-white duration-100">
              <td className="py-1 ">Jason</td>
              <td className="py-1 ">Stathom</td>
              <td className="py-1 ">England</td>
              <td className="py-1 ">49</td>
            </tr>
            <tr className="hover:bg-gray-400 hover:text-white duration-100">
              <td className="py-1 ">Candy</td>
              <td className="py-1 ">Kristwen</td>
              <td className="py-1 ">U.S.A</td>
              <td className="py-1 ">26</td>
            </tr>
            <tr className="hover:bg-gray-400 hover:text-white duration-100">
              <td className="py-1 ">Jason</td>
              <td className="py-1 ">Dester</td>
              <td className="py-1 ">U.S.A</td>
              <td className="py-1 ">35</td>
            </tr>
            <tr className="hover:bg-gray-400 hover:text-white duration-100">
              <td className="py-1 ">Hans</td>
              <td className="py-1 ">Landa</td>
              <td className="py-1 ">Germany</td>
              <td className="py-1 ">34</td>
            </tr>
            <tr className="hover:bg-gray-400 hover:text-white duration-100">
              <td className="py-1 px-4 lg:px-0">Mahmoud</td>
              <td className="py-1 px-4 lg:px-0">Gerevili</td>
              <td className="py-1 px-4 lg:px-0">BAE</td>
              <td className="py-1 px-4 lg:px-0">27</td>
            </tr>
            <tr className="hover:bg-gray-400 hover:text-white duration-100">
              <td className="py-1 ">Keşmir</td>
              <td className="py-1 ">Tahleen</td>
              <td className="py-1 ">BAE</td>
              <td className="py-1 ">38</td>
            </tr>
            <tr className="hover:bg-gray-400 hover:text-white duration-100">
              <td className="py-1 ">Abdullah</td>
              <td className="py-1 ">Yaman</td>
              <td className="py-1 ">Turkey</td>
              <td className="py-1 ">19</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
