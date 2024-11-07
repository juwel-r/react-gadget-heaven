import React from 'react';
import { PiSmileySadBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
document.title="Page Not Found | Gadget Heaven"

    return (
        <div className=' w-10/12 md:w-4/6 mx-auto'>
           <div className="text-3xl text-darkGray font-bold text-center mt-10 flex flex-col justify-center items-center gap-4 border-2 border-primary p-10 rounded-3xl">
      <p className="flex gap-6 text-5xl text-primary">
        404 <PiSmileySadBold />
      </p>
      <p>This Page is not Found.</p>
      <p className='text-lg font-semibold'>The page you're looking for doesn't exist or an error occurred.</p>
          <Link to='/'> <button className='btn bg-transparent border-2 border-primary text-primary font-bold text-2xl rounded-3xl py-2 px-6 h-full mt-4'>Go to Home</button></Link>
    </div>
        </div>
    );
};

export default ErrorPage;