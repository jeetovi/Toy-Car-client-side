import { Link } from "react-router-dom";

const ChackOut = () => {
  return (
    <div>
      <body className="flex items-center justify-center mt-6    min-h-screen  bg-gray-500 text-gray-800 p-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2   gap-8 w-full max-w-screen-lg">
          <div className="lg:col-span-2">
            <h2 className="text-sm font-medium">Payment Method</h2>
            <div className=" bg-amber-400 rounded mt-4 shadow-lg">
              <div className="flex items-center px-8 py-5">
                <input
                  className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100"
                  type="radio"
                />
                <label className="text-sm font-medium ml-4">PayPal</label>
              </div>
              <div className="border-t">
                <div className="flex items-center px-8 py-5">
                  <input
                    className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100 bg-blue-600"
                    type="radio"
                  />
                  <label className="text-sm font-medium ml-4">
                    Credit Card
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-4 px-8 pb-8">
                  <div className="col-span-2">
                    <label className="text-xs font-semibold">Card number</label>
                    <input
                      className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                      type="text"
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                  <div className="">
                    <label className="text-xs font-semibold">Expiry Date</label>
                    <input
                      className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                      type="text"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="">
                    <label className="text-xs font-semibold">CVC/CVV</label>
                    <input
                      className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                      type="password"
                      placeholder="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-medium">Purchase Summary</h2>
            <div className=" rounded mt-4 bg-amber-100 shadow-lg py-6">
              <div className="px-8">
                <div className="flex items-end">
                  <select
                    className="text-sm font-medium focus:outline-none -ml-1"
                    name=""
                    id=""
                  >
                    <option value="">Product (Billed Monthly)</option>
                    <option value="">Product (Billed Annually)</option>
                  </select>
                  <span className="text-sm ml-auto font-semibold">$20</span>
                  <span className="text-xs text-gray-500 mb-px">/mo</span>
                </div>
                <span className="text-xs text-gray-500 mt-2">
                  Save 20% with annual billing
                </span>
              </div>
              <div className="px-8 mt-4">
                <div className="flex items-end justify-between">
                  <span className="text-sm font-semibold">Tax</span>
                  <span className="text-sm text-gray-500 mb-px">10%</span>
                </div>
              </div>
              <div className="px-8 mt-4 border-t pt-4">
                <div className="flex items-end justify-between">
                  <span className="font-semibold">Today you pay (AUD)</span>
                  <span className="font-semibold">$0</span>
                </div>
                <span className="text-xs text-gray-500 mt-2">
                  After 1 month free: $22/mo.
                </span>
              </div>
              <div className="flex items-center px-8 mt-8">
                <input id="termsConditions" type="checkbox" />
                <label className="text-xs text-gray-500 ml-2">
                  I agree to the terms and conditions.
                </label>
              </div>
              <div className="flex flex-col px-8 pt-4">
                <button className="flex items-center justify-center bg-blue-600 text-sm font-medium w-full h-10 rounded text-blue-50 hover:bg-blue-700">
                  Start Subscription
                </button>
                <button className="text-xs text-blue-500 mt-3 underline">
                  Have a coupon code?
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
      {/* card  */}
      <div className="text-center mt-6 mb-6  bg-pink-200 py-1 mb-3">
        <h3 className="text-1xl text-orange-500"> balance Services</h3>
        <h2 className="text-3xl text-orange-500"> Account balance section</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cum
          reprehenderit cumque maxime itaque dolorum totam{" "}
        </p>
      </div>

      <div className="stats bg-primary text-center  justify-center text-primary-content">
        <div className="stat">
          <div className="stat-title">Account balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">Add funds</button>
          </div>
        </div>

        <div className="stat ">
          <div className="stat-title">Current balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm">Withdrawal</button>
            <button className="btn btn-sm">deposit</button>
          </div>
        </div>
      </div>

      <div>
        {" "}
        <h1 className="py-6 text-3xl text-gray-700 font bold items-center text-center">
          Tab Section
        </h1>
        <div className="sm:hidden ">
          <label className="sr-only">Select your country</label>
          <select
            id="tabs"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Profile</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
        <ul className="hidden text-sm font-medium py-8 text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
          <li className="w-full">
            <Link
              to="/alltoy"
              className="inline-block w-full p-4 text-gray-900 bg-yellow-500 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
              aria-current="page"
            >
              All Toy
            </Link>
          </li>
          <li className="w-full ">
            <Link
              to="/atoy"
              className="inline-block w-full p-4 bg-blue-500 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/blog"
              className="inline-block w-full p-4 bg-red-500 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Blog
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/mytoy"
              className="inline-block w-full p-4  bg-purple-500 rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Mytoy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChackOut;
