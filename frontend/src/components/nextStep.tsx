import React from 'react'
import { Button } from './ui/button'

const NextStep = () => {
    return (
        <section className="w-full bg-gray-50 py-20 md:py-24" id="cta">
            <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Take the Next Step?</h2>
                <p className="max-w-xl text-gray-600">Start analyzing your resume today and increase your chances of landing your dream job.</p>
                <Button> Get Started for Free</Button>
            </div>
        </section>
    )
}

export default NextStep