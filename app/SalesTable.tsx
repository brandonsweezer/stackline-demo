import { SalesData } from "@/types/salesData";

export default function SalesTable({salesData}: {salesData: SalesData[]}) {
    return (
        <table style={{ width: '100%', borderCollapse: 'collapse', color: 'grey'}}>
          <thead>
            <tr style={{textAlign: 'right'}}>
              <th style={{ padding: 16 }}>Week Ending</th>
              <th style={{ padding: 16 }}>Retail Sales</th>
              <th style={{ padding: 16 }}>Wholesale Sales</th>
              <th style={{ padding: 16 }}>Units Sold</th>
              <th style={{ padding: 16 }}>Retailer Margin</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale, index) => (
              <tr key={index} style={{textAlign: 'right'}} >
                <td style={{ padding: 16 }}>{sale.weekEnding}</td>
                <td style={{ padding: 16 }}>{sale.retailSales}</td>
                <td style={{ padding: 16 }}>{sale.wholesaleSales}</td>
                <td style={{ padding: 16 }}>{sale.unitsSold}</td>
                <td style={{ padding: 16 }}>{sale.retailerMargin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}