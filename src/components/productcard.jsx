import React from 'react'
import button from './button';
const productDetails = {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zFIbscy2_4qzNzXXO_U3XTa-ODIe-X_7nr7KAeEIS5PmvBIh6VUns_8&s",
    name:"Dummy Name",
    price:1000
}
const productcard = () => {
  return (
    <div>
        <img src={productDetails.image} alt="" />
        <h3>{productDetails.name}</h3>
        <p>${productDetails.price}</p>
        {button()}
    </div>
  )
}

export default productcard