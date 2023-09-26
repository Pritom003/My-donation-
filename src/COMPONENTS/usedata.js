// import { useState, useEffect } from 'react';

// const useDonationData = () => {
//   const [donationData, setDonationData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // You can replace this URL with your actual API endpoint
//     const apiUrl = '/allDonation.json';

//     fetch(apiUrl)
//       .then(res=>res.json)
//       .then(data=>{setDonationData(data);
//       setIsLoading(false);})
//   }, []);

//   return { donationData, isLoading };
// };

// export default useDonationData;
