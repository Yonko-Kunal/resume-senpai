import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type NavbarProps = {
    variant?: "default" | "dashboard";
};

const Navbar = ({ variant = "default" }: NavbarProps) => {
    return (
        <div className="border-b border-gray-200">
            <nav className="flex justify-between items-center max-w-full mx-20 py-4">
                {/* Logo and Brand */}
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-lg font-medium text-gray-900"><Link href="/">
                        Resume Senpai
                    </Link>
                    </span>
                </div>

                {/* Navigation Items */}
                <div className="flex items-center">
                    {variant === "default" ? (
                        <>
                            <ul className="flex gap-8 text-sm text-gray-600 mr-8">
                                <li><Link
                                    href="/dashboard"
                                    className="cursor-pointer hover:text-gray-900 transition-colors"
                                >
                                    Dashboard
                                </Link>
                                </li>
                                <li className="cursor-pointer hover:text-gray-900 transition-colors">Product</li>
                                <li className="cursor-pointer hover:text-gray-900 transition-colors">Pricing</li>
                                <li className="cursor-pointer hover:text-gray-900 transition-colors">Resources</li>
                            </ul>
                            <Button className="cursor-pointer">Get Started</Button>
                        </>
                    ) : (
                        <ul className="flex gap-8 text-sm text-gray-600">
                            <li className="cursor-pointer hover:text-gray-900 transition-colors">Reports</li>
                            <li className="cursor-pointer hover:text-gray-900 transition-colors">Profile</li>
                            <li className="cursor-pointer hover:text-gray-900 transition-colors">Logout</li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
