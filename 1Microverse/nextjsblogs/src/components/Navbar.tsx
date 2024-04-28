import React from 'react'
import Link from 'next/link';
import { BookOpenCheck } from 'lucide-react';


const Navbar = () => {
  return (
    
    <div className="navbar bg--100">
          <div className="container">
          <div className="flex-1">
            <Link href="/"><BookOpenCheck color='green' /></Link>
          </div>
          <div className="flex-none">
            <Link href='/CreatePage' className="btn btn-ghost">
              Create Post
            </Link>
      </div>
      </div>
</div>
  )
}

export default Navbar