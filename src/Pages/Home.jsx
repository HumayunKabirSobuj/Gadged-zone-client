import { useState } from "react";
import BrandCategories from "../Components/BrandCategories";
import Navbar from "../Components/Navbar";
import Phones from "../Components/Phones";
import SearchPhone from "../Components/SearchPhone";
import SeriesCategories from "../Components/SeriesCategories";
import LowToHighOrHighToLow from "../Components/LowToHighOrHighToLow";
import SortByDate from "../Components/SortByDate";
import PriceRange from "../Components/PriceRange";

export default function Home() {
  const [name, setName] = useState('');
   // sort
   const [sort, setSort] = useState('')
    // DateSort
  const [DateSort, setDateSort] = useState('')
  // Price Range
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
   
  return (
    <div>
      <Navbar />

      <div className="relative  flex lg:flex-row flex-col pt-10 items-start">

        <div className="space-y-8  lg:w-1/4 w-full">
          <BrandCategories />
          <SeriesCategories />

          <SearchPhone setName={setName}></SearchPhone>
          <LowToHighOrHighToLow sort={sort} setSort={setSort}></LowToHighOrHighToLow>
          <SortByDate DateSort={DateSort} setDateSort={setDateSort}></SortByDate>
          <PriceRange minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice}></PriceRange>
        </div>
        <div className="flex-1">
          <Phones DateSort={DateSort} sort={sort}  productname={name}   minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} > </Phones>
        </div>

      </div>





    </div>
  )
}
