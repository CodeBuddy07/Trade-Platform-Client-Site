import image1 from "./../../../files/post.jpg";
import image2 from "./../../../files/receive.jpg";
import image3 from "./../../../files/contact.jpg";

const HowItWorks = () => {
  return (
    <div className="text-center text-gray-600 p-16 -mt-24 bg-gray-50  space-y-2 ">
      <h1 className="md:text-4xl text-3xl">How it works</h1>
      <p className="md:text-xl text-sm">
        Easily find skilled professionals in your area with our fast and free
        online service.
      </p>
      
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          <div className="space-y-4">
            <div className="md:h-[400px] h-[300px] ">
              <img
                className="object-cover rounded-lg w-full h-full"
                src={image1}
                alt=""
              />
            </div>
            <h1 className="md:text-2xl font-semibold text-xl ">
              Share Your Job
            </h1>
            <p>Describe the project or task you need help with at home.</p>
          </div>
          <div className="space-y-4">
            <div className="md:h-[400px] h-[300px] ">
              <img
                className="object-cover rounded-lg w-full h-full"
                src={image2}
                alt=""
              />
            </div>
            <h1 className="md:text-2xl font-semibold text-xl ">
              Get Multiple Quotes
            </h1>
            <p>
              Receive offers from up to three local professionals ready to
              tackle the job.
            </p>
          </div>
          <div className="space-y-4">
            <div className="md:h-[400px] h-[300px] ">
              <img
                className="object-cover rounded-lg w-full h-full"
                src={image3}
                alt=""
              />
            </div>
            <h1 className="md:text-2xl font-semibold text-xl ">
              Pick the Right Pro
            </h1>
            <p>
              Review their quotes and select the expert who fits your needs
              best.
            </p>
          </div>
        </div>
      

    </div>
  );
};

export default HowItWorks;
