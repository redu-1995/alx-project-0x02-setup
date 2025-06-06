import React from "react";  
import { CardProps} from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200 w-full max-w-md mx-auto my-4">
      <h2 className="text-xl font-semibold mb-2 text-blue-700">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;