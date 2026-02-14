import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function AuthLayout({ title, children }: Props) {
  return (
    <div className="container">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2>{title}</h2>
        {children}
      </motion.div>
    </div>
  );
}
