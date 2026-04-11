import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheckCircle } from "react-icons/fa";
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
        type: null, // 'success' or 'error'
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
                throw new Error(
                    "EmailJS configuration is missing. Please check your environment variables."
                );
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: formData.subject
                },
                publicKey
            );

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon.",
            });
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (err: any) {
            console.error("EmailJS error:", err);
            setSubmitStatus({
                type: "error",
                message:
                    err?.text || "Failed to send message. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto bg-gray-800 rounded-xl">
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col justify-center gap-6 px-4 py-8">
                <h3 className="text-3xl font-bold text-center">Contact Form</h3>

                <div className="flex gap-2">
                    <label htmlFor="name" className="min-w-20">Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full border border-white rounded-md p-1.5"
                    />
                </div>

                <div className="flex gap-2">
                    <label htmlFor="email" className="min-w-20">Email: </label>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full border border-white rounded-md p-1.5"
                    />
                </div>

                <div className="flex gap-2">
                    <label htmlFor="subject" className="min-w-20">Subject: </label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter Subject"
                        required
                        className="w-full border border-white rounded-md p-1.5"
                    />
                </div>

                <div className="flex gap-2">
                    <label htmlFor="message" className="min-w-20">Message: </label>

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        rows={4}
                        className="w-full border border-white rounded-md p-1.5"
                    />
                </div>

                <button type="submit" className="w-full bg-blue-700 py-2 rounded cursor-pointer" disabled={isLoading}>
                    {isLoading ? "Sending Message" : "Send Message"}
                </button>

                {submitStatus.type && (
                    <div
                        className={`flex items-center gap-3
                     p-4 rounded-xl ${submitStatus.type === "success"
                                ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                : "bg-red-500/10 border border-red-500/20 text-red-400"
                            }`}
                    >
                        {submitStatus.type === "success" ? (
                            <FaCheckCircle className="w-5 h-5 shrink-0" />
                        ) : (
                            <FiAlertCircle className="w-5 h-5 shrink-0" />
                        )}
                        <p className="text-sm">{submitStatus.message}</p>
                    </div>
                )}
            </form>
        </div>
    );
}