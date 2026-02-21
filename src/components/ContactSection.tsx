import { useState } from "react";
import { Send, MapPin, Phone, Mail, CheckCircle } from "lucide-react";

const ContactSection = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:3001/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while sending the message.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-muted/30 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold text-secondary uppercase tracking-wider bg-secondary/10 px-4 py-1.5 rounded-full shadow-sm">
                        Get In Touch
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mt-6 mb-4" itemProp="headline">
                        Let's Talk About Your Career
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto" itemProp="description">
                        Have questions about our packs, courses, or need custom career advice? Drop us a message and our team will get back to you within 24 hours.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 items-start">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-6" itemScope itemType="https://schema.org/Organization">
                        <meta itemProp="name" content="99Jobs" />
                        <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-xl h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

                            <h3 className="text-2xl font-bold font-heading mb-6">Contact Information</h3>
                            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                                Fill out the form and our team will get back to you within 24 hours. Connect with us directly for faster responses.
                            </p>

                            <div className="space-y-6 relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white/90 text-sm mb-1">Phone / WhatsApp</h4>
                                        <a href="tel:+919251271208" className="text-white hover:underline block" itemProp="telephone">+91 92512 71208</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white/90 text-sm mb-1">Email</h4>
                                        <a href="mailto:99jobsgrabnow@gmail.com" className="text-white hover:underline block" itemProp="email">99jobsgrabnow@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white/90 text-sm mb-3">Our Locations</h4>

                                        <div className="space-y-4">
                                            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                                <strong className="text-white block text-sm">Headquarters</strong>
                                                <address className="text-white/90 text-sm not-italic leading-tight">
                                                    <span itemProp="streetAddress">Tech Park, Sector 44</span><br />
                                                    <span itemProp="addressLocality">Gurugram</span>, <span itemProp="addressRegion">Haryana</span> - <span itemProp="postalCode">122003</span>
                                                </address>
                                            </div>

                                            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                                <strong className="text-white block text-sm">Delhi Office</strong>
                                                <address className="text-white/90 text-sm not-italic leading-tight">
                                                    <span itemProp="streetAddress">Connaught Place, Block C</span><br />
                                                    <span itemProp="addressLocality">New Delhi</span>, <span itemProp="addressRegion">Delhi</span> - <span itemProp="postalCode">110001</span>
                                                </address>
                                            </div>

                                            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                                <strong className="text-white block text-sm">Bangalore Hub</strong>
                                                <address className="text-white/90 text-sm not-italic leading-tight">
                                                    <span itemProp="streetAddress">HSR Layout, Sector 2</span><br />
                                                    <span itemProp="addressLocality">Bengaluru</span>, <span itemProp="addressRegion">Karnataka</span> - <span itemProp="postalCode">560102</span>
                                                </address>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3 bg-card rounded-2xl p-8 border border-border shadow-lg relative">
                        {isSubmitted ? (
                            <div className="absolute inset-0 bg-card rounded-2xl flex flex-col items-center justify-center z-10 p-8 text-center animate-in fade-in zoom-in duration-300">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-muted-foreground max-w-sm mx-auto">
                                    Thank you for reaching out. Our career experts will get back to you shortly.
                                </p>
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                                {isLoading ? "Sending..." : "Send Message"}
                                {!isLoading && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
