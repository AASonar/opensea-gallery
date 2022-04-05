import React, { FC } from "react";

const Subheader2: FC = ({ children }) => {
  return (
    <p className="font-workSans text-xs font-normal truncate leading-none text-white ">
      {children}
    </p>
  );
};

export default Subheader2;
