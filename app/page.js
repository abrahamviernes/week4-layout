import CardGrid from "../components/CardGrid";

export default function Home() {
  return (
    <div className="min-h-full bg-[#f5f5ed] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <section className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-green-900">
            Our Projects
          </h1>

          <h2 className="mb-4 text-2xl font-semibold text-green-800">
            Explore Our Work
          </h2>

          <p className="mb-6 text-gray-600">
            Take a look at some of the projects we've created for our clients.
          </p>

          <a
            href="#projects"
            className="inline-block rounded-lg bg-green-900 px-6 py-3 text-white hover:bg-green-800"
          >
            View Projects
          </a>
        </section>

        <section id="projects">
          <CardGrid />
        </section>
      </div>
    </div>
  );
}