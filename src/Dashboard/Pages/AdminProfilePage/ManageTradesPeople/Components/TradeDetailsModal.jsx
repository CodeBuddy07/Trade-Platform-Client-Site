import { IoClose } from "react-icons/io5";

const TradeDetailsModal = ({ selectedTrade, onClose }) => {


    const onSuspend = () => {
        confirm('want to suspend this account ?')
    }

    return (
        <div>
            <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"

            >
                <div
                    className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-h-[90vh] rounded-lg p-6 overflow-y-auto flex flex-col items-center justify-center scrollbar-thin"

                >



                    <div className=" border-2 bg-white border-pink-500 rounded-2xl shadow-lg p-6 w-full">
                        <div className="relative mx-auto w-32 h-32">
                            <img
                                src={selectedTrade?.photoUrl}
                                alt={`${selectedTrade?.firstName} ${selectedTrade?.lastName}`}
                                className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-pink-500"
                            />
                            <div className="mt-4 absolute border-none top-0 -right-10  text-center">
                                <span className={`px-4 py-1 rounded-full  outline-none border-4 border-white text-white ${selectedTrade?.isSuspended ? 'bg-red-500' : selectedTrade?.isSuspended ? '': 'bg-green-500'}`}>
                                    {selectedTrade?.isSuspended ? "Suspended" : "Active"}
                                </span>
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-green-700 mt-4 text-center">
                            {selectedTrade?.firstName} {selectedTrade?.lastName}
                        </h2>
                        <p className="text-green-800 text-center">{selectedTrade?.trade}</p>
                        <p className="text-green-600 text-center">{selectedTrade?.companyName}</p>
                        <div className="mt-4 text-center">
                            <p className="text-pink-600 font-semibold">Experience: {selectedTrade?.experience}</p>
                            <p className="text-green-600">Postcode: {selectedTrade?.postcode}</p>
                            <p className="text-green-600">Email: {selectedTrade?.email}</p>
                            <p className="text-green-600">Phone: {selectedTrade?.phone}</p>
                        </div>

                        <div className="mt-4 flex flex-col items-center gap-4 justify-center text-center">
                            <button
                                className="bg-green-600 w-52 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                                onClick={() => onSuspend(selectedTrade)}
                            >
                                View public Profile
                            </button>
                            <button
                                className="bg-pink-600 w-52 text-white px-4 py-2 rounded-lg hover:bg-pink-700"
                                onClick={() => onSuspend(selectedTrade)}
                            >
                                Suspend This Account
                            </button>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={onClose}
                                className=" flex items-center text-white rounded-md justify-center gap-1 bg-red-600  p-2"
                            >
                                <IoClose size={24} /> close
                            </button>
                        </div>
                    </div>




                </div>

            </div>
        </div>
    );
};

export default TradeDetailsModal;