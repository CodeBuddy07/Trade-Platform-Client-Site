import { useState, useEffect } from "react";
import { MdOutlineModeEditOutline, MdClose } from "react-icons/md";
import { SlCloudUpload } from "react-icons/sl";
import { FaArrowLeft, FaArrowRight, FaTrash } from "react-icons/fa";
import axios from "axios";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import { toast } from "sonner";

const JobGalleries = ({ user }) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const axiosSecure = useAxiosSecure();
  
    const fetchImages = async () => {
      try {
        const res = await axiosSecure.get("/get-job-gallery");
        console.log(res);

          setImages(res?.data?.jobGalleries || []);
        
      } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong!");
      }
    };

  useEffect(() => {
    
    fetchImages();
  
  }, [axiosSecure]); 

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

  // Handle Image Upload
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("jobImage", file);

    setUploading(true);

    try {
      const response = await axiosSecure.post(
        "/update-profile/job-gallery",
        formData
      );

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("something went wrong");
      }

      fetchImages();
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error(error.response.data.message || "something went wrong");
    } finally {
      setUploading(false);
    }
  };

  // Delete Image
  const deleteImage = async () => {
    setDeleting(true);
    if (!selectedImage) return;

    try {
      const response = await axiosSecure.post("/delete-job-image", {
        imageUrl: selectedImage, // Sending image to delete
      });
      if (response.data.success) {
        toast.success(response.data.message);
        setDeleting(false);
      } else {
        toast.error("something went wrong");
        setDeleting(false);
      }
      const updatedImages = images.filter((img) => img !== selectedImage);
      fetchImages()
      closeModal();
      setDeleting(false);
    } catch (error) {
      console.error("Error deleting image:", error);
      toast.error( error?.response?.data.message || "Error deleting image");
      setDeleting(false);
    }
  };

  return (
    <div className="p-10 lg:px-32 space-y-4 rounded-md shadow-md bg-white">
      {/* Upload Section */}
      <label className="border flex cursor-pointer hover:bg-gray-100 transition-all justify-center items-center border-dashed border-gray-600 h-40">
        <div className="flex flex-col items-center gap-2">
          <SlCloudUpload size={30} />
          <h4>{uploading ? "Uploading..." : "Upload image"}</h4>
        </div>
        <input
            disabled={uploading}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </label>
      <hr className="border-gray-300" />

      {/* Image Gallery */}
      <div className="grid md:grid-cols-4 grid-cols-2 lg:grid-cols-7 gap-4">
        {images.length > 0 ? (
          images.map((img, i) => (
            <div key={i} className="relative h-20 border group">
              <img
                src={img.url}
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
              src={selectedImage.url}
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
              disabled={deleting}
                className="bg-red-500 flex items-center justify-center gap-2 text-white px-4 py-2 rounded-md"
                onClick={deleteImage}
              >
                <FaTrash /> { deleting? "Deleting.." : "Delete"}
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
