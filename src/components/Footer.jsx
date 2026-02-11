import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
    Product: ["Features", "Integrations", "Pricing", "Documentation"],
    Company: ["About Us", "Careers", "Blog", "Contact"],
    Resources: ["Help Center", "Community", "Events", "Guides"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
}

export default function Footer() {
    return(
       <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-lg font-semibold mb-4">{category}</h3>
                            <ul className="space-y-2">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-gray-300 hover:text-white transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 ElyonCode. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}