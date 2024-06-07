import React from 'react'
import image from './assets/Image/CustomerReview2.jpg'
import './CustomerReview.css'
import UncontrolledExample from "./Slider";
const CustomerReview = () => {
  return (
    <div className='container-fluid'>
        <div className="row cr_sliderbg">
            <div className='col-lg-6 cr_slider mt-5 text-center'>
              <h1 className='ms-4 big-title'>What Our Clients Say About</h1>
            <UncontrolledExample></UncontrolledExample>
            </div>
            <div className='col-lg-6'>
        <img src={image} alt="" className='cr_image img-fluid' />
            </div>
        </div>
    </div>
  )
}

export default CustomerReview
