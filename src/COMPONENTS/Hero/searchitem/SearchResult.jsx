import { Link } from "react-router-dom";

  
  const SearchResult = () => {
    return (
      <div>
   
   
       <div className="container mx-auto p-6">
       
           <div className="bg-white rounded-lg shadow-lg p-6">
               
               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Campaign Details </h2>
               
               <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Ensure access to quality education for children in need.</li>
                <li>Provide nutritious meals to combat hunger and malnutrition.</li>
                <li>Offer essential medical treatment to improve their health and well-being.</li>
                <li>Empower these children to lead better lives and pursue their dreams.</li>
            </ul>
             
             
               
               <Link to={'/'}><button   className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block transition duration-300 ease-in-out">
                Go Back
            </button></Link>
           </div>
       </div>
   
   
   
      </div>)
        }
  
  export default SearchResult;