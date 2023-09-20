import { job } from "@/src/types/job";

export default function Job({ ...job }: job) {
  return (
    <div className="flex items-center justify-between gap-4 w-1/2 border-black p-4 border-2 bg-gray-200 rounded-md">
      <div className="flex flex-col gap-2 p-2">
        <h3>{job.title}</h3>
        <h4>{job.company_name}</h4>
        <p>{job.location}</p>
        <p>remote: {job.remote ? "yes" : "no"}</p>
      </div>
      <button className="bg-slate-600 text-white px-4 py-2 rounded-md" />
    </div>
  );
}
