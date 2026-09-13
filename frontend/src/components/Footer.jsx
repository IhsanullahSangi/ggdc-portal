import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-collegeDark pt-16 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          
          {/* Column 1: Logo & Map */}
          <div className="flex flex-col gap-6">
            
            {/* Logo & Name wrapped collectively in a very thin line */}
            <div className="flex items-center gap-4 md:gap-5 border border-white/20 p-3 md:p-4 rounded-md w-fit">
              
              {/* Raw Logo with no white background */}
              <div className="shrink-0 w-16 h-16 md:w-[75px] md:h-[75px] flex items-center justify-center">
                <img 
                  src="/college-logo.jpeg" 
                  alt="GGDC Ghotki Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/100x100/0F2841/FFFFFF?text=GGDC";
                  }}
                />
              </div>
              
              {/* Text locked to 2 lines */}
              <div className="flex flex-col justify-center">
                <h3 className="font-heading font-bold text-white text-base md:text-[19px] tracking-wide leading-[1.3] md:whitespace-nowrap">
                  GOVERNMENT GIRLS DEGREE COLLEGE<br />
                  GHOTKI
                </h3>
              </div>
              
            </div>
            
            <div className="w-full h-56 md:h-64 rounded-md overflow-hidden border border-white/25 shadow-inner mt-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.39343714659!2d69.24355322960686!3d28.006500588663806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3937cf6f69e6b351%3A0xc6b677a8dfb4455f!2sGhotki%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Column 2: Contact Details & Working Hours */}
          <div className="flex flex-col justify-center">
            
            <h4 className="text-white font-bold text-xl mb-6 tracking-wide">Contact</h4>
            <ul className="flex flex-col gap-5 text-gray-300 text-sm md:text-base mb-10">
              <li className="flex items-start gap-4">
                <Phone size={20} className="text-collegeCyan shrink-0 mt-0.5" />
                <span>0723-XXXXXX</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-collegeCyan shrink-0 mt-0.5" />
                <span className="leading-relaxed">Government Girls Degree College, Ghotki, Sindh, Pakistan</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={20} className="text-collegeCyan shrink-0 mt-0.5" />
                <a href="mailto:info@ggdc.edu.pk" className="hover:text-collegeCyan transition-colors">info@ggdc.edu.pk</a>
              </li>
            </ul>

            <h4 className="text-white font-bold text-xl mb-4 tracking-wide">University Working Hours</h4>
            <ul className="flex flex-col gap-2 text-gray-300 text-sm md:text-base">
              <li>Mon - Fri: 08:00 AM to 03:00 PM</li>
              <li>Sat - Sun: Closed</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0a1b2d] py-6 px-4 border-t border-white/10 mt-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          
          <div className="text-center">
            <p className="text-gray-500 text-xs tracking-wide">
              Made by Ihsanullah Sangi, Lecturer CS @ GGDC Ghotki
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 text-gray-400 text-xs md:text-sm">
            <p>All rights Reserved © GGDC Ghotki 2026</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Services</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;