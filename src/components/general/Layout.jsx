import { AnimatePresence, motion } from "framer-motion";
import { useOutlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  const outlet = useOutlet();
  return (
    <div className="container">
      <Header />
      <div className="flex gap-6">
        <div className="mr-[380px]">
          <Sidebar />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="flex-1 mt-4"
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Layout;
