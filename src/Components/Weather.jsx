import { useEffect, useState } from "react";

function Weather() {
  const [location, setLocation] = useState("Lagos");
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  

  useEffect(() => {
    async function fetchWeather() {
      try {
        setError("");

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=9ab9039a6b11aa1ba5129c9e93738f8d`,
        );

        const data = await res.json();

        if (data.cod !== 200) {
          setError("City not found");
          setWeather(null);
        } else {
          setWeather(data);
        }
      } catch {
        setError("Something went wrong");
      }
    }

    fetchWeather();
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setLocation(input);
      setInput("");
    }
  };
 
   return (
    <div>
      <div className="p-4">
 
        
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center">
          <form onSubmit={handleSearch} className="w-full max-w-sm mb-6">
            <div>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search city..."
                className="w-full px-3 py-3 rounded-2xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-orange-200"
              />
            </div>
          </form>

          {error && <p className="mb-4 text-red-400 font-medium">{error}</p>}

          {weather && (
            <div className="max-w-sm sm:max-w-md bg-white rounded-[40px] p-3 shadow-2xl">
              <div className="relative h-56 sm:h-64 md:h-72 rounded-[30px] overflow-hidden mb-3">
                <img
                  src="/cloude.png"
                  className="w-full h-full object-cover"
                  alt="weather"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>

                <div className="absolute top-4 left-4">
                  <div className="bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs sm:text-sm font-bold uppercase tracking-wide">
                    {weather.name}
                  </div>
                </div>

                <div className="absolute top-4 right-4 text-white text-xs sm:text-sm font-medium">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>

                <div className="absolute bottom-6 left-5 text-white">
                  <div className="flex">
                    <div>
                      <h1 className="text-6xl sm:text-7xl font-bold leading-none">
                        {Math.round(weather.main.temp)}°
                      </h1>
                    </div>

                    <div className="pl-20 mt-3">
                      <p className="text-sm sm:text-xl font-semibold capitalize">
                        {weather.weather[0].description}
                      </p>

                      <p className="text-xs sm:text-sm opacity-90">
                        Feels like {Math.round(weather.main.feels_like)}°
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 px-1 pb-2">
                {[
                  {
                    label: "Wind",
                    value: `${weather.wind.speed} m/s`,
                    icon: "💨",
                  },
                  {
                    label: "Humidity",
                    value: `${weather.main.humidity}%`,
                    icon: "💧",
                  },
                  {
                    label: "Visibility",
                    value: `${weather.visibility / 1000}km`,
                    icon: "👁️",
                  },
                  {
                    label: "Pressure",
                    value: `${weather.main.pressure}`,
                    icon: "🧭",
                  },
                  { label: "UV Index", value: "9 UV", icon: "☀️" },
                  { label: "Dew Point", value: "26°C", icon: "🌡️" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-[#FAF3EB] rounded-[18px] sm:rounded-[22px] py-3 sm:py-4 flex flex-col items-center justify-center"
                  >
                    <div className="flex items-center gap-1 text-[8px] sm:text-[9px] uppercase font-bold text-[#A3978D] mb-1">
                      <span>{stat.icon}</span>
                      <span>{stat.label}</span>
                    </div>

                    <p className="text-[12px] sm:text-[13px] font-extrabold text-[#5B5047]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Weather;