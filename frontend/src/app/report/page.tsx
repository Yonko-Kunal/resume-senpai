import React from 'react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Link from "next/link";

const Report = () => {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <Navbar variant='dashboard' />

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Report Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Analysis Report</h1>
                    <p className="text-gray-600">John_Doe_Resume_v3.pdf for Senior Product Manager</p>
                </div>

                {/* Match Score Section */}
                <div className=" rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-2">Match Score</h2>
                            <div className="text-5xl font-bold text-gray-900">72%</div>
                        </div>
                        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                            Good Match
                        </div>
                    </div>
                </div>

                {/* Summary Section */}
                <div className=" rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Summary / Feedback</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Your resume demonstrates a strong foundation in software engineering principles and
                        practices. The projects section effectively highlights your technical skills and problem-
                        solving abilities. However, there are areas for improvement to better align your resume with
                        the target role and enhance its overall impact.
                    </p>
                </div>

                {/* Missing Skills Section */}
                <div className=" rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Missing Skills / Keywords</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                            Cloud Computing (AWS, Azure, GCP)
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                            DevOps (CI/CD, Docker, Kubernetes)
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                            Agile Methodologies (Scrum, Kanban)
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                            System Design
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                            API Design
                        </li>
                    </ul>
                </div>

                {/* Grammar & Language Section */}
                <div className=" rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Grammar & Language Suggestions</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2"></span>
                            <span>Consider replacing "Responsible for" with more action-oriented verbs like "Managed," "Led," or "Developed."</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2"></span>
                            <span>The phrase "team player" is cliché. Showcase collaboration through specific examples in your experience section.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2"></span>
                            <span>Minor typo found in the project description for "Project Phoenix".</span>
                        </li>
                    </ul>
                </div>

                {/* Suggested Improvements Section */}
                <div className=" rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Suggested Improvements</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Quantify Achievements</h3>
                            <p className="text-gray-700">
                                Instead of just listing responsibilities, add metrics to show impact. For example, "Increased
                                API response time by 30%" is more powerful than "Improved API performance."
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Tailor Keywords</h3>
                            <p className="text-gray-700">
                                Review the job description and incorporate relevant keywords naturally throughout your
                                resume, especially in the work experience and skills sections.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Add a Professional Summary</h3>
                            <p className="text-gray-700">
                                Start with a 2-3 sentence summary that highlights your key qualifications and career goals.
                                This provides a quick overview for recruiters.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                    <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2">
                        Download Report (PDF)
                    </Button>

                    <Button variant="outline" className="px-6 py-2">
                        <Link href='/'>
                            Back to Dashboard

                        </Link>
                    </Button>
                </div>
            </main>
        </div>
    )
}

export default Report