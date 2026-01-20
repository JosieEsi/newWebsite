import { motion } from "framer-motion";

const Tab = ({ label, onClick, href, className = "" }) => {
  const buttonContent = (
    <motion.button
      onClick={onClick}
      className={`justify-center items-center px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none rounded-lg transition-all duration-300 ${className}`}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(248, 154, 35, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

export default Tab;
