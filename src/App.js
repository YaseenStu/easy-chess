import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'; // Importing the menu icon from react-icons

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex overflow-hidden h-full min-h-screen"> {/* Full viewport height and overflow handled */}
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white p-4 fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : `-translate-x-64`} transition-transform duration-300 ease-in-out w-64 z-30`}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold mb-4">Collections</h2>
          {/* Toggle Icon inside the sidebar always visible when open */}
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <FiMenu size={24} />
          </button>
        </div>
        <ul>
          <li className="mb-2">
            <a href="/" className="text-gray-300 hover:text-white">Collection 1</a>
          </li>
          <li className="mb-2">
            <a href="/" className="text-gray-300 hover:text-white">Collection 2</a>
          </li>
          <li className="mb-2">
            <a href="/" className="text-gray-300 hover:text-white">Collection 3</a>
          </li>
        </ul>
      </aside>

      {/* Main Content + Navbar (Wrapped in a container that moves with the sidebar) */}
      <div className="flex flex-col flex-1 min-h-screen">
        {/* Navigation Bar */}
        <nav className="bg-blue-500 p-4 w-full flex justify-between items-center">
          {/* Menu Icon on the Navbar, only visible when sidebar is closed */}
          {!isSidebarOpen && (
            <button onClick={toggleSidebar} className="text-white focus:outline-none z-40">
              <FiMenu size={24} />
            </button>
          )}
          <ul className="flex">
            {/* Navigation Links */}
            <li><a href="/" className="text-white hover:text-gray-200 mx-4">Home</a></li>
            <li><a href="/learn" className="text-white hover:text-gray-200 mx-4">Learn</a></li>
            <li><a href="/about" className="text-white hover:text-gray-200 mx-4">About</a></li>
          </ul>
        </nav>
        {/* Main Header */}
        <header className="bg-blue-500 text-white p-4 w-full">
          <h1 className="text-3xl">Welcome to React with Tailwind CSS!</h1>
          <p className="mt-2">This is a sample React component styled with Tailwind CSS.</p>
        </header>
        {/* Main Content */}
        <main className="container mx-auto mt-8 flex-1">
          <div className="p-4 bg-gray-200">
            <p className="text-lg">Start building your awesome React app with Tailwind CSS!</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
