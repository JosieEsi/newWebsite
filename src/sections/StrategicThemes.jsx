import { motion } from "framer-motion";
import {
  Leaf,
  Users,
  GraduationCap,
  ShieldCheck,
  Briefcase,
  BarChart3,
} from "lucide-react";

const themes = [
  { title: "Sustainable Livelihoods", icon: Leaf },
  { title: "Community Development", icon: Users },
  { title: "Education & Child Protection", icon: GraduationCap },
  { title: "Governance & Accountability", icon: ShieldCheck },
  { title: "Private Sector Engagement", icon: Briefcase },
  { title: "Monitoring & Evaluation", icon: BarChart3 },
];

const StrategicThemes = () => {
  return (
    <section className="py-24 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-orange mb-14">
        Strategic Themes
      </h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto px-6"
      >
        {themes.map((theme, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.08 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center cursor-pointer group"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-orange flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <theme.icon size={36} className="text-white" />
            </div>

            <h3 className="font-semibold text-gray-800">
              {theme.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StrategicThemes;
