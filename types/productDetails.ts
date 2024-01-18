import { Review } from "./review";
import { SalesData } from "./salesData";

export type ProductDetails = {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: Review[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: SalesData[];
  };