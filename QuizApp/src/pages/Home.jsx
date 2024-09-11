import { Link } from "react-router-dom"

const Home = () => {
  return (
    <section className="w-full pt-12">
      <div className="container space-y-10 xl:space-y-16 px-4 md:px-6">
        <div className="grid gap-4 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Test Your Knowledge with Our Quizzes
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-muted-foreground md:text-xl">
              Challenging and engaging quizzes across a variety of topics. See how much you know!
            </p>
            <div className="mt-6">
              <Link
                to="/quiz"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Start Quiz
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/banner.jpg"
              alt="Quiz"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;