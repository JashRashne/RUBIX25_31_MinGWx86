import React from 'react';
import Layout from './Layout';

// Updated sample video data (replace links with actual video URLs)
const videos = {
  whatsapp: [
    { id: 1, title: 'How to Create a Group on WhatsApp', link: 'https://www.youtube.com/watch?v=o3Kowqyr2J8', thumbnail: 'https://img.youtube.com/vi/o3Kowqyr2J8/0.jpg' },
    { id: 2, title: 'How to Backup WhatsApp Chats', link: 'https://www.youtube.com/watch?v=cf90L2QsLSI', thumbnail: 'https://img.youtube.com/vi/cf90L2QsLSI/0.jpg' },
    { id: 3, title: 'How to Block a Contact on WhatsApp', link: 'https://www.youtube.com/watch?v=7Tmvvf0pDGg', thumbnail: 'https://img.youtube.com/vi/7Tmvvf0pDGg/0.jpg' },
    { id: 4, title: 'How to Mute a WhatsApp Group', link: 'https://www.youtube.com/watch?v=CQFEeWcqbw0', thumbnail: 'https://img.youtube.com/vi/CQFEeWcqbw0/0.jpg' }, // New video
    { id: 5, title: 'How to Change WhatsApp Status', link: 'https://www.youtube.com/watch?v=LI9eO4dPrsE', thumbnail: 'https://img.youtube.com/vi/LI9eO4dPrsE/0.jpg' }, // New video
  ],
  banking: [
    { id: 1, title: 'How to Open a Bank Account Online', link: 'https://www.youtube.com/watch?v=7J5Uq9O6nxg', thumbnail: 'https://img.youtube.com/vi/7J5Uq9O6nxg/0.jpg' },
    { id: 2, title: 'How to Reset Your Online Banking Password', link: 'https://www.youtube.com/watch?v=lpcBdtIcPtc', thumbnail: 'https://img.youtube.com/vi/lpcBdtIcPtc/0.jpg' },
    { id: 3, title: 'How to Transfer Money Using Net Banking', link: 'https://www.youtube.com/watch?v=y3MswREzwIs', thumbnail: 'https://img.youtube.com/vi/y3MswREzwIs/0.jpg' },
    { id: 4, title: 'How to Check Bank Balance Online', link: 'https://www.youtube.com/watch?v=X4Y6OdRG7-0', thumbnail: 'https://img.youtube.com/vi/X4Y6OdRG7-0/0.jpg' }, // New video
  ],
  googleMeet: [
    { id: 1, title: 'How to Schedule a Google Meet', link: 'https://www.youtube.com/watch?v=tqBAoidXpf8', thumbnail: 'https://img.youtube.com/vi/tqBAoidXpf8/0.jpg' },
    { id: 2, title: 'How to Share Screen on Google Meet', link: 'https://www.youtube.com/watch?v=hOWGF4Nf2Xw', thumbnail: 'https://img.youtube.com/vi/hOWGF4Nf2Xw/0.jpg' },
    { id: 3, title: 'How to Record a Google Meet', link: 'https://www.youtube.com/watch?v=yotXyYjdun4', thumbnail: 'https://img.youtube.com/vi/yotXyYjdun4/0.jpg' },
    { id: 4, title: 'How to Change Background in Google Meet', link: 'https://www.youtube.com/watch?v=q8wc5mkSVGo', thumbnail: 'https://img.youtube.com/vi/q8wc5mkSVGo/0.jpg' }, // New video
  ],
  email: [
    { id: 1, title: 'How to Set Up an Email Signature', link: 'https://www.youtube.com/watch?v=xULkxCsVlFw', thumbnail: 'https://img.youtube.com/vi/xULkxCsVlFw/0.jpg' },
    { id: 2, title: 'How to Recover Deleted Emails', link: 'https://www.youtube.com/watch?v=9Mtbv7Ja3nc', thumbnail: 'https://img.youtube.com/vi/9Mtbv7Ja3nc/0.jpg' },
    { id: 3, title: 'How to Filter Spam Emails', link: 'https://www.youtube.com/watch?v=MS_MVvmtLJM', thumbnail: 'https://img.youtube.com/vi/MS_MVvmtLJM/0.jpg' },
    { id: 4, title: 'How to Organize Your Email Folders', link: 'https://www.youtube.com/watch?v=INA7s-7sBas', thumbnail: 'https://img.youtube.com/vi/INA7s-7sBas/0.jpg' }, // New video
  ],
};

// FAQ Section Component
const FAQSection = ({ title, videoList }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8"> {/* Light background for subtle contrast */}
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">{title}</h2> {/* Title in a darker blue */}

      {/* Horizontal Scrolling Container */}
      <div className="flex overflow-x-auto space-x-6 pb-4">
        {videoList.map((video) => (
          <div key={video.id} className="flex-shrink-0 w-64">
            {/* Thumbnail Image with clickable link */}
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-40 object-cover rounded-lg shadow-md mb-2 cursor-pointer"
              />
            </a>

            {/* Video Title */}
            <p className="text-center mt-2 text-sm text-blue-600">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// FAQ Page Component
const FAQPage = () => {
  return (
    <Layout>
      <div className="bg-blue-50 min-h-screen flex flex-col"> {/* Light blue background */}
        <div className="container mx-auto px-6 py-16"> {/* Spacing for a spacious feel */}
          {/* Title Section */}
          <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
            Frequently Asked Questions (FAQ)
          </h1>

          {/* FAQ Sections */}
          <div className="flex flex-col gap-8"> {/* Increased gap for clarity */}
            <FAQSection title="WhatsApp FAQs" videoList={videos.whatsapp} />
            <FAQSection title="Banking FAQs" videoList={videos.banking} />
            <FAQSection title="Google Meet FAQs" videoList={videos.googleMeet} />
            <FAQSection title="Email FAQs" videoList={videos.email} />
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-blue-700 text-white text-center p-6 mt-12">
          <p className="text-sm">&copy; {new Date().getFullYear()} FAQ Videos. All rights reserved.</p>
        </footer>
      </div>
    </Layout>
  );
};

export default FAQPage;
