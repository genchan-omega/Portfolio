// /src/project/page.tsx

// import Image from "next/image";
// import Link from "next/link";

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Subtitle from '@/components/Subtitle/Subtitle';
import Working from "@/components/Working/Working";

export default function Project() {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-screen mx-auto items-center justify-center">
      <div className='w-full max-w-screen-md mx-auto flex-1'>
        <Header />
        <Subtitle 
          name="Project"
        />
        
        <Working />
      
      </div>
      <Footer />
    </div>
  );
}
