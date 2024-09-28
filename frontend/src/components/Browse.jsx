import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';

const Browse = () => {
    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""));
        }
    }, [dispatch]);

    // Ensure allJobs is an array
    const jobList = Array.isArray(allJobs) ? allJobs : [];

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10 px-4'>
                <h1 className='font-bold text-xl my-10'>Search Results ({jobList.length})</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        jobList.length > 0 ? (
                            jobList.map((job) => {
                                return (
                                    <Job key={job._id} job={job} />
                                )
                            })
                        ) : (
                            <span>No jobs available</span> // Fallback if no jobs
                        )
                    }
                </div>
            </div>

            {/* Embedded CSS for mobile responsiveness */}
            <style jsx>{`
                @media (max-width: 768px) {
                    h1 {
                        font-size: 1.5rem;  /* Adjust heading size for mobile */
                    }
                    .grid {
                        grid-template-columns: repeat(1, 1fr); /* One column on mobile */
                    }
                }
            `}</style>
        </div>
    );
}

export default Browse;


// import React, { useEffect } from 'react'
// import Navbar from './shared/Navbar'
// import Job from './Job';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import useGetAllJobs from '@/hooks/useGetAllJobs';

// // const randomJobs = [1, 2,45];

// const Browse = () => {
//     useGetAllJobs();
//     const {allJobs} = useSelector(store=>store.job);
//     const dispatch = useDispatch();
//     useEffect(()=>{
//         return ()=>{
//             dispatch(setSearchedQuery(""));
//         }
//     },[])
//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-7xl mx-auto my-10'>
//                 <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
//                 <div className='grid grid-cols-3 gap-4'>
//                     {
//                         allJobs.map((job) => {
//                             return (
//                                 <Job key={job._id} job={job}/>
//                             )
//                         })
//                     }
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Browse