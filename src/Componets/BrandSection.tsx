const BrandSection = () => {
  return (
    <>
      <section className="w-screen">
        <div className="m-4 mx-auto max-w-screen-lg rounded-md border border-gray-100 text-gray-600 shadow-md">
          <div className="relative flex h-full flex-col text-gray-600 md:flex-row">
            <div className="relative p-8 md:w-4/6">
              <div className="flex flex-col md:flex-row">
                <h2 className="mb-2 text-2xl font-black">Best Headphone</h2>
                <span className="ml-2 text-xs uppercase">PRIME</span>
              </div>
              <p className="mt-3 font-sans  text-sm font-medium text-base tracking-normal">
                Best headphone & low price P47 Foldable/Sports/Office/ Gaming
                Wireless Headphone with Mic Bluetooth Headset
              </p>
              <div className="flex flex-col md:flex-row md:items-end">
                <p className="mt-6 text-4xl font-black">
                  $70<sup className="align-super text-sm"></sup>
                </p>
                <span className="ml-2 text-xs uppercase">258 Sales</span>
              </div>
              <div className="mt-8 flex  sm:flex-row">
                <button className="mr-2 mb-4 flex cursor-pointer bg-purple-blue-500 hover:bg-blue-500 items-center justify-center rounded-md bg-emerald-400 py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1">
                  Buy now
                </button>
                <button className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white">
                  Preview
                </button>
              </div>
            </div>
            <div className="mx-auto flex items-center px-5 pt-1 md:p-8">
              <img
                className="block w-96 max-w-full rounded-md shadow-lg "
                src={"/earphoneimage.jpg"}
                alt="Shop image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandSection;
