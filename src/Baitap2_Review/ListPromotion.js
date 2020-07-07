import React from 'react';

import Promotion from './Promotion';

const ListPromotion = () => {
  return (
    <section id="promotion" className="container-fluid pt-5 pb-5">
      <h1 className="text-center text-white">PROMOTION</h1>
      <div className="container bg-light pt-5 pb-5">
        <div className="row">
          <Promotion/>
          <Promotion/>
          <Promotion/>
        </div>
      </div>
    </section>

  )
}

export default ListPromotion
