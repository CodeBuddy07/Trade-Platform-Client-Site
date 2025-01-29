const JoinUsCTA = () => {
    return (
      <div className="relative bg-gradient-to-b from-green-100 via-green-300 to-gray-00 py-16 px-8">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-gray-800">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-gray-700">
            Join thousands of professionals who are growing their careers and businesses with us.
            Don't miss the chance to be part of something bigger!
          </p>
          <button className="px-8 py-4 text-xl bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform">
            Sign up now
          </button>
        </div>
  
        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    );
  };
  
  export default JoinUsCTA;
  