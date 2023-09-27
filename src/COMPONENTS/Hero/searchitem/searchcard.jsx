import { Link } from "react-router-dom";


const searchcard = () => {
  
  return (
   <div>


    <div className="container mx-auto p-6">
    
        <div className="bg-white rounded-lg shadow-lg p-6">
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Program Details</h2>
            
            <p className="text-gray-600 mb-4">
                Contribute to our Education for All initiative, aiming to provide quality education to underprivileged children and brighten their futures.
            </p>
          
            <p className="text-gray-700 mb-4">
                Your donation of $290 can help us provide better educational resources and opportunities to these students.
            </p>
            
            <Link><button   className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block transition duration-300 ease-in-out">
                Donate Now
            </button></Link>
        </div>
    </div>



   </div>
  )
};

export default searchcard;