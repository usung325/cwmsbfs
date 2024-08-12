// import React from 'react'
// import { motion } from "framer-motion"
// import TextContent from '../components/TextContent'
// import SnapScrollContainer from '../components/SnapScrollContainer'


// export default function TextPage() {

//     const cityList = ['Georgia', 'New York', 'Australia', 'California', 'Rhode Island', 'Pennsylvania', 'North Carolina']
//     return (
//         <div className="h-full mx-10 text-white">
//             <div className="flex flex-row justify-between">


//                 <div className="w-[15em] ">

//                     <div className="flex w-auto justify-between pl-5">
//                         <p>New York</p>
//                         <p>Oct 5 2024</p>
//                     </div>

//                     <div className="flex flex-col h-screen">
//                         <div className="flex flex-col my-auto h-[30%] items-start justify-between  pl-5">
//                             {cityList.map((city, i) => (
//                                 <motion.p
//                                     whileHover={{ scale: 1.5 }}
//                                     onHoverStart={e => { }}
//                                     onHoverEnd={e => { }}
//                                     key={i}
//                                     className="w-auto"
//                                 >{city}</motion.p>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* ////////////////////////////////////////////////// */}
//                 <div className="max-h-screen pt-10 space-y-52">
//                     <SnapScrollContainer>
//                         <div>
//                             <TextContent />
//                         </div>
//                         <div>
//                             <TextContent />
//                         </div>
//                         <div>
//                             <TextContent />
//                         </div>
//                     </SnapScrollContainer>
//                 </div>

//             </div>
//         </div >
//     )
// }


import React from 'react'
import { motion } from "framer-motion"
import { useParams } from 'react-router-dom'
import TextContent from '../components/TextContent'
import SnapScrollContainer from '../components/SnapScrollContainer'
import { Link } from 'react-router-dom';

export default function TextPage() {
    const { city } = useParams();
    const cityList = ['Georgia', 'New York', 'Australia', 'California', 'Rhode Island', 'Pennsylvania', 'North Carolina']

    return (
        <div className="h-full mx-10 text-white">
            <div className="flex flex-row justify-between">
                <div className="w-[15em] ">
                    <div className="flex w-auto justify-between pl-5">
                        <Link to='/'>
                            <p>{city}</p>
                        </Link>
                        <p>Oct 5 2024</p>
                    </div>

                    <div className="flex flex-col h-screen">
                        <div className="flex flex-col my-auto h-[30%] items-start justify-between  pl-5">
                            {cityList.map((city, i) => (
                                <motion.p
                                    whileHover={{ scale: 1.5 }}
                                    onHoverStart={e => { }}
                                    onHoverEnd={e => { }}
                                    key={i}
                                    className="w-auto"
                                >{city}</motion.p>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="max-h-screen pt-10 space-y-52">
                    <SnapScrollContainer>
                        <div>
                            <TextContent />
                        </div>
                        <div>
                            <TextContent />
                        </div>
                        <div>
                            <TextContent />
                        </div>
                    </SnapScrollContainer>
                </div>
            </div>
        </div >
    )
}