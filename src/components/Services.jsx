import React, {useState} from 'react'
import ServicePage from './ServicePage'
import NetworkServicePage from './NetworkServicePage'


const Services = () => {
  const [showPage, setShowPage] = useState(false)

  const TogglePage =()=>{
    setShowPage(true)

  }

  return (
    <div className="p-64 ">
      <div>
        <div className="">
          <div>
            <span className="font-bold ">Services we offer</span>
            <p>
              We offer a wide range of specialized services Designed to meet
              your goals
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center space-x-4 ">
              <div
                onMouseEnter={TogglePage}
                className="  border  p-8 h-4 w-[400px] rounded-r-full mt-2 hover:bg-red-600 hover:text-white text-center "
              >
                <p className="">IT Services</p>
              </div>
              <div>{showPage ? <ServicePage /> : <ServicePage />}</div>
            </div>
            <div className="flex justify-between items-center space-x-4 ">
              <div
                onMouseEnter={TogglePage}
                className="  border  p-8 h-4 w-[400px] rounded-r-full mt-2 hover:bg-red-600 hover:text-white text-center "
              >
                <p className="">Network Services</p>
              </div>
              <div>{showPage ? <NetworkServicePage /> : <ServicePage />}</div>
            </div>
            <div className="flex justify-between items-center space-x-4 ">
              <div
                onMouseEnter={TogglePage}
                className="  border  p-8 h-4 w-[400px] rounded-r-full mt-2 hover:bg-red-600 hover:text-white text-center "
              >
                <p className="">IT Services</p>
              </div>
              <div>{showPage ? <ServicePage /> : <ServicePage />}</div>
            </div>
            <div className="flex justify-between items-center space-x-4 ">
              <div
                onMouseEnter={TogglePage}
                className="  border  p-8 h-4 w-[400px] rounded-r-full mt-2 hover:bg-red-600 hover:text-white text-center "
              >
                <p className="">Network Services</p>
              </div>
              <div>{showPage ? <ServicePage /> : <ServicePage />}</div>
            </div>
            <div className="flex justify-between items-center space-x-4 ">
              <div
                onMouseEnter={TogglePage}
                className="  border  p-8 h-4 w-[400px] rounded-r-full mt-2 hover:bg-red-600 hover:text-white text-center "
              >
                <p className="">IT Services</p>
              </div>
              <div>{showPage ? <ServicePage /> : <ServicePage />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services