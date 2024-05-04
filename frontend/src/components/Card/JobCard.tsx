import React from "react";
import Image from "next/image";
import { HashtagList } from "@/components/Chip/Hashtag";
import Avatar from "@/components/icons/Avatar/Avatar";
import Link from "next/link";

const JobCard = (props: {
  image: string;
  hashtags: string[];
  title: string;
  description: string;
  entryNumber: number;
  companyLogo: string;
  companyName: string;
  shareNumber: number;
}) => {
  return (
    <div className="hover:bg-gray-100 rounded-md w-[700px]">
      <Link href="/projects/1">
        <div className="flex justify-center ">
          <Image
            className="rounded-md"
            src="/JobCardPhoto/jobcard1.webp"
            alt="job_card"
            width={10000}
            height={200}
          />
        </div>
        <div className="flex flex-col p-2">
          <HashtagList hashtags={props.hashtags} />
          <h1 className="text-2xl font-bold">{props.title}</h1>
          <p className="py-4">{props.description}</p>
          <p className="text-sm py-2">{props.entryNumber}人がエントリー</p>
          <div>
            <div className="flex py-2 flex-row justify-between items-center">
              <div className="flex py-2 flex-row items-center">
                <Avatar src={"/JobCardPhoto/jobcard1logo.webp"} />
                <p>{props.companyName}</p>
              </div>
              <div>
                <p className="px-2">{props.shareNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default JobCard;
