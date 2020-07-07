import React from 'react'
import SmartPhone from './SmartPhone';

const ListSmartPhone = () => {
  return (
    <section id="smartphone" className="container-fluid pt-5 pb-5">
      <h1 className="text-white text-center">BEST SMARTPHONE</h1>
      <div className="row">
        <SmartPhone/>
        <SmartPhone/>
        <SmartPhone/>
        <SmartPhone/>
      </div>
    </section>
  )
}

export default ListSmartPhone
