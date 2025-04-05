import React from "react";

const TeamMemberCard = ({ image, name, role, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
export default TeamMemberCard;
