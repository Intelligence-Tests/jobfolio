// import React from 'react'
// import LatestJobCards from './LatestJobCards';
// import { useSelector } from 'react-redux'; 

// // const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

// const LatestJobs = () => {
//     const {allJobs} = useSelector(store=>store.job);
   
//     return (
//         <div className='max-w-7xl mx-auto my-20'>
//             <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top </span> Job Openings</h1>
//             <div className='grid grid-cols-3 gap-4 my-5'>
//                 {
//                     allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
//                 }
//             </div>
//         </div>
//     )
// }

// export default LatestJobs
import React, { useEffect } from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

const LatestJobs = () => {
    const { allJobs, loading, error } = useSelector(store => store.job);
   
    // You can handle the logic to get the jobs here if necessary

    return (
        <div className='max-w-7xl mx-auto my-20 px-4'>
            <h1 className='text-3xl sm:text-4xl font-bold text-center'>
                <span className='text-[#6A38C2]'>Latest & Top</span> Job Openings
            </h1>
            {loading && <p>Loading jobs...</p>}
            {error && <p>Error fetching jobs: {error}</p>}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5'>
                {
                    Array.isArray(allJobs) && allJobs.length > 0 
                    ? allJobs.slice(0, 6).map((job) => <LatestJobCards key={job._id} job={job} />)
                    : <span>No Job Available</span>
                }
            </div>
        </div>
    );
}

export default LatestJobs;
