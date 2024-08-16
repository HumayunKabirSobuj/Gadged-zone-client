import BrandCategories from "../Components/BrandCategories";
import Navbar from "../Components/Navbar";
import Phones from "../Components/Phones";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* <==CATEGORY SECTIOn==> */}


      <div className="py-5">

        <BrandCategories/>

      </div>


      <Phones />



    </div>
  )
}
