const AppDownload = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Téléchargez notre application
          </h2>
          <p className="text-xl mb-12">
            Écoutez Radio Sauti ya Injili partout et à tout moment avec notre application mobile.
          </p>
          
          <div className="flex justify-center gap-6">
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg flex items-center gap-3">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.08-.46-2.07-.48-3.2 0-1.42.61-2.16.44-3.04-.35C4.43 17.01 3.47 12.16 4.85 9.23c.84-1.8 2.31-2.84 3.94-2.87 1.23-.03 2.4.82 3.17.82.77 0 2.21-1.01 3.73-.86 1.35.12 2.49.68 3.26 1.71-3.03 1.86-2.53 6.69.82 8.19-.73 2.17-1.73 4.29-2.72 6.06zM12.03 6.3c-.07-2.32 1.88-4.32 4.17-4.3.18 2.17-1.9 4.29-4.17 4.3z"/>
              </svg>
              App Store
            </button>
            
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg flex items-center gap-3">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.28.28-.45.66-.45 1.08v.09c0 .43.17.82.45 1.11.31.3.73.47 1.16.47.43 0 .85-.17 1.16-.47L16.39 13.08c.31-.31.47-.73.47-1.16 0-.43-.16-.85-.47-1.16L5.479.186C5.169-.114 4.749-.28 4.319-.28c-.43 0-.85.17-1.16.47-.28.28-.45.66-.45 1.08v.09c0 .43.17.82.45 1.11l.45.45z"/>
              </svg>
              Google Play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;