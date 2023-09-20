import Job from "@/src/components/Job";

export default function Board() {
  return (
    <div className="h-screen w-screen bg-slate-100">
      <div className="flex flex-col items-center gap-6 h-full pt-5">
        <h1 className="text-4xl text-slate-600 font-bold">Job Board</h1>
        <Job title="Software Engineer" location="Berlin" remote={true} />
        <Job title="Software Engineer" location="Berlin" remote={true} />
        <Job title="Software Engineer" location="Berlin" remote={true} />
      </div>
    </div>
  );
}
