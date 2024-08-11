import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './Components/Home';
import Work from './Components/Work';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <AnimatePresence initial={false}>
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Home />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/home"
            element={
              <AnimatePresence initial={false}>
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Home />
                  
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path="/work"
            element={
              <AnimatePresence initial={false}>
                <motion.div
                  key="work"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Work />
                </motion.div>
              </AnimatePresence>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
