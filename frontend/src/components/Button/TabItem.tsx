import React from "react";
import Link from "next/link";

const TabItem = (props: {
  text: string;
  isActive: boolean;
  onClick: () => void;
  href: string;
}) => {
  return (
    <>
      <Link
        href={props.href}
        className={` flex justify-center ${props.isActive ? "border-b-2 border-blue-400" : "text-gray-400 hover:text-gray-500"}`}
      >
        <p className="flex items-center justify-center text-center text-[14px]  ml-[16px] mr-[16px] font-bold">
          {props.text}
        </p>
      </Link>
    </>
  );
};

export default TabItem;
