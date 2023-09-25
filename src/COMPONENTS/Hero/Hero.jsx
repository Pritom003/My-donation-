

const Hero = () => {
  return (
    <div >
      <div >
      <div className=" w-full  ">  
       
       <div className="hero  " style={{backgroundImage: ' url(https://i.ibb.co/7V28WFk/bgimg.jpg'}}>
  <div className="hero-overlay  bg-white  bg-opacity-90"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="w-[60vw]">
      <h1 className="text-2xl text-black pb-4 font-bold">I Grow By Helping People In Need</h1>

    <form className="w-full">   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>

        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm
         text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5
         bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary
         font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary dark:hover:bg-primary
          dark:focus:ring-primary">Search</button>
    </div>
</form>

    </div>
  </div>
</div>
 
       </div>
    </div>
    </div>
  );
};

export default Hero;