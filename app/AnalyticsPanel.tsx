import { ProductDetails } from "@/types/productDetails";
import Chart from "./Chart";
import SalesTable from "./SalesTable";

export default function AnalyticsPanel({productDetails}: {productDetails: ProductDetails}) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 32}}>
            <div style={{ backgroundColor: 'white', paddingTop: 16}}>
                <Chart data={productDetails.sales} />
            </div>
            <div style={{ backgroundColor: 'white'}}>
                <SalesTable salesData={productDetails.sales} />
            </div>
        </div>
    )
}