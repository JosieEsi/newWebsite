const NewButton = ({ label }) => {
  return (
    <button className="justify-center items-center px-7 py-3 border font-poppins text-base leading-none bg-orange text-black font-bold border-none max-sm:text-sm max-sm:px-4 max-sm:py-2 hover:scale-110">
      {label}
    </button>
  );
};

export default NewButton;
