import { Link } from "react-router-dom";

  
  const SearchResult = () => {
    return (
      <div>
   
   
       <div className="container mx-auto p-6">
       
           <div className="bg-white rounded-lg shadow-lg p-6">
               
               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Program Details</h2>
               
               <p className="text-gray-600 mb-4">
                   Contribute  for
                    All initiative, aiming to provide 
                    quality education,healty food, assential 
                    treatment  
                     to underprivileged
                     children and helped them to live a better life.
               </p>
             
               <p className="text-gray-700 mb-4">
                   Thank you for providing you help and make this world a better one . 
               </p>
               
               <Link to={'/'}><button   className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block transition duration-300 ease-in-out">
                Go Back
            </button></Link>
           </div>
       </div>
   
   
   
      </div>)
        }
  
  export default SearchResult;