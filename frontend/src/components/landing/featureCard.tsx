import React from 'react'

const FeatureCard = () => {
    return (
        <div className='py-16 px-4 max-w-6xl mx-auto'>
            {/* Header Section */}
            <div className='text-center mb-16'>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
                <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
                    Discover the powerful features that make ResumeAI the ultimate tool for job seekers.
                </p>
            </div>

            <div className='grid md:grid-cols-2 gap-12 max-w-4xl mx-auto'>
                {/* Feature 1 */}
                <div className='flex flex-col'>
                    <div className='mb-6'>
                        <img
                            alt="Job Probability Score Feature"
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                            src='/output1.svg'
                        />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Job Probability Score</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Get an accurate probability score indicating your chances of getting the job.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className='flex flex-col'>
                    <div className='mb-6'>
                        <img
                            alt="Detailed Resume Analysis Feature"
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                            src="/output2.svg"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Resume Analysis</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Receive a detailed analysis of your resume, highlighting strengths and weaknesses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard