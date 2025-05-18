import React, { useState } from 'react'
import Sell_New from "../Sell_New/Sell_New"
import Used from "../Sell_Used/Sell_Used"

const Selling = () => {
  const [activeTab, setActiveTab] = useState('new');



  return (<>
  <div className="flex  justify-center items-center w-full mt-20 mb-10 ">
        <button
          className={`px-5 py-2 w-2/6 rounded-s-md border border-double border-blue-600 cursor-pointer text-lg ${activeTab === 'used' ? 'bg-blue-900 text-white' : ''}`}
          onClick={() => setActiveTab('used')}
        >
          Sell Used Car
        </button>
        <button
          className={`px-5 py-2 w-2/6 rounded-e-md border border-double border-blue-600 cursor-pointer text-lg ${activeTab === 'new' ? 'bg-blue-900 text-white' : ''}`}
          onClick={() => setActiveTab('new')}
        >
          Sell New Car
        </button>
      </div>

      {activeTab === 'new' ? <Sell_New/> : <Used/>}  
  
  
  </>
  )
}

export default Selling
