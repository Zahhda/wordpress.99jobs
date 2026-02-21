import { CheckCircle2, Play, BookOpen, Clock, Award, Star } from "lucide-react";

const CourseSection = () => {
    const WHATSAPP_URL = "https://wa.me/919251271208?text=Hi%2099Jobs%2C%20I%20want%20to%20enroll%20in%20the%20Masterclass.";

    const modules = [
        { title: "Resume Building & ATS Secrets", duration: "2 Hours" },
        { title: "LinkedIn Optimization & Networking", duration: "1.5 Hours" },
        { title: "Cold Emailing Strategies that Work", duration: "1 Hour" },
        { title: "Cracking the HR Interview", duration: "2.5 Hours" },
    ];

    return (
        <section id="courses" className="py-20 bg-slate-950 text-slate-50 relative overflow-hidden">
            {/* Decorative gradients */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50 shadow-sm mb-4">
                        <Star className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                        <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
                            Premium Video Course
                        </span>
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mt-2 mb-4 tracking-tight text-white">
                        The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Career Masterclass</span>
                    </h2>
                    <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        A step-by-step video training program designed to take you from endless rejections to landing multiple high-paying job offers.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
                    {/* Video Preview Side */}
                    <div className="lg:col-span-7 relative group">
                        {/* Card Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 flex flex-col h-full">
                            <div className="aspect-[16/9] bg-slate-950 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Course Preview"
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex items-center justify-center">
                                    <div className="w-24 h-24 bg-orange-500/90 text-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-orange-500 transition-all shadow-[0_0_40px_rgba(249,115,22,0.5)] backdrop-blur-md">
                                        <Play className="w-10 h-10 ml-2" fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-slate-900 relative">
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
                                        <Clock className="w-4 h-4 text-orange-400" />
                                        7 Hours
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
                                        <BookOpen className="w-4 h-4 text-blue-400" />
                                        4 Modules
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
                                        <Award className="w-4 h-4 text-emerald-400" />
                                        Certificate
                                    </div>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Join <strong className="text-white">10,000+ students</strong> who have transformed their careers with our proven strategies. High production quality, highly actionable advice, and real-world corporate examples.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Details Side */}
                    <div className="lg:col-span-5 space-y-6">
                        <div>
                            <h3 className="text-xl font-bold font-heading mb-4 flex items-center gap-3 text-white">
                                What You'll Learn
                                <span className="h-px flex-1 bg-slate-800"></span>
                            </h3>
                            <div className="space-y-3">
                                {modules.map((mod, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-orange-500/50 hover:bg-slate-800 transition-all duration-300 group">
                                        <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 text-orange-400 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 flex items-center justify-center font-black text-xs shrink-0 transition-colors">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm">{mod.title}</h4>
                                            <p className="text-xs text-slate-400 mt-0.5">{mod.duration}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 relative overflow-hidden shadow-xl">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-[40px]"></div>

                            <div className="relative z-10">
                                <div className="flex items-end gap-3 mb-5">
                                    <div className="text-sm text-slate-500 line-through decoration-red-500/50 decoration-2 font-semibold pb-1">₹4,999</div>
                                    <div className="text-4xl md:text-5xl font-black text-white font-heading tracking-tight">₹499</div>
                                    <div className="text-[10px] font-bold text-orange-950 bg-orange-400 px-2 py-1 rounded-full mb-1.5 uppercase tracking-wide">90% OFF</div>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {["Lifetime Access to Video Lessons", "Downloadable Resource Vault", "Private Community Access", "1-on-1 Mentorship Session"].map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white font-black text-lg px-6 py-4 rounded-xl hover:bg-orange-600 hover:scale-[1.02] transition-all duration-300 shadow-[0_5px_20px_-5px_rgba(249,115,22,0.5)] uppercase tracking-wide"
                                >
                                    Enroll into Masterclass
                                    <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </a>
                                <p className="text-center text-[10px] text-slate-500 mt-3 font-medium uppercase tracking-widest">
                                    Instant Access via WhatsApp UPI
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseSection;
