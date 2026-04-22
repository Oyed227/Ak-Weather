function Footer() {
  return (
    <div className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <h1 className="text-lg font-bold mb-4">Weather</h1>
          <div className="space-y-1 text-sm text-gray-300">
            <p>Sunny</p>
            <p>Rainy</p>
            <p>Cloudy</p>
            <p>Snowy</p>
            <p>Windy</p>
          </div>
        </div>

        <div>
          <h1 className="text-lg font-bold mb-4">Locations</h1>
          <div className="space-y-1 text-sm text-gray-300">
            <p>Lagos</p>
            <p>Georgia</p>
            <p>Kebbi</p>
            <p>Plateau</p>
            <p>Osun</p>
            <p>etc...</p>
          </div>
        </div>

        <div>
          <h1 className="text-lg font-bold mb-4">About</h1>
          <div className="space-y-1 text-sm text-gray-300">
            <p>Dew Point</p>
            <p>UV Index</p>
            <p>Pressure</p>
            <p>Visibility</p>
            <p>Humidity</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    <div className="border border-3 mt-4 border-purple-400">

    </div>
      <div className="mt-5 text-center text-xs text-gray-500">
        © 2026 Weather App. All rights reserved.
      </div>

      <div className="mt-5 text-center text-xL text-gray-500">
        Designed by <span className="text-purple-600 font-serif text-2xl">AKOREDE</span>
      </div>
    </div>
  );
}

export default Footer;
