import React from "react"

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-zinc-400 py-20">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm">Copyright © {new Date().getFullYear()} My Company</p>
                    <nav className="flex">
                        <a href="#" className="px-2  hover:underline">
                            About
                        </a>
                        <a href="#" className="px-2  hover:underline">
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
