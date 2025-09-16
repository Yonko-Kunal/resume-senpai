import React from 'react'
import { FileUp } from 'lucide-react';

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center h-[100vh] gap-6 px-[1rem]'>
            <h1 className='md:max-w-3xl max-w-[24rem] text-center font-bold md:text-6xl text-4xl'>Unlock Your Career Potential</h1>
            <p className='md:max-w-xl max-w-[100vh] text-lg text-gray-600 text-center'>Our AI analyzes your resume against job descriptions to give you the edge.</p>
            <div className="flex w-full md:max-w-2xl max-w-[100vh] flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-gray-300 p-8 md:p-12">
                <span className="material-symbols-outlined text-5xl text-gray-400"> <FileUp /> </span>
                <p className="text-lg font-medium text-center">Drag and drop your resume and job description</p>
                <p className="text-sm text-gray-500">or</p>
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[var(--primary-color)] shadow-sm ring-1 ring-inset ring-gray-300 transition-colors hover:bg-gray-100">
                    Browse Files
                </button>
                <p className="text-xs text-gray-400">PDF, DOCX up to 10MB</p>
            </div>
        </div>
    )
}

export default Hero