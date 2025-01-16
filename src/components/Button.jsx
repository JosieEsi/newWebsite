const Button = ({ label }) => {
  return (
    <button className="justify-center items-center px-7 py-4 border font-poppins text-lg leading-none bg-red text-white font-bold border-none max-sm:text-sm max-sm:px-4 max-sm:py-2 hover:scale-110">
      {label}
    </button>
  );
};

export default Button;
