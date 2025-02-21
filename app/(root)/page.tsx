import { Button } from "@/components/ui/button";
import Image from "next/image";
 

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover py-10 md:py-16">
        <div className="wrapper grid grid-cols-1 items-center gap-5 md:grid-cols-2 md:gap-8">
          
          <div className="flex flex-col justify-center gap-6 text-center md:text-left">
            <h1 className="text-4xl font-bold leading-tight text-gray-800 md:text-5xl lg:text-6xl">
              Host, Connect, Celebrate: <br />
              <span className="text-primary-600">Your Events, Our Platform!</span>
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              Plan and manage your events effortlessly with our all-in-one platform.
            </p>
            <Button className="mt-4 w-full rounded-lg bg-primary px-6 py-3 text-black shadow-md transition-transform duration-300 hover:scale-105 hover:bg-primary-700 md:w-auto" variant="ghost">
              Get Started
            </Button>
          </div>

          <div className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] ">
            <Image
              src="/assets/images/hero.png"
              alt="Evently Hero"
              width={500}
              height={400}
              className="w-full max-w-md"
              priority
            />
          </div>
          
        </div>
      </section>

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Trust by <br /> Thousands of Events</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          {/* <Search />
          <CategoryFilter /> */}
        </div>

        {/* <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        /> */}
      </section>



    </>
  );
}
