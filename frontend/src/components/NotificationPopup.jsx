import { useState, useEffect } from 'react';
import { X, Bell, ExternalLink } from 'lucide-react';
import axios from 'axios';

const NotificationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notices, setNotices] = useState([]);
  const [bannerImage, setBannerImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/notices');
        const latestNotices = response.data.slice(0, 3); 
        
        if (latestNotices.length > 0) {
          setNotices(latestNotices);
          setIsOpen(true); 
        }
      } catch (error) {
        console.error("Backend not reached, showing dummy data.");
        
        setBannerImage("https://placehold.co/600x400/00B4D8/0F2841?text=Admissions+Open+2026-27");
        setNotices([
          { _id: '1', title: 'Submission of Examination Forms for BS Programs', fileUrl: '#' },
          { _id: '2', title: 'Schedule for Practical Examinations - Computer Science', fileUrl: '#' }
        ]);
        
        setIsOpen(true);
      } finally {
        setLoading(false);
      }
    };

    // Execute immediately on component mount, no timeout delay
    fetchNotices();
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-collegeDark/85 backdrop-blur-sm p-4">
      <div className="bg-white rounded-md shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-300 border border-collegeDark/20">
        
        {/* Header */}
        <div className="bg-collegeDark text-white px-4 py-3 flex justify-between items-center border-b-2 border-collegeCyan">
          <div className="flex items-center gap-2 font-heading font-bold text-lg tracking-wide">
            <Bell size={20} className="text-collegeCyan animate-bounce" />
            <span>Important Updates</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="hover:text-collegeCyan p-1 rounded transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 md:p-5 max-h-[70vh] overflow-y-auto font-body">
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-collegeCyan"></div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              
              {bannerImage && (
                <div className="w-full">
                  <img 
                    src={bannerImage} 
                    alt="Important Notice Banner" 
                    className="w-full h-auto rounded border border-gray-200 shadow-sm"
                  />
                </div>
              )}

              {notices.length > 0 && (
                <ul className="space-y-2">
                  {notices.map((notice) => (
                    <li key={notice._id} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                      <a 
                        href={notice.fileUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3 hover:bg-slate-50 p-2 rounded-md transition-colors"
                      >
                        <div className="mt-0.5 flex-shrink-0 text-collegeCyan group-hover:text-collegeDark transition-colors">
                          <ExternalLink size={16} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800 text-sm group-hover:text-collegeCyan transition-colors leading-snug">
                            {notice.title}
                          </h3>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
        
        {/* Footer has been completely removed */}
      </div>
    </div>
  );
};

export default NotificationPopup;