const HeroSection = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/smiling-young-guy-holding-showing-sale-sign-torn-yellow-wall_140725-94263.jpg?t=st=1732139670~exp=1732143270~hmac=ed9c8db2bfd27cff3451705af4d008447c6868d7bce57392f0d77ee2be0402ce&w=1380)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-10 text-5xl lg:text-8xl font-bold">TrendLoop</h1>
            <p className="mb-5 text-3xl lg:text-5xl ">
            We bring you the best deals and products right at your fingertips. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
