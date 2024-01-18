"use client"
import { ProductDetails } from "@/types/productDetails";
import { useEffect, useState } from "react"
import ProductPanel from "./ProductPanel";
import LoadingSpinner from "./LoadingSpinner";
import AnalyticsPanel from "./AnalyticsPanel";

export default function Home() {
  const [data, setData] = useState<ProductDetails>();

  useEffect(() => {
    fetch('/api/data', {method: 'GET'}).then(async (res) => {
      const data = await res.json();
      setData(data[0]);
    })
  }, [])

  return (
    <main >
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', backgroundColor: '#0b244a', height: 64}}>
          <img 
            style={{marginTop: 'auto', marginBottom: 'auto', marginLeft: 16, display: 'flex', color: 'white'}}
            alt={'stackline'}
            src={'stackline_logo.svg'} 
            height={'50%'}
          />
        </div>
        {data 
          ? (
            <div style={{display: 'flex', marginTop: 64, marginLeft: 16, marginRight: 16, gap: 16}}>
              <ProductPanel productDetails={data} />
              <AnalyticsPanel productDetails={data} />
            </div>
          ) :
          <LoadingSpinner />
        }
      </div>
    </main>
  )
}
