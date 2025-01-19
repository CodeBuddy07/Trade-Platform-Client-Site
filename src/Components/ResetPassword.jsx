
const ResetPassword = () => {
    return (
        <div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col-reverse ">
                    <div className="text-center lg:text-left">
                      
                        <p className="py-6 max-w-2xl text-center">
                            Enter your email here and press reset button then check your email open it and  update your password.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                           
                            <div className="form-control mt-6">
                                <button className="btn text-xl bg-blue-600 text-white hover:bg-blue-700">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ResetPassword;