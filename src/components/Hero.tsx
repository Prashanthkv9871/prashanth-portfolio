const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm Prashanth 👋
            </h1>
            <p className="mt-4 text-lg text-gray-300">
                Web & Mobile Developer | React | Vue | Nuxt
            </p>
            <button className="mt-6 px-6 py-3 bg-green-500 rounded-xl hover:bg-green-600">
                View Projects
            </button>
        </section>
    );
};

export default Hero;