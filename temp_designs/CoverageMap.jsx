import React from 'react';
import { motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';

// GeoJSON for the world, we'll focus on Iraq
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const cities = [
  // Kurdistan Region
  { name: "Erbil", coordinates: [44.0114, 36.1911], region: "kurdistan" },
  { name: "Sulaymaniyah", coordinates: [45.4329, 35.5669], region: "kurdistan" },
  { name: "Duhok", coordinates: [42.9996, 36.8679], region: "kurdistan" },
  { name: "Halabja", coordinates: [45.9864, 35.1778], region: "kurdistan" },
  { name: "Zakho", coordinates: [42.6841, 37.1438], region: "kurdistan" },
  
  // Iraq Cities
  { name: "Baghdad", coordinates: [44.3661, 33.3152], region: "iraq" },
  { name: "Basra", coordinates: [47.7831, 30.5081], region: "iraq" },
  { name: "Mosul", coordinates: [43.1300, 36.3400], region: "iraq" },
  { name: "Kirkuk", coordinates: [44.3844, 35.4746], region: "iraq" },
  { name: "Najaf", coordinates: [44.3315, 31.9926], region: "iraq" },
  { name: "Karbala", coordinates: [44.0245, 32.6160], region: "iraq" }
];

const CoverageMap = () => {
  return (
    <section id="coverage" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-[1280px]">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="px-3 py-1 rounded-full bg-bz-surface border border-bz-border text-xs font-semibold tracking-wider text-bz-text mb-6"
          >
            OUR COVERAGE
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(34px,4vw,52px)] leading-[1.1] font-bold text-bz-ink mb-6 text-balance"
          >
            Proudly Serving <br />
            <span className="text-bz-blue">Iraq & Kurdistan.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-bz-text leading-relaxed"
          >
            Our growing network supports customers, retailers, and partners across major cities and regions with reliable service and distribution.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto bg-bz-surface rounded-3xl p-6 sm:p-12 min-h-[500px] sm:min-h-[600px] flex items-center justify-center border border-bz-border/50 shadow-sm overflow-hidden"
        >
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bz-blue/5 to-transparent mix-blend-multiply pointer-events-none" />

          {/* Interactive Map */}
          <div className="w-full h-full absolute inset-0 z-10 flex items-center justify-center">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 3500, // Zoomed in on Iraq
                center: [43.8, 33.2] // Longitude, Latitude of Iraq
              }}
              className="w-full h-full outline-none drop-shadow-md"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={geo.properties.name === "Iraq" ? "#F3F9FF" : "#E8EDF3"}
                      stroke={geo.properties.name === "Iraq" ? "#168BE4" : "#FFFFFF"}
                      strokeWidth={geo.properties.name === "Iraq" ? 2 : 1}
                      className="outline-none hover:outline-none focus:outline-none"
                    />
                  ))
                }
              </Geographies>

              {cities.map(({ name, coordinates, region }) => (
                <Marker key={name} coordinates={coordinates}>
                  <g transform="translate(-12, -24)">
                    <motion.path
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"
                      fill={region === "kurdistan" ? "#111827" : "#168BE4"}
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                    <circle cx="12" cy="10" r="3" fill="#FFFFFF" />
                  </g>
                  <text
                    textAnchor="middle"
                    y={5}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fill: "#111827",
                      fontSize: "12px",
                      fontWeight: 600,
                      textShadow: "1px 1px 0px #fff, -1px -1px 0px #fff, 1px -1px 0px #fff, -1px 1px 0px #fff"
                    }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </motion.div>
        
        {/* Map Legend */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-bz-ink"></div>
            <span className="text-sm font-medium text-bz-text">Kurdistan Region</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-bz-blue"></div>
            <span className="text-sm font-medium text-bz-text">Iraq</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoverageMap;