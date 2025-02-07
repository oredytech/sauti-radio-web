const Events = () => {
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Événements à venir</h2>
          <p className="text-gray-600">
            Rejoignez-nous et participez à nos événements passionnants !
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/lovable-uploads/e9395874-6c20-46b0-914a-4110cba6d314.png"
                alt="Event"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-secondary font-semibold mb-2">25 Mars 2024</div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  Concert de louange
                </h3>
                <p className="text-gray-600 mb-4">
                  Un moment de louange et d'adoration avec nos artistes locaux.
                </p>
                <button className="text-secondary hover:text-red-600 font-semibold flex items-center gap-2">
                  Plus de détails
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;