import React from 'react'
import '../App.css'
export default function Card() {
  return (
    <div>
      
        <div className="card mt-m" style={{ width: "18rem",height:"32rem", border: 'solid' }}>

          <img src="https://www.foodiesfeed.com/wp-content/uploads/2022/07/haloumi-burger-with-french-fries.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some thin is importent</p>
              <div className="container w-100">
                  <select className='m-2  h-100 bg-success rounded'>
                    {Array.from(Array(10),(e,iteam)=>{
                        return(
                          <option key={iteam+1} value={iteam+1}>{iteam+1}</option>
                        )
                    })}
                  </select>
                  <select className='m-2  h-100 bg-success rounded'>
                    <option value="half">Half</option>
                    <option value="full">full</option>
                  </select>
                  <div className='d-inline h-100 fs-5'>TotalPrice</div>
              </div>
          </div>
        </div>
      </div>
  )
}
