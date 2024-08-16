import BrandCategories from "../Components/BrandCategories";
import Navbar from "../Components/Navbar";
import Phones from "../Components/Phones";
import SearchPhone from "../Components/SearchPhone";
import SeriesCategories from "../Components/SeriesCategories";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* <==CATEGORY SECTIOn==> */}


      <div className="py-5 flex justify-evenly">

        <BrandCategories/>
        <SeriesCategories/>

      </div>

      <SearchPhone/>


      <Phones />



    </div>
  )
}
