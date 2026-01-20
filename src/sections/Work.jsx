import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { map } from "../assets/images";
import Button from "../components/Button";

const Work = () => {
  const navigate = useNavigate();

  return (
    <section
      id="work"
      className="max-container items-center justify-between gap-10 w-full flex max-sm:flex-col mt-10 max-sm:mt-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="flex-1 flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={map}
          alt="Map"
          width={300}
          height={250}
          className="object-contain max-w-full h-auto"
        />
      </motion.div>
      <motion.div
        className="flex flex-1 flex-col"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="font-poppins font-bold text-4xl lg:text-6xl text-stone-700 lg:max-w-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Where We Work
        </motion.h2>
        <p className="font-poppins text-stone-500 lg:max-w-lg py-4 leading-relaxed">
          PDA is a social development organization in Ghana with operations in
          Cote D'Ivoire, Cameroon, Kenya, Uganda, and other African countries
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/what-we-do" onClick={(e) => { e.preventDefault(); navigate("/what-we-do"); }}>
            <Button label="READ MORE" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Work;
