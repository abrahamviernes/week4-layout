import { projects } from "../data/projects";
import Card from "./Card";

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
}