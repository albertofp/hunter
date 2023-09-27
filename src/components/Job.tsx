import { job } from "@/src/types/job";
import { Badge } from "@/components/ui/badge";

export default function Job(props: job) {
  return (
    <div className="flex items-center justify-between gap-4 w-1/2 border-black p-4 border-2 bg-gray-200 rounded-md">
      <div className="flex flex-col gap-2 p-2">
        <h3>{props.title}</h3>
        <h4>{props.company_name}</h4>
        <p>{props.location}</p>
        <p>remote: {props.remote ? "yes" : "no"}</p>
      </div>
      <div className="flex gap-2 p-2 flex-wrap">
        {props.tags?.map((tag) => (
          <Badge variant="destructive" key={tag}>
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
