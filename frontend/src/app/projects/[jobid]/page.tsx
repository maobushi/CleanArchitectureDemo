import React from "react";

export default function JobPage({ params }: { params: { jobid: string } }) {
  return <div>JobPage : {params.jobid}</div>;
}
