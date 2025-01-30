import { useState } from "react";
import { MdOutlineModeEditOutline, MdClose } from "react-icons/md";
import { SlCloudUpload } from "react-icons/sl";
import { FaArrowLeft, FaArrowRight, FaTrash } from "react-icons/fa";

const JobGalleries = () => {
    const images = [
        {
            link: "https://cdn.pixabay.com/photo/2022/10/23/02/26/hotel-7540353_640.jpg",
        },
        {
            link: "https://cdn.pixabay.com/photo/2016/11/29/01/25/adult-1866533_640.jpg",
        },
        {
            link: "https://cdn.pixabay.com/photo/2024/01/10/16/18/computer-8499917_640.jpg",
        },
        {
            link: "https://cdn.pixabay.com/photo/2012/11/28/10/32/welding-67640_640.jpg",
        },
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Open Modal
    const openModal = (index) => {
        setSelectedImage(images[index]);
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
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
        setCurrentIndex(nextIndex);
    };

    // Navigate Prev
    const prevImage = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
        setCurrentIndex(prevIndex);
    };

    // Delete Image
    const deleteImage = () => {
        const updatedImages = images.filter((_, i) => i !== currentIndex);
        if (updatedImages.length > 0) {
            setSelectedImage(updatedImages[0]);
            setCurrentIndex(0);
        } else {
            closeModal();
        }
    };

    return (
        <div className='p-10 px-32 space-y-4 rounded-md shadow-md bg-white'>
            <div className='border flex cursor-pointer hover:bg-gray-100 transition-all justify-center items-center border-dashed border-gray-600 h-40'>
                <div className='flex flex-col items-center gap-2'>
                    <SlCloudUpload size={30} />
                    <h4>Upload image</h4>
                </div>
            </div>
            <hr className='border-gray-300' />

            <div className='grid grid-cols-7 gap-4'>
                {images.length > 0 ? (
                    images.map((img, i) => (
                        <div key={i} className="relative h-20 border group">
                            <img
                                src={img.link}
                                className="w-full h-full object-cover transition-all duration-200 group-hover:opacity-70"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-all duration-200 group-hover:opacity-70"></div>
                            <MdOutlineModeEditOutline
                                className="absolute top-2 cursor-pointer right-2 text-white opacity-0 transition-all duration-200 group-hover:opacity-100"
                                onClick={() => openModal(i)}
                            />
                        </div>
                    ))
                ) : (
                    <h4 className="font-bold">No Galleries found</h4>
                )}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
                    <div className="relative bg-white md:p-4 rounded-md max-w-3xl md:pt-14 pt-10 w-full flex flex-col items-center">
                        <MdClose
                            className="absolute mb-4 top-2 right-2 cursor-pointer text-2xl"
                            onClick={closeModal}
                        />
                        <img
                            src={selectedImage.link}
                            className="w-full max-h-[500px] object-contain"
                        />
                        <div className="flex justify-between w-full mt-4">
                            <button
                                className="bg-gray-200 px-4 py-2 rounded-md"
                                onClick={prevImage}
                            >
                                <FaArrowLeft />
                            </button>
                            <button
                                className="bg-red-500 flex items-center justify-center gap-2 text-white px-4 py-2 rounded-md"
                                onClick={deleteImage}
                            >
                                <FaTrash /> Delete
                            </button>
                            <button
                                className="bg-gray-200 px-4 py-2 rounded-md"
                                onClick={nextImage}
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

export default JobGalleries;
