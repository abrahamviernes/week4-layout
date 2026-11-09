export default function Card({ project }) {
  const { title, category, client } = project;

  return (
    <div className="flex min-h-56 flex-col items-center justify-center gap-4 rounded-xl bg-white p-6 text-center shadow-md transition-shadow hover:shadow-xl">
      <h3 className="text-2xl font-bold text-green-900">
        {title}
      </h3>

      <p className="text-lg text-green-900">
        {client}
      </p>

      <span className="text-base text-green-700">
        {category}
      </span>
    </div>
  );
}