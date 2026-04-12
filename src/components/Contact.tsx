import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";

interface IFormData {
    name: string,
    email: string,
    subject: string,
    message: string,
}

export default function Contact() {
    const [formData, setFormData] = useState<IFormData>({
        name: "",
        email: "",
        message: "",
        subject: ""
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: string | null; message: string }>({
        type: null,
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("Configuration missing.");
            }

            await emailjs.send(serviceId, templateId, { ...formData }, publicKey);

            setSubmitStatus({
                type: "success",
                message: "Message sent! I'll get back to you soon.",
            });
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (err: any) {
            setSubmitStatus({
                type: "error",
                message: "Failed to send. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-emerald-500/50 transition-all text-gray-200 placeholder:text-gray-500";

    return (
        <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
                <p className="text-gray-400">Have a project in mind or just want to say hi?</p>
            </div>

            <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-3xl border border-white/5 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className={inputClasses}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className={inputClasses}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        required
                        className={inputClasses}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        required
                        rows={5}
                        className={inputClasses}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="group w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                    {isLoading ? (
                        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            <span>Send Message</span>
                            <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                    )}
                </button>

                {submitStatus.type && (
                    <div className={`flex items-center gap-3 p-4 rounded-xl animate-fade-in ${submitStatus.type === "success" ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                        }`}>
                        {submitStatus.type === "success" ? <FaCheckCircle /> : <FiAlertCircle />}
                        <p className="text-sm">{submitStatus.message}</p>
                    </div>
                )}
            </form>
        </section>
    );
}