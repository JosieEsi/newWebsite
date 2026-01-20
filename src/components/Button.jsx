import { motion } from "framer-motion";

const Button = ({ label, onClick, className = "", href, type = "button" }) => {
  const buttonContent = (
    <motion.button
      type={type}
      onClick={onClick}
      className={`justify-center items-center px-7 py-4 border font-poppins text-lg leading-none bg-red text-white font-bold border-none rounded-lg max-sm:text-sm max-sm:px-4 max-sm:py-2 transition-all duration-300 ${className}`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(247, 81, 35, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
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

export default Button;
