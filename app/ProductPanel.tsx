import { ProductDetails } from "@/types/productDetails";

export default function ProductPanel({productDetails}: {productDetails: ProductDetails}) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'white', padding: 32, maxWidth: '33%', gap: 8}}>
            <img style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto'}} width={'50%'} src={productDetails.image} alt={productDetails.title} />
            <h2 style={{textAlign: 'center'}}>{productDetails.title}</h2>
            <p style={{color: "GrayText", marginLeft: 'auto', marginRight: 'auto', width: '80%', textAlign: 'center'}}>
                {productDetails.subtitle}
            </p>
            <hr />
            <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: 8}}>
                {productDetails.tags?.map((tag) => 
                    <button 
                        style={{borderRadius: 4, backgroundColor: 'white', paddingTop: 4, paddingBottom: 4, paddingLeft: 16, paddingRight: 16}}
                    >
                        {tag}
                    </button>
                )}
            </div>
            <hr />
        </div>
    )
}