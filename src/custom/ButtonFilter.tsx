

const FilterButton = ({ label, onClick, isActive }:any) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-white ${
        isActive ? 'bg-blue-500' : 'bg-[#050709]'
      } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 rounded-full`}
    >
      {label}
    </button>
  );
};

export default FilterButton;
