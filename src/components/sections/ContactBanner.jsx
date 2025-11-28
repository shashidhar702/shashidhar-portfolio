import { Button } from "@/components/ui/button";
import LinkedInIcon from "../common/LinkedInIcon";
import { MailIcon } from "lucide-react";

export default function ContactBanner() {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl mt-20">
            <div className="text-center px-6 md:px-20">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Let’s Build Something Together
                </h2>

                <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">
                    I’m open to full-time roles, consulting, and SAP BTP + full-stack projects.
                    Feel free to reach out — I usually respond within 24 hours.
                </p>

                <p className="text-slate-400 mt-10">
                    📩 Email: <span className="font-medium">Shashidhar702@gmail.com</span> 📞 Phone: <span className="font-medium">+1-(551) 260-2546</span>
                </p>

                <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">

                    <Button
                        size="lg"
                        variant="outline"
                        className="cursor-pointer px-8 py-6 text-lg bg-white text-slate-900 rounded-full border border-slate-300 hover:bg-slate-100 flex items-center gap-3 shadow-sm"
                        onClick={() => {
                            window.open(
                                "https://www.linkedin.com/in/shashidhar-reddy-chamakura-450883194/",
                                "_blank"
                            );
                        }}
                    >
                        <LinkedInIcon className="w-5 h-5" />
                        <span className="font-semibold">LinkedIn</span>
                    </Button>
                    <a  href="mailto:shashidhar702@gmail.com">
                        <Button
                            size="lg"
                            variant="outline"
                            className="cursor-pointer px-8 py-6 text-lg bg-white text-slate-900 rounded-full border border-slate-300 hover:bg-slate-100 flex items-center gap-3 shadow-sm"
                           
                        >
                            <MailIcon className="w-5 h-5" />
                            <span className="font-semibold">Email</span>
                        </Button>
                    </a>

                </div>


            </div>
        </section>
    );
}