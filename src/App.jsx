import React, { useState } from 'react';
import { Heart, Mail, X, LogOut, Sparkles, Eye, EyeOff } from 'lucide-react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [showLetter, setShowLetter] = useState(false);
  const [teddyMoved, setTeddyMoved] = useState(false);
  const [selectedReason, setSelectedReason] = useState(null);
  const [hoveredReason, setHoveredReason] = useState(null);


  // User data with personalized messages
  const users = {
    'Nimattheashawo': {
      password: 'IloveJesse',
      letter: 'I know we haven\'t known each other for a very long time, but honestly, it feels like I\'ve known you much longer. Some people just have a way of making time feel different, and you\'re one of them. From the start, you\'ve been so nice and easy to talk to, and that\'s something I really appreciate about you.\n\nYou have this calm, kind energy that makes people feel comfortable, and I can say you\'ve definitely made me feel that way. I don\'t open up or feel relaxed around everyone, so the fact that I can around you means a lot. Not everyone can do that, and I hope you know how special that is.\n\nI just wanted to let you know that your kindness and the way you treat people doesn\'t go unnoticed. You make things a little brighter just by being you. I\'m really glad I got the chance to know you, even if it hasn\'t been that long yet.',
      teddyMessages: [
        "Your laugh is contagious.",
        "You make people feel included.",
        "You're easy to talk to.",
        "Your presence brightens my day.",
        "You have the biggest heart.",
        "You inspire me to be better.",
        "Your kindness is unmatched.",
        "You light up every room.",
      ],
      reasons: [
        { title: 'Sexy', emoji: '✨', idx: 0 },
        { title: 'Ashawo', emoji: '😎', idx: 1 },
        { title: 'Agbero', emoji: '🚗', idx: 2 },
        { title: 'Nice', emoji: '💝', idx: 3 },
        { title: 'Smart', emoji: '🧠', idx: 4 },
        { title: 'Yapper', emoji: '💬', idx: 5 },
        { title: 'Listener', emoji: '👂', idx: 6 },
        { title: 'Fun to talk to', emoji: '😄', idx: 7 },
        { title: 'Encouraging', emoji: '💪', idx: 8 },
        { title: 'Thoughtful', emoji: '🤔', idx: 9 },
        { title: "You're real and not fake", emoji: '✅', idx: 10 },
        { title: 'Funny', emoji: '😂', idx: 11 },
        { title: 'Good Energy', emoji: '⚡', idx: 12 },
        { title: 'You notice the little things', emoji: '👀', idx: 13 },
      ],
      reasonLabels: [
        'You are really sexy!',
        'You are so cool!',
        'You are adventurous!',
        'You are so nice!',
        'You are brilliant!',
        'You talk so much!',
        'You listen so well!',
        'You are fun to be with!',
        'You encourage me so much!',
        'You are so thoughtful!',
        'You are truly authentic!',
        'You are hilarious!',
        'Your energy is amazing!',
        'You notice everything!'
      ]
    },
    'dimplesnova': {
      password: 'Tolu',
      letter: 'I know we\'ve only known each other for a couple of days, but honestly it\'s been so much fun getting to know you! You\'ve been really fun to talk to, and I have to say you\'re pretty interesting and funny too.\n\nWhat really caught me was how similar our music taste is. It\'s funny how we ended up talking for the entire day the other day, time just flew by! That\'s when I realized how easy it is to just vibe with you.\n\nI\'m really looking forward to getting to know you more. You bring such good energy, and I appreciate how genuine and fun you are.',
      teddyMessages: [
        "You're nice.",
        "You're probably more extroverted than I am.",
        "You are easy to talk to.",
        "You have a nice smile.",
        "Good music taste.",
        "It's been really fun getting to know you.",
        "Questionable #1 Nigerian artist",
        "You are very friendly.",
      ],
      reasons: [
        { title: 'Bright Smile', emoji: '✨', idx: 0 },
        { title: 'Friendly', emoji: '😎', idx: 1 },
        { title: 'Extroverted', emoji: '🚗', idx: 2 },
        { title: 'Nice', emoji: '💝', idx: 3 },
        { title: 'Smart', emoji: '🧠', idx: 4 },
        { title: 'Good Conversations', emoji: '💬', idx: 5 },
        { title: 'Listener', emoji: '👂', idx: 6 },
        { title: 'Fun to talk to', emoji: '😄', idx: 7 },
        { title: 'Ambitious', emoji: '💪', idx: 8 },
        { title: 'Nice', emoji: '🤔', idx: 9 },
        { title: "You're real and not fake", emoji: '✅', idx: 10 },
        { title: 'Funny', emoji: '😂', idx: 11 },
        { title: 'Good Energy', emoji: '⚡', idx: 12 },
        { title: 'Height', emoji: '👀', idx: 13 },
      ],
      reasonLabels: [
        'Your smile is beautiful!',
        'You\'re so friendly!',
        'Probably more extroverted than I am',
        'You\'re so nice!',
        'You\'re definitely smart cause being a doctor, sheesh',
        'Great conversations with you!',
        'Good listener',
        'You\'re fun to talk to',
        'Your ambition is inspiring!',
        'You\'re such a nice person!',
        'You\'re genuinely authentic!',
        'You\'re funny',
        'Your energy is amazing!',
        'I wish I was 6"5 like you!'
      ]
    }
  };

  const handleLoginClick = () => {
    console.log('Username entered:', username);
    console.log('Password entered:', password);
    console.log('User exists:', users[username]);
    console.log('Password matches:', users[username]?.password === password);
    console.log('All users:', users);
    
    if (users[username] && users[username].password === password) {
      setIsLoggedIn(true);
      setCurrentUser(username);
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
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <Heart
              key={i}
              size={Math.random() * 40 + 20}
              className="absolute text-rose-200 opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
              fill="currentColor"
            />
          ))}
        </div>

        {/* Floating sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <Sparkles
              key={i}
              size={Math.random() * 20 + 10}
              className="absolute text-pink-300 opacity-40 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative z-10 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:scale-105 border-2 border-rose-100">
          <div className="text-center mb-8">
            <Heart size={48} className="mx-auto text-rose-500 mb-4 animate-bounce" fill="currentColor" />
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Happy Valentine's</h1>
            <p className="text-rose-500 font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Login to your special message</p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=""
                className="w-full px-4 py-3 rounded-lg border-2 border-rose-200 focus:border-rose-500 focus:outline-none transition bg-rose-50 hover:bg-rose-100 focus:ring-4 focus:ring-rose-200 font-semibold"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=""
                  className="w-full px-4 py-3 rounded-lg border-2 border-rose-200 focus:border-rose-500 focus:outline-none transition bg-rose-50 hover:bg-rose-100 focus:ring-4 focus:ring-rose-200 font-semibold pr-12"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-rose-600 transition cursor-pointer"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {loginError && (
              <p className="text-red-500 text-sm font-bold text-center animate-bounce" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {loginError}
              </p>
            )}

            <button
              onClick={handleLoginClick}
              className="w-full bg-gradient-to-r from-rose-500 to-red-500 text-white font-bold py-3 rounded-lg hover:from-rose-600 hover:to-red-600 transition transform hover:scale-110 shadow-lg cursor-pointer hover:shadow-2xl duration-300 text-lg"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              ✨ Enter ✨
            </button>
          </div>

          <p className="text-center text-gray-600 text-xs mt-6 font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            💕 Just so you know I'm better(From Jesse to You!!) 💕
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b-2 border-rose-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex gap-2 sm:gap-4">
            <button
              onClick={() => {
                setCurrentPage('home');
                setShowLetter(false);
                setTeddyMoved(false);
              }}
              className={`px-4 sm:px-6 py-2 rounded-lg font-bold transition cursor-pointer text-sm sm:text-base ${
                currentPage === 'home'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg hover:shadow-xl transform hover:scale-110'
                  : 'text-gray-700 hover:bg-rose-100 hover:scale-105'
              } duration-300`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Home
            </button>
            <button
              onClick={() => {
                setCurrentPage('reasons');
                setSelectedReason(null);
              }}
              className={`px-4 sm:px-6 py-2 rounded-lg font-bold transition cursor-pointer text-sm sm:text-base ${
                currentPage === 'reasons'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg hover:shadow-xl transform hover:scale-110'
                  : 'text-gray-700 hover:bg-rose-100 hover:scale-105'
              } duration-300`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              14 Reasons
            </button>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 text-gray-700 hover:bg-red-100 rounded-lg transition font-bold cursor-pointer text-sm sm:text-base hover:scale-110 hover:shadow-lg duration-300"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <LogOut size={20} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </nav>

      {/* Home Page */}
      {currentPage === 'home' && (
        <div className="min-h-screen pt-12 sm:pt-20 pb-20 px-4 sm:px-6">
          {/* Main Greeting */}
          {!teddyMoved && !showLetter && (
            <div className="text-center mb-16 sm:mb-20 animate-fade-in">
              <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-rose-600 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Happy Valentine's Day
              </h1>
              <p className="text-3xl sm:text-4xl text-gray-700 font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{currentUser === 'Nimattheashawo' ? 'Nimat' : currentUser === 'dimplesnova' ? 'Tolu' : currentUser}</p>
              <p className="text-lg sm:text-2xl text-rose-500 font-bold animate-pulse" style={{ fontFamily: 'Poppins, sans-serif' }}>Something special for you 💕</p>
            </div>
          )}

          <div className="max-w-6xl mx-auto">
            {/* Envelope Section */}
            <div className="mb-16 sm:mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="flex justify-center md:order-2">
                  <button
                    onClick={() => setShowLetter(!showLetter)}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 rounded-2xl blur-3xl opacity-60 group-hover:opacity-100 transition duration-500 group-hover:scale-110"></div>
                    <div className="relative bg-white rounded-2xl p-8 sm:p-12 shadow-2xl hover:shadow-3xl transition transform group-hover:scale-125 duration-500 group-hover:-rotate-6 border-4 border-rose-200">
                      <Mail size={100} className="text-rose-500 mx-auto sm:w-[120px] sm:h-[120px] group-hover:animate-bounce" />
                      <p className="text-center text-gray-700 font-black mt-4 text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>Click to open</p>
                    </div>
                  </button>
                </div>

                <div className="md:order-1">
                  <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>A Letter For You</h2>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    I wanted to take a moment to let you know how much you mean to me. Click the envelope to read what's on my heart.
                  </p>
                </div>
              </div>

              {/* Letter Modal */}
              {showLetter && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-40 animate-fade-in backdrop-blur-sm">
                  <div className="bg-white rounded-3xl max-w-2xl w-full p-8 sm:p-12 shadow-2xl relative max-h-96 overflow-y-auto border-4 border-rose-300 transform hover:scale-105 transition duration-300">
                    <button
                      onClick={() => setShowLetter(false)}
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer hover:scale-125 transition bg-gray-100 hover:bg-red-200 p-2 rounded-full duration-300"
                    >
                      <X size={28} />
                    </button>
                    <h3 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>For You</h3>
                    <div className="text-gray-700 leading-relaxed space-y-4 font-semibold text-sm sm:text-lg whitespace-pre-wrap" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {users[currentUser].letter}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Teddy Bear Section */}
            <div className="mb-16 sm:mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="flex justify-center">
                  <button
                    onClick={() => setTeddyMoved(!teddyMoved)}
                    className="relative group cursor-pointer transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition duration-500 group-hover:scale-125"></div>
                    <div className="text-7xl sm:text-9xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 relative z-10">
                      🧸
                    </div>
                    <p className="text-center text-gray-700 font-black mt-4 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {teddyMoved ? '🔻 Click to hide' : '🔺 Click me!'}
                    </p>
                  </button>
                </div>

                <div>
                  <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Just For You</h2>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    A little teddy bear bringing you all the warmth and love this Valentine's Day.
                  </p>

                  {teddyMoved && (
                    <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 rounded-2xl p-6 sm:p-8 animate-fade-in border-4 border-rose-200">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {users[currentUser].teddyMessages.map((message, idx) => (
                          <div
                            key={idx}
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:scale-105 hover:-rotate-3 duration-300 cursor-pointer border-3 border-rose-300 hover:border-rose-500 animate-fade-in"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            <p className="text-center text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              💕 {message}
                            </p>
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
        <div className="min-h-screen pt-12 sm:pt-20 pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-red-500 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Why You're Absolutely Amazing</h2>
            <p className="text-lg sm:text-xl text-rose-600 font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>✨ Click on any reason to see a special message ✨</p>
          </div>

          {/* Reason Detail Modal */}
          {selectedReason !== null && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-40 animate-fade-in backdrop-blur-sm" onClick={() => setSelectedReason(null)}>
              <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-12 shadow-2xl border-4 border-rose-300 transform hover:scale-105 transition duration-300 relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setSelectedReason(null)}
                  className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 z-50 cursor-pointer hover:scale-125 transition bg-gray-100 hover:bg-red-200 p-2 rounded-full duration-300"
                >
                  <X size={32} />
                </button>

                <div className="text-center mb-8">
                  <div className="text-6xl sm:text-8xl mb-6 animate-bounce">{users[currentUser].reasons[selectedReason].emoji}</div>
                  <h3 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {selectedReason + 1}. {users[currentUser].reasons[selectedReason].title}
                  </h3>
                  <div className="h-2 w-32 bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 mx-auto rounded-full animate-pulse"></div>
                </div>

                {/* Image for this reason */}
                <div className="mb-8 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center overflow-hidden border-4 border-rose-200">
                </div>

                {/* Label underneath */}
                <div className="bg-gradient-to-r from-rose-100 via-pink-100 to-red-100 rounded-2xl p-6 text-center transform hover:scale-110 transition duration-300 mb-6 border-3 border-rose-300 hover:shadow-xl hover:-rotate-2">
                  <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {users[currentUser].reasonLabels[selectedReason]}
                  </p>
                </div>

                {/* Navigation buttons */}
                <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
                  <button
                    onClick={() => setSelectedReason(Math.max(0, selectedReason - 1))}
                    disabled={selectedReason === 0}
                    className="px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-lg hover:from-rose-500 hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition font-bold transform hover:scale-110 hover:shadow-lg duration-300"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setSelectedReason(null)}
                    className="px-6 py-3 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 rounded-lg hover:from-gray-400 hover:to-gray-500 transition font-bold transform hover:scale-110 hover:shadow-lg duration-300"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Close
                  </button>
                  <button
                    onClick={() => setSelectedReason(Math.min(users[currentUser].reasons.length - 1, selectedReason + 1))}
                    disabled={selectedReason === users[currentUser].reasons.length - 1}
                    className="px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-lg hover:from-rose-500 hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition font-bold transform hover:scale-110 hover:shadow-lg duration-300"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {users[currentUser].reasons.map((reason, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedReason(idx)}
                onMouseEnter={() => setHoveredReason(idx)}
                onMouseLeave={() => setHoveredReason(null)}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-4 hover:scale-110 cursor-pointer text-left duration-300 overflow-hidden border-2 border-rose-200 hover:border-rose-500"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-100 opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>

                <div className="relative z-10">
                  <div className="text-5xl sm:text-6xl mb-4 text-center group-hover:scale-150 transition duration-300 group-hover:rotate-12 inline-block w-full">
                    {reason.emoji}
                  </div>
                  <p className="text-center text-lg sm:text-xl font-black text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-rose-600 group-hover:to-pink-600 transition duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {idx + 1}. {reason.title}
                  </p>
                  <div className="h-1 w-12 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full mt-4 opacity-0 group-hover:opacity-100 transition duration-300 group-hover:w-20"></div>
                </div>

                {/* Sparkle effect */}
                {hoveredReason === idx && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-rose-400 rounded-full animate-ping"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating decoration */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(244, 63, 94, 0.5); }
          50% { box-shadow: 0 0 40px rgba(244, 63, 94, 0.8); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        /* Media queries for better responsive design */
        @media (max-width: 640px) {
          h1 { font-size: 2rem; }
          h2 { font-size: 1.875rem; }
          p { font-size: 0.875rem; }
        }

        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
}