import React, { useState } from 'react';
import { Heart, Mail, X, ChevronLeft, ChevronRight, LogOut } from 'lucide-react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [currentPage, setCurrentPage] = useState('home');
  const [showLetter, setShowLetter] = useState(false);
  const [teddyMoved, setTeddyMoved] = useState(false);
  const [currentReason, setCurrentReason] = useState(0);
  const [showHeartSlideshow, setShowHeartSlideshow] = useState(false);

  const reasonMedia = [
  { type: 'image', src: '/images/photo1.jpeg' },
  { type: 'image', src: '/images/photo2.jpeg' },
  { type: 'image', src: '/images/photo3.jpeg' },
  { type: 'image', src: '/images/photo4.jpeg' },
  { type: 'image', src: '/images/photo5.jpeg' },
  { type: 'image', src: '/images/photo1.jpeg' },
  { type: 'image', src: '/images/photo2.jpeg' },
  { type: 'image', src: '/images/photo3.jpeg' },
  { type: 'image', src: '/images/photo4.jpeg' },
  { type: 'image', src: '/images/photo5.jpeg' },
  { type: 'image', src: '/images/photo1.jpeg' },
  { type: 'image', src: '/images/photo2.jpeg' },
  { type: 'image', src: '/images/photo3.jpeg' },
  { type: 'image', src: '/images/photo4.jpeg' },
];

  const reasons = [
    { title: 'Sexy', emoji: '✨' },
    { title: 'Ashawo', emoji: '😎' },
    { title: 'Agbero', emoji: '🚗' },
    { title: 'Nice', emoji: '💝' },
    { title: 'Smart', emoji: '🧠' },
    { title: 'Yapper', emoji: '💬' },
    { title: 'Listener', emoji: '👂' },
    { title: 'Fun to talk to', emoji: '😄' },
    { title: 'Encouraging', emoji: '💪' },
    { title: 'Thoughtful', emoji: '🤔' },
    { title: "You're real and not fake", emoji: '✅' },
    { title: 'Funny', emoji: '😂' },
    { title: 'Good Energy', emoji: '⚡' },
    { title: 'You notice the little things', emoji: '👀' },
  ];

  const handleLoginClick = () => {
    if (username === 'Nimattheashawo' && password === 'IloveJesse') {
      setIsLoggedIn(true);
      setLoginError('');
      setUsername('');
      setPassword('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Decorative hearts background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <Heart
              key={i}
              size={Math.random() * 40 + 20}
              className="absolute text-rose-200 opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
              fill="currentColor"
            />
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative z-10 backdrop-blur-sm">
          <div className="text-center mb-8">
            <Heart size={48} className="mx-auto text-rose-500 mb-4 animate-bounce" fill="currentColor" />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Happy Valentine's</h1>
            <p className="text-rose-500 font-semibold">Login to your special message</p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=""
                className="w-full px-4 py-3 rounded-lg border-2 border-rose-200 focus:border-rose-500 focus:outline-none transition bg-rose-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
                className="w-full px-4 py-3 rounded-lg border-2 border-rose-200 focus:border-rose-500 focus:outline-none transition bg-rose-50"
              />
            </div>

            {loginError && <p className="text-red-500 text-sm font-semibold text-center">{loginError}</p>}

            <button
              onClick={handleLoginClick}
              className="w-full bg-gradient-to-r from-rose-500 to-red-500 text-white font-bold py-3 rounded-lg hover:from-rose-600 hover:to-red-600 transition transform hover:scale-105 shadow-lg cursor-pointer"
            >
              Enter
            </button>
          </div>

          <p className="text-center text-gray-600 text-xs mt-6">
            💕 Just so you know I'm better(From Jesse to You!!) 💕
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex gap-4">
            <button
              onClick={() => {
                setCurrentPage('home');
                setShowLetter(false);
                setTeddyMoved(false);
              }}
              className={`px-6 py-2 rounded-lg font-bold transition cursor-pointer ${
                currentPage === 'home'
                  ? 'bg-rose-500 text-white'
                  : 'text-gray-700 hover:bg-rose-100'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setCurrentPage('reasons');
                setShowHeartSlideshow(false);
              }}
              className={`px-6 py-2 rounded-lg font-bold transition cursor-pointer ${
                currentPage === 'reasons'
                  ? 'bg-rose-500 text-white'
                  : 'text-gray-700 hover:bg-rose-100'
              }`}
            >
              14 Reasons
            </button>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-red-100 rounded-lg transition font-semibold cursor-pointer"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </nav>

      {/* Home Page */}
      {currentPage === 'home' && (
        <div className="min-h-screen pt-20 pb-20 px-4">
          {/* Main Greeting */}
          {!teddyMoved && !showLetter && (
            <div className="text-center mb-20 animate-fade-in">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
                Happy Valentine's Day
              </h1>
              <p className="text-3xl text-gray-700 font-light mb-2">Nimat</p>
              <p className="text-xl text-rose-500">Something special for you 💕</p>
            </div>
          )}

          <div className="max-w-6xl mx-auto">
            {/* Envelope Section */}
            <div className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center md:order-2">
                  <button
                    onClick={() => setShowLetter(!showLetter)}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition"></div>
                    <div className="relative bg-white rounded-2xl p-12 shadow-2xl hover:shadow-3xl transition transform hover:scale-110 duration-300">
                      <Mail size={120} className="text-rose-500 mx-auto" />
                      <p className="text-center text-gray-700 font-bold mt-4">Click to open</p>
                    </div>
                  </button>
                </div>

                <div className="md:order-1">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">A Letter For You</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    I wanted to take a moment to let you know how much you mean to me. Click the envelope to read what's on my heart.
                  </p>
                </div>
              </div>

              {/* Letter Modal */}
              {showLetter && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-40 animate-fade-in">
                  <div className="bg-white rounded-3xl max-w-2xl w-full p-12 shadow-2xl relative max-h-96 overflow-y-auto">
                    <button
                      onClick={() => setShowLetter(false)}
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                      <X size={28} />
                    </button>
                    <h3 className="text-3xl font-bold text-rose-600 mb-6">For You</h3>
                    <div className="text-gray-700 leading-relaxed space-y-4 font-light text-lg">
                      <p>
                       I know we haven’t known each other for a very long time, but honestly, it feels like I’ve known you much longer. Some people just have a way of making time feel different, and you’re one of them. From the start, you’ve been so nice and easy to talk to, and that’s something I really appreciate about you.
                      </p>
                      <p>
                       You have this calm, kind energy that makes people feel comfortable, and I can say you’ve definitely made me feel that way. I don’t open up or feel relaxed around everyone, so the fact that I can around you means a lot. Not everyone can do that, and I hope you know how special that is.
                      </p>
                      <p>
                        I just wanted to let you know that your kindness and the way you treat people doesn’t go unnoticed. You make things a little brighter just by being you. I’m really glad I got the chance to know you, even if it hasn’t been that long yet.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Teddy Bear Section */}
            <div className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                  <button
                    onClick={() => setTeddyMoved(!teddyMoved)}
                    className="relative group cursor-pointer transition-all duration-500"
                  >
                    <div
                      className={`text-9xl transition-all duration-500 ${
                        teddyMoved ? 'translate-x-0' : 'hover:scale-110'
                      }`}
                    >
                      🧸
                    </div>
                    <p className="text-center text-gray-700 font-bold mt-4 text-sm">
                      {teddyMoved ? 'Click to hide' : 'Click me!'}
                    </p>
                  </button>
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">Just For You</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    A little teddy bear bringing you all the warmth and love this Valentine's Day.
                  </p>

                  {teddyMoved && (
                    <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8 animate-fade-in">
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { type: 'image', src: '/images/photo1.jpeg' },
                          { type: 'video', src: '/images/video1.mp4' },
                          { type: 'image', src: '/images/photo2.jpeg' },
                          { type: 'video', src: '/images/video2.mp4' },
                          { type: 'image', src: '/images/photo3.jpeg' },
                          { type: 'image', src: '/images/photo4.jpeg' },
                          { type: 'video', src: '/images/video3.mp4' },
                          { type: 'image', src: '/images/photo5.jpeg' },
                        ].map((media, idx) => (
                          <div
                            key={idx}
                            className="h-40 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
                          >
                            {media.type === 'video' ? (
                              <video
                                width="200"
                                height="200"
                                controls
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              >
                                <source src={media.src} type="video/mp4" />
                              </video>
                            ) : (
                              <img
                                src={media.src}
                                alt={`gallery ${idx}`}
                                className="w-full h-full object-cover hover:scale-110 transition duration-300"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 14 Reasons Page */}
      {currentPage === 'reasons' && (
        <div className="min-h-screen pt-20 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Why You're Absolutely Amazing</h2>
            <p className="text-xl text-rose-500 font-semibold">14 reasons you make every day better</p>
          </div>

          {/* Heart Slideshow */}
          {!showHeartSlideshow ? (
            <div className="flex justify-center mb-16">
              <button
                onClick={() => {
                  setShowHeartSlideshow(true);
                  setCurrentReason(0);
                }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-red-400 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition"></div>
                <div className="relative bg-white rounded-full p-8 shadow-2xl hover:shadow-3xl transition transform hover:scale-110 duration-300">
                  <Heart size={100} className="text-rose-500" fill="currentColor" />
                </div>
              </button>
            </div>
          ) : (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-40">
              <div className="bg-white rounded-3xl max-w-2xl w-full p-12 shadow-2xl">
                <button
                  onClick={() => setShowHeartSlideshow(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50 cursor-pointer"
                >
                  <X size={32} />
                </button>

                <div className="text-center mb-8">
                  <div className="text-8xl mb-6">{reasons[currentReason].emoji}</div>
                  <h3 className="text-4xl font-bold text-rose-600 mb-4">
                    {currentReason + 1}. {reasons[currentReason].title}
                  </h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full"></div>
                </div>

                {/* Sample image for each reason */}
                <div className="mb-8 h-64 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  {reasonMedia[currentReason].type === 'video' ? (
                    <video width="500" height="300" controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                      <source src={reasonMedia[currentReason].src} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={reasonMedia[currentReason].src} alt="reason" className="w-full h-full object-cover" />
                  )}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={() => setCurrentReason(Math.max(0, currentReason - 1))}
                    disabled={currentReason === 0}
                    className="p-3 bg-rose-100 text-rose-600 rounded-full hover:bg-rose-200 disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <div className="flex-1">
                    <div className="flex justify-center gap-2">
                      {reasons.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentReason(idx)}
                          className={`h-2 rounded-full transition cursor-pointer ${
                            idx === currentReason
                              ? 'bg-rose-500 w-8'
                              : 'bg-rose-200 w-2'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentReason(Math.min(reasons.length - 1, currentReason + 1))}
                    disabled={currentReason === reasons.length - 1}
                    className="p-3 bg-rose-100 text-rose-600 rounded-full hover:bg-rose-200 disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                <p className="text-center text-gray-600 text-sm mt-8">
                  {currentReason + 1} of {reasons.length}
                </p>
              </div>
            </div>
          )}

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setShowHeartSlideshow(true);
                  setCurrentReason(idx);
                }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer text-left"
              >
                <div className="text-6xl mb-4 text-center group-hover:scale-125 transition duration-300">
                  {reason.emoji}
                </div>
                <p className="text-center text-lg font-bold text-gray-800">
                  {idx + 1}. {reason.title}
                </p>
                <div className="h-1 w-12 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full mt-4 opacity-0 group-hover:opacity-100 transition"></div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating decoration */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
