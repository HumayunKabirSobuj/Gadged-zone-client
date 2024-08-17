
import BrandCategories from "../Components/BrandCategories";
import Phones from "../Components/Phones";
import SearchPhone from "../Components/SearchPhone";
import SeriesCategories from "../Components/SeriesCategories";
import LowToHighOrHighToLow from "../Components/LowToHighOrHighToLow";
import SortByDate from "../Components/SortByDate";
// import PriceRange from "../Components/PriceRange";
import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useAuth from "../Hooks/useAuth";
import { FaUser } from "react-icons/fa";


export default function Home() {

  const { user, logOut } = useAuth();
  // console.log(user)
  const [isActive, setActive] = useState(false)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }


  const [name, setName] = useState('');
  // sort
  const [sort, setSort] = useState('')
  // DateSort
  const [DateSort, setDateSort] = useState('')
  // Price Range
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);





  return (
    <div className="relative min-h-screen md:flex">


      <div>
        {/* Small Screen Navbar */}
        <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
          <div>
            <div className='block cursor-pointer p-
            Room
            OnePlus 12 Pro Gaming
            Gaming Phone
            ;
            $ 849.99
            $ 8/15/2024
            Room
            iPhone 14
            Camera Phone
            ;
            $ 699.99
            $ 8/15/2024
            Room
            Pixel 9 Pro
            Camera Phone
            ;4 font-bold'>
              <Link to='/'>
                <img

                  className="flex items-center"
                  // className='hidden md:block'
                  src='https://i.ibb.co/5L8tWX5/logo.png'
                  alt='logo'
                  width='100'
                  height='100'
                />
              </Link>
            </div>
          </div>

          <button
            onClick={handleToggle}
            className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
          >
            <AiOutlineBars className='h-5 w-5' />
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
            }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
          <div>
            <div>
              <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
                <Link to='/'>
                  <img
                    // className='hidden md:block'
                    src='https://i.ibb.co/5L8tWX5/logo.png'
                    alt='logo'
                    width='100'
                    height='100'
                  />
                </Link>
              </div>
            </div>

            {/* Nav Items */}
            <div className='flex flex-col justify-between flex-1 mt-6'>
              {/* Conditional toggle button here.. */}

              {/*  Menu Items */}
              <nav className="space-y-3">
                <div>
                  {
                    !user && <Link
                      className="flex items-center justify-center text-2xl gap-2"
                      to='/login'


                    >
                      <FaUser />


                      <span className=' font-medium'>Login</span>
                    </Link>
                  }
                </div>

                <BrandCategories />
                <SeriesCategories />

                <SearchPhone setName={setName}></SearchPhone>
                <LowToHighOrHighToLow sort={sort} setSort={setSort}></LowToHighOrHighToLow>
                <SortByDate DateSort={DateSort} setDateSort={setDateSort}></SortByDate>
                {/* <PriceRange minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice}></PriceRange> */}

              </nav>
            </div>
          </div>

          <div>
            <hr />

            <div>
              {
                user && <div>
                  {/* Profile Menu */}
                  <NavLink
                    to='/dashboard/profile'
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                      }`
                    }
                  >
                    <FcSettings className='w-5 h-5' />

                    <span className='mx-4 font-medium'>Profile</span>
                  </NavLink>
                  <button
                    onClick={() => logOut()}
                    className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                  >
                    <GrLogout className='w-5 h-5' />

                    <span className='mx-4 font-medium'>Logout</span>
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 md:ml-64">
        <Phones DateSort={DateSort} sort={sort} productname={name} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} > </Phones>
      </div>

    </div>
  )
}

