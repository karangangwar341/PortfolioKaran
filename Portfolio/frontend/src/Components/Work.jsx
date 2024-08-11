import React, { useState, useEffect, useRef } from "react";

import Header from "./Header";
import Footer from "./Footer";
import mzone1 from "../assets/mzone1.png";
import mzone2 from "../assets/mzone2.png";
import Grievease1 from "../assets/Grievease1.png";
import Grievease2 from "../assets/Grievease2.png";
import koinx1 from "../assets/koinx1.png";
import koinx2 from "../assets/koinx2.png";
import chatMitra1 from "../assets/Chatmitra1.png";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Icons for GitHub and external link

import chatMitra2 from "../assets/Chatmitra2.png";

import movie1 from "../assets/movie1.png";

import movie2 from "../assets/movie2.png";

import "./Ds.css";
import Work2 from "./UI";
const items = [
  {
    id: 1,
    url: "https://mzone.vercel.app/",
    github: "https://github.com/karangangwar341/mzone", // Replace with actual GitHub URL
    title: "Mzone",
    subtitle: "Revolutionary Music App",
    description:
      "Engineered Mzone, a groundbreaking music application, with Node.js backend, Firebase database, and React frontend.",
    images: [mzone1, mzone2],
  },
  {
    id: 2,
    url: "https://griev-ease-ten.vercel.app/",
    github: "https://github.com/karangangwar341/grievease", // Replace with actual GitHub URL
    title: "GrievEase",
    subtitle: "Transparent Grievance Management Portal",
    description:
      "Reduced the time to report a complaint by over 50%. Crafted an intuitive UI using Figma.",
    images: [Grievease1, Grievease2],
  },
  {
    id: 3,
    url: "https://placeholder.com",
    github: "https://github.com/yourusername/signlanguage", // Replace with actual GitHub URL
    title: "SignLanguageReader",
    subtitle: "Sign Language Detection",
    description:
      "Developed a Python code to detect and translate sign language alphabets.",
    images: [
      "https://via.placeholder.com/400x300.png?text=SignLanguageReader+Image1",
      "https://via.placeholder.com/400x300.png?text=SignLanguageReader+Image2",
    ],
  },
  {
    id: 4,
    url: "https://placeholder.com",
    github: "https://github.com/yourusername/chatmitra", // Replace with actual GitHub URL
    title: "ChatMitra",
    subtitle: "AI-Powered Chatbot",
    description:
      "Developed ChatMitra, a chatbot app with a noticeboard and infographics.",
    images: [chatMitra1, chatMitra2],
  },
  {
    id: 5,
    url: "https://placeholder.com",
    github: "https://github.com/karangangwar341/moviemania", // Replace with actual GitHub URL
    title: "MovieMania",
    subtitle: "Movie Details at your fingertips",
    description:
      "MovieMania is a movie web application that displays a list of movies and details.",
    images: [movie1, movie2],
  },
];

const Work = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const totalImages = items.reduce(
    (total, item) => total + item.images.length,
    0
  );
  let x = Math.random() * 30000;
  const containerRef = useRef(null);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, x);

    return () => clearInterval(timer);
  }, [selectedId, totalImages]); // Include totalImages in the dependency array

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalImages - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < totalImages - 1 ? prevIndex + 1 : 0
    );
  };
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const items = Array.from(container.children);
      const center = container.scrollLeft + container.offsetWidth / 2;

      items.forEach((item) => {
        const distanceFromCenter = Math.abs(
          item.offsetLeft + item.offsetWidth / 2 - center
        );
        const scale = Math.max(
          0.5,
          1 - Math.min(0.5, distanceFromCenter / 700)
        );
        item.style.transform = `scale(${scale})`;
      });
    };

    const container = containerRef.current;
    const items = Array.from(container.children);
    const center = container.scrollLeft + container.offsetWidth / 2;

    items.forEach((item) => {
      const distanceFromCenter = Math.abs(
        item.offsetLeft + item.offsetWidth / 2 - center
      );
      const scale = Math.max(
        0.5,
        1 - 2.2 * Math.min(0.5, distanceFromCenter / 1000)
      );
      item.style.transform = `scale(${scale})`;
    });

    containerRef.current.addEventListener("scroll", handleScroll);
    return () =>
      containerRef.current.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" bbbbbbbbbbbb h-full z-40 w-screen bg-deep-purple">
      <Header />

      <h1 className="text-4xl mb-3 pt-24 flex items-center justify-center  text-center font-semibold ">
        Web Dev Projects
      </h1>
      <main
        style={{ height: "75vh", zIndex: 0 }}
        className=" mx-1 px-0 pt-24 h-full z-0 overflow-hidden"
      >
        <section className="mb-16  z-0 h-full overflow-y-auto">
          <style>
            {`
              ::-webkit-scrollbar {
                width: 0px; /* Safari and Chrome */
              }
              ::-webkit-scrollbar-thumb {
                background: transparent;
              }
            `}
          </style>

          <div
            ref={containerRef}
            className=" ml-3 flex overflow-x-scroll py-12 px-0 mx-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="p-6 z-0 shadow-2xl hover:shadow-white/40 rounded-xl shadow-white/20 cursor-pointer transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex-shrink-0"
                style={{ minWidth: "400px" }}
                onClick={() => {
                  setSelectedId(item.id);
                  setCurrentImageIndex(0);
                }}
              >
                <img
                  src={item.images[currentImageIndex]}
                  alt={item.title}
                  className="w-full h-60 object-cover rounded-lg transition-all duration-300 ease-in-out"
                />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div className="flex flex-col items-center gap-4">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-600 text-white rounded-full flex items-center gap-2 hover:bg-gray-500 transition-colors duration-300"
                  >
                    <FaGithub size={24} />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-500 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt size={24} />
                    <span className="font-medium">Demo</span>
                  </a>
                </div>
              </div>
                <h5 className="text-xl font-semibold mt-2">{item.subtitle}</h5>
                <h2 className="text-2xl font-bold mt-2">{item.title}</h2>
              </div>
            ))}
          </div>
        </section>

        {selectedId && (
          <div
            className={`fixed backdrop-blur-lg inset-0 bg-black/70  flex items-center justify-center z-50 ${
              selectedId ? "modal-fade-in" : "modal-fade-out"
            }`}
          >
            <article className="flex-col bg-white/20 backdrop:blur-2xl rounded-xl w-full 0 md:w-1/2 md:h-3/4 shadow-lg p-8 mx-auto">
              <img
                src={
                  items.find((item) => item.id === selectedId).images[
                    currentImageIndex
                  ]
                }
                alt={items.find((item) => item.id === selectedId).title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h5 className="text-xl font-semibold  mt-4">
                {items.find((item) => item.id === selectedId).subtitle}
              </h5>
              <h2 className="text-2xl font-bold mt-2">
                {items.find((item) => item.id === selectedId).title}
              </h2>
              <p className="mt-4">
                {items.find((item) => item.id === selectedId).description}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePrevImage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                >
                  Previous
                </button>
                <button
                  onClick={handleNextImage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                >
                  Next
                </button>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="mt-6 px-4 py-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 absolute top-4 right-4"
              >
                Close
              </button>
            </article>
          </div>
        )}
      </main>

      <Work2 />

      <Footer />
    </div>
  );
};

export default Work;
