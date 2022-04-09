import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4">
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center p-2 shadow-md bg-gray-200">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-3">LEADING SERVICE</h3>
              <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center p-2 shadow-md bg-gray-300">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-3">AUTOMATED BOOKINGS</h3>
              <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center p-2">
          <p>GET AN ADDITIONAL 10% OFF</p>
          <p className="py-3">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form action="" className="w-full s-form">
          <div className="my-2 flex flex-col">
            <label htmlFor="">Destination :</label>
            <select name="" id="" className="border rounded-md p-2">
              <option value="">Grande Antigua</option>
              <option value="">Key West</option>
              <option value="">Maldives</option>
              <option value="">Cozumel</option>
            </select>
          </div>
          <div className="my-2 mt-4 flex flex-col">
            <label htmlFor="">Check-In :</label>
            <input type="date" className="w-full border rounded-md p-2" />
          </div>
          <div className="my-2 flex flex-col">
            <label htmlFor="">Check-Out :</label>
            <input type="date" className="w-full border rounded-md p-2" />
          </div>
          <div>
            <button className="w-full">Rates & Avaialabilities</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
