import React, { FC } from "react";

const Subheader2: FC = ({ children }) => {
  return (
    <div className="font-workSans text-xs font-semibold leading-none text-white truncate">
      {children}
    </div>
  );
};

export default Subheader2;
