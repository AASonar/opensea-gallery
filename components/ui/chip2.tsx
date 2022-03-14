// export default function Chip2(){
//     return(
//         <div className="inline-flex items-center justify-start px-2 py-1 bg-gray-600 border rounded-full border-indigo-500">
//             <p className="text-xs font-semibold tracking-wide leading-none text-white" family-name="Monda, sans-serif">Platform Here</p>
//         </div>
//     );
// };

import React, { FC } from "react";

const Chip2: FC = ({ children }) => {
  return (
    <div className="inline-flex items-center justify-start px-2 py-1 bg-gray-600 border rounded-full border-indigo-500">
      <p className="text-xs font-semibold tracking-wide leading-none text-white font-monda">
        {children}
      </p>
    </div>
  );
};

export default Chip2;
