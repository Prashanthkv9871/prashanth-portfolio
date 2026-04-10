const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm Prashanth 👋
            </h1>
            <p className="mt-4 text-lg text-gray-300">
                Frontend Developer with 3.6+ years of experience
                <br />
                I build scalable web & mobile applications with modern UI/UX
            </p>
            <div className="flex gap-3">
                <button className="mt-6 px-6 py-3 bg-green-500 rounded-xl hover:bg-green-600">
                    View Projects
                </button>
                <button className="mt-6 px-6 py-3 bg-green-500 rounded-xl hover:bg-green-600">
                    View Resume
                </button>
            </div>
        </section>
    );
};

export default Hero;