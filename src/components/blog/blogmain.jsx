import { BiRightArrow } from "react-icons/bi";
import { BlogPage } from "../../SampleData";
import { Category } from "../category";

export const BlogMain = () => {
  return (
    <div className="bg-black text-white py-8">
      <h1 className="text-4xl text-center font-semibold mt-4">To-Let Tales</h1>
      <h1 className="text-center mt-2 text-[#6CC1B6]">Dive into a Sea of Endless Stories and Insights</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-5 mb-8 mt-10 w-full">
        {BlogPage.map((data, index) => (
          <div key={index} className=" rounded-xl p-5 flex flex-col">
            <img src={data?.image1} alt="" className="rounded-xl mb-4" />
            <p className="text-gray-400 mb-2">{data?.date}</p>
            <h1 className="text-[#6CC1B6] font-semibold text-xl mb-2">{data?.title.split(" ").slice(0, 10).join(" ")}{data?.title.split(" ").length > 10 && "..."}</h1>
            <p className="mb-4">{data?.des1.split(" ").slice(0, 10).join(" ")}{data?.des1.split(" ").length > 10 && "..."}</p>
            <p className="flex items-center text-sm gap-2 text-[#6CC1B6] cursor-pointer mb-4">Read More <BiRightArrow /></p>
            <p className="text-gray-400">{data?.author}</p>
            <p className="text-gray-400">{data?.designation}</p>
          </div>
        ))}
      </div>
      <Category/>
    </div>
  );
};
