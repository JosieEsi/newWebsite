const ServiceCard = ({ imgURL, label, subtext, button, onClick }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 flex-grow-0 max-sm:flex-grow bg-slate-50">
      <div className="w-20 h-20 flex ml-20 rounded-full max-sm:w-15 max-sm:h-15 max-sm:ml-10">
        <img
          src={imgURL}
          alt={label}
          width={80}
          height={180}
          className="justify-center items-center flex"
        />
      </div>
      <h3 className="mt-5 font-poppins text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-poppins text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
      <button
        onClick={onClick}
        className="justify-center items-center rounded-xl px-7 py-4 mt-8 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none max-sm:text-sm max-sm:px-4 max-sm:py-4 hover:scale-110 "
      >
        {button}
      </button>
    </div>
  );
};

export default ServiceCard;
