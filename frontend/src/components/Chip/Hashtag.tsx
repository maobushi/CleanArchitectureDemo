import React from "react";
import { Chip } from "@/components/ui/MuiComponents";
import { Color } from "@/types/color";

export const Hashtag = (props: { label: string; color: Color }) => {
  return <Chip className="font-bold text-xs px-1" size="small" label={props.label} color={props.color} />;
};

export const HashtagList = (props: { hashtags: string[] }) => {
  return (
    <>
      <div className="flex flex-row py-4">
        {props.hashtags.map((hashtag, index) => {
          return (
            <div key={index} className="mr-2">
              <Hashtag label={hashtag} color="primary" />
            </div>
          );
        })}
      </div>
    </>
  );
};
