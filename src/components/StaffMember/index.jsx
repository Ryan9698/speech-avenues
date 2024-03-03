export default function StaffMember({ name, role, bio, imageUrl }) {
  return (
    <div className="max-w-sm rounded  shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <img
        className="w-full h-[60vh] object-cover object-center"
        src={imageUrl}
        alt={`Portrait of ${name}`}
      />
      <div className="px-4 py-2 bg-gray-300">
        <div className="font-bold text-2xl mb-2 text-gray-800">{name}</div>
        <p className="text-gray-600 text-sm font-semibold text-base">{role}</p>
      </div>
      <div className="px-6 py-4 border-t">
        <p className="text-gray-600 text-sm">{bio}</p>
      </div>
    </div>
  );
}
