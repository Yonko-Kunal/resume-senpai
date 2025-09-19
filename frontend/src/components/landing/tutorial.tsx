import React from 'react'
import { Upload } from 'lucide-react';
import { Bot } from 'lucide-react';
import { FileText } from 'lucide-react';

const Tutorial = () => {
    return (
        <div className='flex justify-center items-center flex-col w-full bg-section py-20 md:py-24 gap-6 px-[1rem]'>
            <div className='flex items-center justify-center flex-col gap-6'>
                <h1 className='text-4xl font-bold text-center'>How It Works</h1>
                <p className='max-w-2xl mx-auto text-gray-600 md:text-xl/relaxed text-center font-light'>A simple three-step process to get your personalized resume analysis.</p>
            </div>
            <div className='flex md:flex-row flex-col items-center justify-center text-center gap-12'>
                <div className='max-w-[20rem] flex items-center justify-center flex-col'>
                    <Upload className='mb-6' />
                    <h3 className="text-xl font-bold">1. Upload Documents</h3>
                    <p className="text-gray-600">Easily upload your resume and the job description in PDF or DOCX format.</p>
                </div>
                <div className='max-w-[20rem] flex items-center justify-center flex-col'>
                    <Bot className='mb-6' />
                    <h3 className="text-xl font-bold">2. AI-Powered Analysis</h3>
                    <p className="text-gray-600">Our AI algorithms analyze the content, identifying key skills, experience, and qualifications.</p>
                </div>
                <div className='max-w-[20rem] flex items-center justify-center flex-col'>
                    <FileText className='mb-6' />
                    <h3 className="text-xl font-bold">3. Get Detailed Insights</h3>
                    <p className="text-gray-600">Receive a detailed report with your job probability, strengths, and weaknesses.</p>
                </div>
            </div>
        </div>
    )
}

export default Tutorial