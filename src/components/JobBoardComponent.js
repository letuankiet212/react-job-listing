import React from 'react'

// 
// let x = {
//     "id": 2,
//     "company_name": "Remotive",
//     "logo": "./images/photosnap.svg",
//     "new": true,
//     "position": "Lead Developer",
//     "role": "Software Development",
//     "level": "Senior",
//     "postedAT": "1d ago",
//     "contract": "Full Time",
//     "location": "USA Only",
//     "languages": [
//         "HTML",
//         "CSS"
//     ]
// }
const JobBoardComponent = ({ job }) => {
    return (
        <div className="flex bg-white shadow-lg my-4 px-3 border-l-2 border-green-900  py-3">
            <div className="w-1/2 pl-2 ">
                <div className="flex">
                    <p className="title font-bold text-green-300">
                        {job.company_name}
                    </p>
                </div>
                <h4 className="text-lg font-bold">{job.position}</h4>
                <p className="text-gray-400 text-base ">
                    {job.postedAT} 
                    &middot; 
                    {job.contract} 
                    &middot; 
                   {job.location} 
                </p>
            </div>
            <div className="flex-1 flex items-center justify-end">
                {job.languages.map((language) => 
                    <span className="bg-blue-200 text-blue-400 block font-bold mx-2 px-2 rounded-sm">{language}</span>
                )}
            </div>
        </div>
    )
}

export default JobBoardComponent
