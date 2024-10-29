import INFO from "../MyInfo";

export default function HeroSection() {
  return (
    <section
      id="welcome-hero"
      className="welcome-hero bg-color6 text-color6 pt-20 md:pt-24 flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url('/images/background.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto text-center px-4 ">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading- relaxed">
          Hi<span className="text-color2">,</span> I am <br /> Bibek <br /> Koirala<span className="text-color2">.</span>
        </h2>
        <p className="text-lg md:text-xl mb-6">{INFO.homepage.description}</p>
        <a
          href="assets/download/browney.txt"
          download
          className="inline-block bg-color4 text-color6 px-6 py-2 font-semibold rounded-md hover:bg-opacity-90 transition-colors"
        >
          DOWNLOAD RESUME
        </a>
      </div>
    </section>
  );
}
