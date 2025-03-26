import React from "react";
import { motion } from "framer-motion";

interface Trainer {
  id: number;
  name: string;
  photo: string;
}

const trainers: Trainer[] = [
  { id: 1, name: "Prof Dinesh", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80" },
  { id: 2, name: "Prof cruz", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80" },
  { id: 3, name: "Prof Jesu Raja", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80" },
  { id: 4, name: "Priscilla", photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80" },
  { id: 5, name: "Sai Krisshna", photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80" },
  { id: 6, name: "Janakiraman", photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.1 },
  }),
};

const TrainersPage: React.FC = () => {
  return (
    <section className="py-10 px-4 bg-gradient-to-b from-primary/10 to-secondary/10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Meet Our Trainers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              custom={index}
              variants={cardVariants}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <img
                src={trainer.photo}
                alt={`Trainer ${trainer.name}`}
                className="aspect-square w-20 object-cover rounded-full mb-2"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-primary">
                {trainer.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TrainersPage;
