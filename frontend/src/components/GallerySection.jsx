const GallerySection = () => {
  return (
    <section className="bg-[#f2f6f9] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-gray-400 font-bold text-xl md:text-2xl tracking-[0.2em] uppercase mb-10 md:mb-14 text-center">
          Gallery
        </h2>

        {/* Natural Grid: No fixed heights, zero chance of overflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          
          {/* Left Column: Stretches to naturally match the right column */}
          <div className="w-full h-full min-h-[300px] rounded-sm overflow-hidden group shadow-sm bg-slate-200">
            <img 
              src="https://placehold.co/800x1000/0F2841/FFFFFF?text=Sports+Festival+Winners" 
              alt="Sports Festival Winners" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right Column: 2 Rows using natural aspect ratios */}
          <div className="grid grid-rows-2 gap-4 md:gap-6">
            
            <div className="w-full aspect-[4/3] md:aspect-video rounded-sm overflow-hidden group shadow-sm bg-slate-200">
              <img 
                src="https://placehold.co/800x480/189B1F/FFFFFF?text=Academic+Seminar" 
                alt="Academic Seminar" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="w-full aspect-[4/3] md:aspect-video rounded-sm overflow-hidden group shadow-sm bg-slate-200">
              <img 
                src="https://placehold.co/800x480/00B4D8/FFFFFF?text=Award+Distribution" 
                alt="Award Distribution" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GallerySection;