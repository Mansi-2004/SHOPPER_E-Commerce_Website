import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
       <div className="descriptionbox-navigator">
         <div className= "descriptionbox-nav-box">Description</div>
         <div className= "descriptionbox-nav-box fade">Reviews (122)</div>
    </div>

    <div className="descriptionbox-description">
        <p>An eCommerce website is an online platform where businesses and individuals 
            can buy and sell goods and services. It allows users to browse products, view product
             details, and make secure payments via credit cards, digital wallets, or other methods.
              Customers can create accounts, track their orders, and manage preferences. The website
               typically offers features like shopping carts, wishlists, product recommendations, and 
               customer reviews. Sellers can manage inventory, process orders, and track sales. 
               It often integrates with shipping providers for real-time delivery tracking. Responsive design 
               ensures users can shop across devices. Security measures like SSL encryption protect transactions.
                Marketing tools such as discounts and ads are used to attract customers.
             An eCommerce website enhances convenience, offering 24/7 shopping access.</p>

             <p>
             An eCommerce website allows users to buy and sell products or services online. It provides features
              like product browsing, secure payments, and order tracking.
              Sellers can manage inventory, process orders, and interact with customers through the platform.
             </p>
    </div>
    </div>
  )
}

export default DescriptionBox
