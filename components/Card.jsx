import { FaLaptopCode } from "react-icons/fa";

export default function BlogCard({ title, date, description, category }) {
  return (
    <div className="bg-white border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-6">
      <div className="up flex items-center justify-between">
        <FaLaptopCode className="text-4xl text-blue-500 mb-4" />
        <p className="px-2 py-1 bg-green-600 text-slate-800 rounded-md">
          {category}
        </p>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
