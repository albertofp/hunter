import Job from "@/src/components/Job";
import samples from "@/src/lib/samples.json";

export default function Board() {
  return (
    <div className="h-screen w-screen bg-slate-100">
      <div className="flex flex-col items-center gap-6 h-full pt-5">
        <h1 className="text-4xl text-slate-600 font-bold">Job Board</h1>
        {samples.data.map((job) => (
          <Job title={job.title} tags={job.tags} location={job.location} />
        ))}
      </div>
    </div>
  );
}
