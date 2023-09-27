"use client";
import Job from "@/src/components/Job";
import samples from "@/src/lib/samples.json";
import { useQuery } from "@tanstack/react-query";
import { job } from "../types/job";
import { JSX } from "react";

export default function Board() {
  const { data } = useQuery(["jobs"], () =>
    fetch("https://arbeitnow.com/api/job-board-api/").then((res) =>
      res.json().then((data) => console.log(data)),
    ),
  );

  return (
    <div className="h-full w-screen bg-slate-100 pb-6">
      <div className="flex flex-col items-center gap-6 h-full pt-5">
        <h1 className="text-4xl text-slate-600 font-bold">Job Board</h1>
        {data?.data?.map((job: JSX.IntrinsicAttributes & job) => (
          <Job {...job} key={job.id} />
        ))}
      </div>
    </div>
  );
}
