import React, { useState } from 'react';
import { Home, PlayCircle, Newspaper, HelpCircle, Settings, MessageCircle, Send as SendIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GlassmorphicCard = ({ children, className = '' }) => (
  <div className={`bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-xl border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-opacity-50 ${className}`}>
    {children}
  </div>
);

const GlassmorphicButton = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`bg-white bg-opacity-50 backdrop-filter backdrop-blur-md rounded-xl border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-opacity-60 ${className}`}
  >
    {children}
  </button>
);

const MentalHealthApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const pageVariants = {
    home: {
      initial: { opacity: 0, scale: 0.8 },
      in: { opacity: 1, scale: 1 },
      out: { opacity: 0, scale: 1.2 },
    },
    videos: {
      initial: { opacity: 0, x: '100%' },
      in: { opacity: 1, x: 0 },
      out: { opacity: 0, x: '-100%' },
    },
    articles: {
      initial: { opacity: 0, y: '100%' },
      in: { opacity: 1, y: 0 },
      out: { opacity: 0, y: '-100%' },
    },
    myths: {
      initial: { opacity: 0, rotate: -90 },
      in: { opacity: 1, rotate: 0 },
      out: { opacity: 0, rotate: 90 },
    },
    settings: {
      initial: { opacity: 0, scale: 1.5 },
      in: { opacity: 1, scale: 1 },
      out: { opacity: 0, scale: 0.5 },
    },
    chat: {
      initial: { opacity: 0, y: '-100%' },
      in: { opacity: 1, y: 0 },
      out: { opacity: 0, y: '100%' },
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  const pages = {
    home: {
      title: 'Mental Health Resources',
      content: (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-6 space-y-8"
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-semibold mb-6 text-gray-800"
          >
            Hi, Sarah!
          </motion.h1>
          <div className="grid grid-cols-2 gap-8">
            {[
              { icon: PlayCircle, label: 'Videos', page: 'videos', bgClass: 'from-blue-100 to-blue-200' },
              { icon: Newspaper, label: 'Articles', page: 'articles', bgClass: 'from-green-100 to-green-200' },
              { icon: HelpCircle, label: 'Myths', page: 'myths', bgClass: 'from-yellow-100 to-yellow-200' },
              { icon: MessageCircle, label: 'Chat', page: 'chat', bgClass: 'from-purple-100 to-purple-200' },
            ].map((item, index) => (
              <motion.div
                key={item.page}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <GlassmorphicButton
                  onClick={() => setCurrentPage(item.page)}
                  className={`p-10 flex flex-col items-center justify-center bg-gradient-to-br ${item.bgClass} transform hover:scale-105 w-full h-full`}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
                  >
                    <item.icon size={64} className="mb-6 text-gray-700" />
                  </motion.div>
                  <span className="text-2xl font-medium text-gray-800">{item.label}</span>
                </GlassmorphicButton>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )
    },
    videos: {
      title: 'Mental Health Videos',
      content: (
        <div className="p-6 space-y-6 animate-fadeIn">
          <GlassmorphicCard className="p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Featured Video</h3>
            <div className="bg-gray-200 h-48 rounded-md mb-2"></div>
            <p className="text-sm text-gray-600">Understanding Anxiety: A Comprehensive Guide</p>
          </GlassmorphicCard>
          <div className="grid grid-cols-2 gap-4">
            {['Stress Management', 'Mindfulness Techniques', 'Coping with Depression', 'Building Resilience'].map((title) => (
              <GlassmorphicCard key={title} className="p-3">
                <div className="bg-gray-200 h-24 rounded-md mb-2"></div>
                <p className="text-sm font-medium text-gray-700">{title}</p>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      )
    },
    articles: {
      title: 'Mental Health Articles',
      content: (
        <div className="p-6 space-y-6 animate-fadeIn">
          <GlassmorphicCard className="p-4 bg-gradient-to-r from-blue-50 to-green-50">
            <h3 className="font-semibold text-gray-800">Featured: Managing Stress</h3>
            <p className="text-sm text-gray-600">Learn effective techniques to reduce daily stress</p>
          </GlassmorphicCard>
          <div className="grid grid-cols-2 gap-4">
            {['Coping with Change', 'Mental Health Stigma', 'Self-care Tips', 'Mindfulness Practices'].map(title => (
              <GlassmorphicCard key={title} className="p-3">
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-24 rounded-md mb-2"></div>
                <p className="text-sm font-medium text-gray-700">{title}</p>
                <p className="text-xs text-gray-500">5 min read</p>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      )
    },
    myths: {
      title: 'Mental Health Myths',
      content: (
        <div className="p-6 space-y-6 animate-fadeIn">
          <GlassmorphicCard className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Common Myth</h3>
            <p className="mb-4 text-gray-600">Mental health problems don't affect me.</p>
            <h4 className="font-medium mb-2 text-gray-700">Fact:</h4>
            <p className="text-gray-600">Mental health issues are more common than you might think. They affect people of all ages and backgrounds.</p>
          </GlassmorphicCard>
          <GlassmorphicCard className="p-4 bg-blue-50">
            <h3 className="font-semibold mb-2 text-gray-800">Did you know?</h3>
            <p className="text-gray-600">1 in 5 adults experience a mental health condition each year.</p>
          </GlassmorphicCard>
        </div>
      )
    },
    settings: {
      title: 'Settings',
      content: (
        <div className="p-6 space-y-6 animate-fadeIn">
          {[
            { icon: PlayCircle, title: 'Notification Preferences', description: 'Manage your notification settings' },
            { icon: Newspaper, title: 'Account Settings', description: 'Update your profile and account information' },
            { icon: HelpCircle, title: 'Privacy Settings', description: 'Control your data and privacy options' },
          ].map((setting) => (
            <GlassmorphicCard key={setting.title} className="p-4 flex items-center space-x-4">
              <setting.icon size={32} className="text-gray-500" />
              <div>
                <h3 className="font-semibold text-gray-800">{setting.title}</h3>
                <p className="text-sm text-gray-600">{setting.description}</p>
              </div>
            </GlassmorphicCard>
          ))}
        </div>
      )
    },
    chat: {
      title: 'Group Chat',
      content: (
        <div className="p-6 space-y-6 animate-fadeIn flex flex-col h-full">
          <div className="space-y-4 flex-grow overflow-y-auto">
            {[
              { name: 'John', message: 'Hi everyone, how are you all doing today?', time: '10:00 AM' },
              { name: 'Sarah', message: "I'm feeling a bit anxious about work, but trying to stay positive.", time: '10:05 AM' },
              { name: 'Mike', message: 'Hang in there, Sarah! Remember to take deep breaths when you feel overwhelmed.', time: '10:07 AM' },
              { name: 'Emily', message: 'I find that going for a short walk helps me clear my mind. Maybe you could try that?', time: '10:10 AM' },
              { name: 'Sarah', message: "Thanks for the support, everyone. I'll try those suggestions!", time: '10:12 AM' },
            ].map((message, index) => (
              <div key={index} className="bg-white bg-opacity-50 rounded-lg p-3">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-gray-800">{message.name}</span>
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>
                <p className="text-gray-700 mt-1">{message.message}</p>
              </div>
            ))}
          </div>
          <div className="mt-auto pb-4 flex">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-grow p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300" 
            />
            <motion.button 
              className="bg-purple-500 text-white px-4 py-2 rounded-r-md hover:bg-purple-600 transition-colors flex items-center justify-center"
              onClick={() => {
                setIsButtonClicked(true);
                setTimeout(() => setIsButtonClicked(false), 300);
                console.log('Message sent');
              }}
              animate={isButtonClicked ? { scale: 0.95 } : { scale: 1 }}
              transition={{ duration: 0.1 }}
            >
              <motion.span
                className="mr-2"
                animate={isButtonClicked ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SendIcon size={18} />
              </motion.span>
              Send
            </motion.button>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="relative max-w-md mx-auto h-screen flex flex-col font-poppins text-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 z-0"></div>
      <div className="absolute inset-0 backdrop-filter backdrop-blur-sm z-10"></div>
      <div className="relative z-20 flex flex-col h-full">
        <header className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg border-b border-gray-200 p-4 transition-all duration-300">
          <h1 className="text-2xl font-semibold">{pages[currentPage]?.title || 'Mental Health App'}</h1>
        </header>
        <main className="flex-grow overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants[currentPage]}
              transition={pageTransition}
            >
              {pages[currentPage]?.content || <div className="p-6">Page content not available.</div>}
            </motion.div>
          </AnimatePresence>
        </main>
        <nav className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg border-t border-gray-200 flex justify-around py-3">
          {[
            { icon: Home, label: 'Home', page: 'home' },
            { icon: PlayCircle, label: 'Videos', page: 'videos' },
            { icon: Newspaper, label: 'Articles', page: 'articles' },
            { icon: MessageCircle, label: 'Chat', page: 'chat' },
            { icon: Settings, label: 'Settings', page: 'settings' },
          ].map((item) => (
            <button
              key={item.page}
              className={`flex flex-col items-center transition-all duration-300 ${currentPage === item.page ? 'text-blue-600 scale-110' : 'text-gray-500'}`}
              onClick={() => setCurrentPage(item.page)}
            >
              <item.icon size={24} />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MentalHealthApp