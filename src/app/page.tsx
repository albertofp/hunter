"use client";
import Job from "@/src/components/Job";
import samples from "@/src/lib/samples.json";

export default function Board() {
  return (
    <div className="flex flex-col items-center gap-6 p-5 bg-slate-100 w-screen">
      <h1 className="text-4xl text-slate-600 font-bold">Job Board</h1>
      {samples.data.map((job) => (
        <Job {...job} key={job.id} />
      ))}
    </div>
  );
}
