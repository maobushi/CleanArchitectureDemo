import React from "react";
import Image from "next/image";
const Avatar = (props: { src: string }) => {
  return (
    <>
      <Image
        src={props.src}
        alt="avatar"
        width={50}
        height={50}
        className="rounded-full"
      />
    </>
  );
};

export default Avatar;
