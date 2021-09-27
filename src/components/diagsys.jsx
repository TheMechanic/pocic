import { useState } from "react"
import { Bar } from 'react-chartjs-2';

const datagraph = {
  labels: ['June', 'July', 'August', 'September'],
  datasets: [
    {
      label: 'KO status',
      backgroundColor: 'red',
      borderColor: 'red',
      borderWidth: 2,
      data: [10, 8, 6, 3]
    },
    {
      label: 'Bottleneck',
      backgroundColor: 'orange',
      borderColor: 'orange',
      borderWidth: 2,
      data: [4, 5, 7, 2]
    },
    {
      label: 'Fine tuned',
      backgroundColor: 'green',
      borderColor: 'green',
      borderWidth: 2,
      data: [19, 23, 25, 30]
    },
    {
      label: 'Overprovisioned',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [30, 30, 20, 10]
    }
  ]
}

const Diagsys = () => {
  const [show, setShow] = useState('hide')
  const fakeRun = () => {
    setShow('loading')
    setTimeout(() => setShow('show'), 2000)
  }

  return <div className="bg-white border-2 border-gray-200 rounded p-4">
    <p className="mb-4 text-center">This service allows you to determine technical inconsistencies in your intercloud environment</p>
    <button onClick={fakeRun} className="m-auto block bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Launch auto diagnostic</button>
    { show === 'loading' && <div className="w-16 m-auto pt-6">
      <svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 100 100" enable-background="new 0 0 100 100">
      <path fill="#000" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
        c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
            <animateTransform 
              attributeName="transform" 
              attributeType="XML" 
              type="rotate"
              dur="2s" 
              from="0 50 50"
              to="360 50 50" 
              repeatCount="indefinite" />
        </path>
      <path fill="#000" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
        c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
            <animateTransform 
              attributeName="transform" 
              attributeType="XML" 
              type="rotate"
              dur="1s" 
              from="0 50 50"
              to="-360 50 50" 
              repeatCount="indefinite" />
        </path>
      <path fill="#000" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
        L82,35.7z">
            <animateTransform 
              attributeName="transform" 
              attributeType="XML" 
              type="rotate"
              dur="2s" 
              from="0 50 50"
              to="360 50 50" 
              repeatCount="indefinite" />
        </path>
      </svg>
      </div>}
    { show === 'show' && <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-8">
      <div className="">
        <div className="bg-red-600 p-8 text-center text-white rounded-t">
          <h2 className="text-2xl">KO status</h2>
          <p className="font-bold text-xl">3</p>
        </div>
        <div className="text-left border-2 p-4 rounded-b h-48">
          <ul>
            <li className="border-2 p-2 mb-1 cursor-pointer hover:bg-gray-100"><a href="#">Connector Paris-Dublin</a></li>
            <li className="border-2 p-2 mb-1 cursor-pointer hover:bg-gray-100"><a href="#">Irgw NYC-Dublin</a></li>
            <li className="border-2 p-2 mb-1 cursor-pointer hover:bg-gray-100"><a href="#">Link HongKong-Frankfurt</a></li>
          </ul>
        </div>
      </div>
      <div>
        <div className="bg-yellow-500	 p-8 text-center text-white rounded-t">
          <h2 className="text-2xl">Bottleneck</h2>
          <p className="font-bold text-xl">2</p>
        </div>
        <div className="text-left border-2 p-4 rounded-b">
          <ul>
            <li className="border-2 p-2 mb-1 cursor-pointer hover:bg-gray-100"><a href="#">Link connector1-Conn7</a></li>
            <li className="border-2 p-2 mb-1 cursor-pointer hover:bg-gray-100"><a href="#">Link conn4-conn10</a></li>
            <li className="border-2 p-2 mb-1 cursor-pointer hover:bg-gray-100"><a href="#">Link HongKong-Frankfurt</a></li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="bg-green-500 p-8 text-center text-white rounded-t">
          <h2 className="text-2xl">Fine Tuned</h2>
          <p className="font-bold text-xl">30</p>
        </div>
        <div className="text-left border-2 p-4 rounded-b">
          <ul>
            <li className="border-2 p-2 mb-1 cursor-pointer hover:bg-gray-100"><a href="#">Link HongKong-Frankfurt</a></li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="bg-blue-400 p-8 text-center text-white rounded-t">
          <h2 className="text-2xl">Over provisioned</h2>
          <p className="font-bold text-xl">10</p>
        </div>
        <div className="text-left border-2 p-4 rounded-b">
          <ul>
            <li className="border-2 p-2 mb-1 cursor-pointer hover:bg-gray-100"><a href="#">Connector Paris-Dublin</a></li>
            <li className="border-2 p-2 mb-1 cursor-pointer hover:bg-gray-100"><a href="#">Irgw Dublin-Sanfransisco</a></li>
            <li className="border-2 p-2 mb-1 cursor-pointer hover:bg-gray-100"><a href="#">Link NYC-Frankfurt</a></li>
          </ul>
        </div>
      </div>
      <Bar data={datagraph} />
    </div> }
  </div>
}

export default Diagsys
