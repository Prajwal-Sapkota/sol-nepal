import Image from "next/image";

const Activities = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 text-dark text-center">Our Activities</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="flex justify-center items-center">
            <Image
              src="/images/activities1.jpeg" 
              alt="Activity 1"
              width={1000}
              height={1200}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/activities2.jpeg" 
              alt="Activity 2"
              width={1000}
              height={1200}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
