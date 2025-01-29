import image1 from "./../../../files/post.jpg";
import image2 from "./../../../files/receive.jpg";
import image3 from "./../../../files/contact.jpg";

const HowItWorks = () => {
  return (
    <div className="text-center text-gray-600 p-16 -mt-24 bg-gray-50  space-y-2 ">
      <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-800">
          How it works
          </h1>
          <p className="max-w-3xl mx-auto text-base md:text-lg">
          Easily find skilled professionals in your area with our fast and free
          online service.
          </p>
          <hr className="w-16 mx-auto mt-2 border-2 border-green-600" />
        </div>
      
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
              Post you job
            </h1>
            <p>Describe what job/project you require a tradesPerson for</p>
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
