import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { FaYoutube, FaFacebook, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';

const Hero = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // New state variables for the Smart Ticker
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Fetch the latest 3 announcements from the backend
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/notices');
        const latestNotices = response.data.slice(0, 3);
        if (latestNotices.length > 0) {
          setNotices(latestNotices);
        }
      } catch (error) {
        console.error("Backend not reached, showing dummy data.");
        setNotices([
          { _id: '1', title: 'Admissions Open for First Year (Pre-Medical & Pre-Engineering) 2026-2027', fileUrl: '#' },
          { _id: '2', title: 'Submission of Examination Forms for BS Programs', fileUrl: '#' },
          { _id: '3', title: 'Schedule for Practical Examinations - Computer Science', fileUrl: '#' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  // Smart Ticker Timer Logic
  useEffect(() => {
    // Stop timer if there are no notices, or if the user is hovering their mouse over it
    if (notices.length <= 1 || isHovered) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % notices.length);
    }, 4000); // Swaps seamlessly every 4 seconds
    
    return () => clearInterval(interval);
  }, [notices, isHovered]);

  return (
    <section className="w-full bg-slate-100 py-6 md:py-10 relative">
      
      <div className="absolute top-0 left-0 w-full h-[40%] bg-collegeDark z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-0 sm:px-4 lg:px-8">
        <div className="flex flex-col shadow-2xl bg-white sm:rounded-lg overflow-hidden border border-gray-200">
          
          {/* TOP HEADER BAR */}
          <div className="w-full flex flex-row">
            <div className="bg-collegeGreen text-white font-heading font-bold px-4 py-3 md:px-6 md:py-4 text-[13px] sm:text-base md:text-xl lg:text-2xl flex items-center">
              Welcome to Government Girls Degree College Ghotki
            </div>
            
            <div className="bg-collegeDark flex-1 flex justify-end items-center px-4 py-3 md:px-6 md:py-4 gap-4 md:gap-6 text-white border-b-4 border-collegeDark sm:border-none">
              <FaYoutube className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:text-collegeCyan transition-colors" />
              <FaFacebook className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:text-collegeCyan transition-colors" />
              <FaEnvelope className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:text-collegeCyan transition-colors" />
            </div>
          </div>

          {/* MAIN IMAGE CAROUSEL AREA */}
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] bg-slate-200">
            <img 
              src="https://placehold.co/1920x1080/0F2841/FFFFFF?text=GGDC+Campus+Building" 
              alt="GGDC Campus" 
              className="w-full h-full object-cover"
            />
            
            <div className="absolute right-0 bottom-0 bg-black/60 hover:bg-collegeDark transition-colors cursor-pointer px-4 py-3 md:px-6 md:py-4 flex items-center justify-center backdrop-blur-sm">
              <ArrowRight size={24} className="text-white md:w-8 md:h-8" strokeWidth={2.5} />
            </div>
          </div>

          {/* BOTTOM ANNOUNCEMENT BAR */}
          <div className="w-full flex flex-row h-10 md:h-14 border-b-4 border-collegeDark relative">
            
            {/* Left Indicator Block (Animated with React State) */}
            <div className="bg-white px-4 md:px-6 flex items-center justify-center gap-1.5 md:gap-2 min-w-[80px] md:min-w-[100px] z-10 border-r border-gray-100 shadow-sm">
              {notices.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-sm transition-all duration-500 ${
                    index === activeIndex 
                      ? 'bg-collegeDark scale-125' 
                      : 'bg-collegeGreen opacity-30'
                  }`}
                ></div>
              ))}
            </div>
            
            {/* Right Animated Ticker Block */}
            <div 
              className="bg-collegeGreen flex-1 flex items-center overflow-hidden relative cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {loading ? (
                <div className="px-4 text-white text-[12px] sm:text-sm font-body">Loading latest updates...</div>
              ) : (
                notices.map((notice, index) => (
                  <div 
                    key={notice._id}
                    className={`absolute w-full px-4 flex items-center h-full transition-all duration-500 ease-in-out ${
                      index === activeIndex
                        ? 'opacity-100 translate-y-0 z-10'
                        : 'opacity-0 translate-y-4 pointer-events-none z-0'
                    }`}
                  >
                    <a 
                      href={notice.fileUrl || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-collegeDark transition-colors text-[12px] sm:text-sm md:text-base font-body font-medium truncate w-full flex items-center gap-2"
                    >
                      <span className="text-collegeCyan text-xs md:text-sm shrink-0">✦</span>
                      <span className="truncate">{notice.title}</span>
                    </a>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;