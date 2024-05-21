import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HashtagList } from "../Chip/Hashtag";
import Avatar from "@/components/icons/Avatar/Avatar";

const SlideCard = () => {
  return (
    <>
      <div className=" bg-white hover:bg-gray-50 hover:shadow-md rounded-sm w-[640px]">
        <Link href="/">
          <Image
            className="hover:scale-105 transition-all duration-300 overflow-hidden"
            src="/JobCardPhoto/jobcard1.webp"
            alt="test_image"
            width={640}
            height={400}
          />
          <div className="px-4">
            <div className="flex flex-row items-center">
              <HashtagList hashtags={["Webエンジニア", "フルリモート勤務"]} />
              <div className="text-sm font-bold">17エントリー</div>
            </div>
            <p className="text-xl font-bold">
              0から一緒に開発! フロントエンジニア募集!
            </p>
            <div className="flex justify-between items-center mr-5">
              <div className="flex flex-row items-center mt-1">
                <Avatar src="/JobCardPhoto/jobcard1logo.webp" />
                <div className="text-sm font-bold text-gray-500">
                  株式会社ソフトバンク
                </div>
              </div>
              <div className="text-base font-bold text-gray-500">3</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SlideCard;
