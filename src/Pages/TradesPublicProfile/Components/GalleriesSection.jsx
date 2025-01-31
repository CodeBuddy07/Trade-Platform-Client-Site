import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdClose } from "react-icons/md";


const GalleriesSection = ({ galleryImages }) => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    // Open Modal
    const openModal = (index) => {
        setSelectedImage(galleryImages[index]);
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    // Close Modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
        setCurrentIndex(null);
    };

    // Navigate Next
    const nextImage = () => {
        if (galleryImages.length === 0) return;
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        setSelectedImage(galleryImages[nextIndex]);
        setCurrentIndex(nextIndex);
    };

    // Navigate Prev
    const prevImage = () => {
        if (galleryImages.length === 0) return;
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setSelectedImage(galleryImages[prevIndex]);
        setCurrentIndex(prevIndex);
    };


    return (
        <div>
            <div className=" space-y-2 px-4">
                <h3 className="text-xl font-semibold">Job Galleries</h3>

                <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">

                    {galleryImages.length > 0 ? (
                        galleryImages.map((img, i) => (
                            <div key={i} className="relative h-24  border group">
                                <img
                                    src={img.link}
                                    alt={`Gallery ${i}`}
                                    className="w-full h-full rounded-sm object-cover transition-all duration-200 group-hover:opacity-70"
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-all duration-200 group-hover:opacity-70"></div>
                                <FaEye
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-all duration-200 group-hover:opacity-100 cursor-pointer"
                                    onClick={() => openModal(i)}
                                />
                            </div>
                        ))
                    ) : (
                        <h4 className="font-bold">No Galleries found</h4>
                    )}
                </div>
            </div>
            {/* Modal */}
            {isModalOpen && selectedImage && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
                    <div className="relative bg-white md:p-4 rounded-md max-w-4xl md:pt-14 pt-10 w-full flex flex-col items-center">
                        <MdClose
                            className="absolute top-2 right-2 cursor-pointer text-2xl"
                            onClick={closeModal}
                        />
                        <img
                            src={selectedImage.link}
                            alt="Selected"
                            className="w-full max-h-[500px] object-contain"
                        />
                        <div className="flex justify-between w-full mt-4">
                            <button
                                className="bg-gray-200 px-4 py-2 rounded-md"
                                onClick={prevImage}
                                disabled={galleryImages.length === 1}
                            >
                                <FaArrowLeft />
                            </button>

                            <button
                                className="bg-gray-200 px-4 py-2 rounded-md"
                                onClick={nextImage}
                                disabled={galleryImages.length === 1}
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleriesSection;