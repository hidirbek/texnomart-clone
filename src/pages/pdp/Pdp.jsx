import { useState, useEffect } from 'react'
import Layout from "../../components/layout/Layout"
import { useParams } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./Pdp.css"


const Pdp = () => {
  const [singleProductData, setSingleProductData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((malumot) => setSingleProductData(malumot.data));
  }, [id]);
  console.log(singleProductData);
  return (
    <Layout>
      <main className='site-main'>
        <div className="container">
          <h1 className='pdp-title'>{singleProductData != null ? singleProductData.title : null}</h1>
        <div className="pdp-wrapper">
            <div className='single-product-image-wrapper'>
              <img className='single-product-main-img' src={singleProductData != null ? singleProductData.category.image : null} alt="" />
              <div className='single-prod-mini-img-wrapper'>
                {singleProductData != null ? singleProductData.images.map(img=>{
                  return <img className='single-prod-mini-img' key={uuidv4()} src={img} alt="" />
                }) : null}
              </div>
            </div>
            <div className="single-product-info">
              <p><b>Product ID:</b> <span>{singleProductData != null ? singleProductData.id : null}</span></p>
              <p><b>About product:</b><span>{singleProductData != null ? singleProductData.description : null }</span></p>
              <p><b>Price:</b> {singleProductData != null ? singleProductData.price : null } $</p>

            </div>
        </div>

        </div>
      </main>
    </Layout>
  )
}

export default Pdp