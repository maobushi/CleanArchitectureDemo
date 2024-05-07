"use client";
import React from "react";
import TabItem from "@/components/Button/TabItem";
import Image from "next/image";
import { usePathname } from "next/navigation";

const HomeHeader = () => {
  const currentPathName = usePathname();
  return (
    <>
      <div className="flex  px-3  h-[62px] shadow-sm">
        <Image src="/logo/logo.svg" alt="logo" width={50} height={50} />
        <TabItem
          text="募集"
          href="/"
          isActive={currentPathName == "/"}
          onClick={() => {}}
        />
        <TabItem
          text="ストーリー"
          href="/stories"
          isActive={currentPathName == "/stories"}
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default HomeHeader;
