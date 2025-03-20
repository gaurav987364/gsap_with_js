import React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, { opacity: 0, y: 20, duration: 1, ease: 'power3.out',stagger:1 });
  }, []);

  return (
    <div className="min-h-screen text-black flex flex-col items-center justify-center p-8 bg-[url(/world-map-1958132_1920.jpg)] bg-blend-darken bg-center bg-no-repeat">
      <header className="w-full flex justify-between items-center py-4 px-10 bg-gray-200 shadow-md fixed top-0 left-0 right-0">
        <nav>
          <ul className="flex gap-4">
            <li><Link href="/" className="hover:text-green-600">Home</Link></li>
            <li><Link href="/services" className="hover:text-green-600">Services</Link></li>
            <li><Link href="/blog" className="hover:text-green-600">Blog</Link></li>
            <li><Link href="/about" className="hover:text-green-600">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-green-600">Contact</Link></li>
          </ul>
        </nav>
        <div>
          <button  className="bg-green-500/70 text-white px-4 py-2 rounded-lg mr-2 cursor-pointer hover:bg-green-600">Login</button>
          <button className="bg-green-700 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-800">Book Demo</button>
        </div>
      </header>

      <main className="mt-20 flex items-center justify-around ">
        <div className=' w-1/2'>
        <h2 ref={textRef} className="text-7xl font-bold">
            <span>GHG</span> <span>Accounting</span> <span>Scope 1</span>, <span>Scope 2</span>, <span>Scope 3</span>
        </h2>
        <p className="mt-4 text-lg">Track, minimize, offset, and report your carbon emissions effortlessly to drive faster decarbonization progress.</p>
        </div>
        <div>
            <Image  
                width={500}
                height={100}
                src="/homepic.png" 
                alt="globe" 
            />
        </div>
      </main>
    </div>
  );
};

export default Home;
