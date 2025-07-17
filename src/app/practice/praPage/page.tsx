"use client";
import { getImagesSlider } from "@/app/api";
import { useQuery } from "@tanstack/react-query";

interface ImageData {
  images: string[];
  count: number;
}

const PrePractice = () => {
  const { data, isLoading, isFetching } = useQuery<ImageData>({
    queryKey: ["images"],
    queryFn: () => getImagesSlider(),
    // select:(data)=>{},
    refetchOnReconnect: true,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    staleTime: 5000,
    gcTime: 7000,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pre Practice</h1>
      {data && (
        <div className="grid gap-4">
          {data.images.map((image, index) => (
            <div key={index} className="p-4 bg-gray-100">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PrePractice;
