import React, { useState, useEffect, useRef, Suspense } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import AOS from "aos";
import "aos/dist/aos.css";
import * as THREE from "three";
import ChairViewer from "../components/ChairViewer";

const ProductSelector = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const products = [
    { id: "chair", name: "Chair", price: "₹2,999" },
    { id: "table", name: "Table", price: "₹5,999" },
    { id: "dining-set", name: "Dining Set", price: "₹15,999" },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Select Your Product</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {products.map((product) => (
          <motion.button
            key={product.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-lg transition-colors ${
              selectedProduct === product.id
                ? "bg-red-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setSelectedProduct(product.id)}
          >
            <p className="font-semibold">{product.name}</p>
            <p className="text-sm text-gray-300">{product.price}</p>
          </motion.button>
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-400">
        Window Size: {windowSize.width}px x {windowSize.height}px
      </div>
    </div>
  );
};

const Scene = () => {
  const { scene } = useGLTF("/models/chair.glb");
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <spotLight
        position={[-5, 8, 0]}
        intensity={1}
        angle={Math.PI / 6}
        penumbra={0.3}
        decay={2}
        distance={30}
        castShadow
      />
      <primitive object={scene} scale={[1, 1, 1]} />
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={2}
        maxDistance={10}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const Customization = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [showModel, setShowModel] = useState(false);
  const [showChairViewer, setShowChairViewer] = useState(false);
  const containerRef = useRef(null);
  const modelContainerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState("hotels");
  const [stats, setStats] = useState({ projects: 0, clients: 0, years: 0 });

  // 3D Model State

  const [selectedProduct, setSelectedProduct] = useState("chair");
  const [customOptions, setCustomOptions] = useState({
    material: "stainless-steel",
    finish: "polished",
    color: "#C0C0C0",
    size: "standard",
  });

  const industries = [
    {
      id: "hotels",
      name: "Hotels",
      icon: "🏨",
      features: [
        "Luxury Lobby Furniture",
        "Poolside Loungers",
        "Conference Tables",
      ],
    },
    {
      id: "restaurants",
      name: "Restaurants",
      icon: "🍽️",
      features: [
        "Commercial Kitchen Equipment",
        "Outdoor Dining Sets",
        "Bar Stools",
      ],
    },
    {
      id: "canteens",
      name: "Canteens",
      icon: "🏫",
      features: [
        "Industrial-grade Tables",
        "Stackable Chairs",
        "Cafeteria Counters",
      ],
    },
    {
      id: "events",
      name: "Events",
      icon: "🎪",
      features: ["Stage Structures", "Exhibition Stands", "Portable Seating"],
    },
  ];

  const steelGrades = [
    { grade: "304", properties: "Corrosion Resistant", thickness: "1.2-6mm" },
    { grade: "316", properties: "Marine Grade", thickness: "1.5-8mm" },
    { grade: "430", properties: "Heat Resistant", thickness: "1.0-4mm" },
  ];

  useEffect(() => {
    // Price calculation
    const basePrices = { chair: 2999, table: 5999, "dining-set": 15999 };
    const materialMultiplier =
      materials.find((m) => m.color === customOptions.color)?.price || 1;
    const finishMultiplier =
      finishes.find((f) => f.name === customOptions.finish)?.price || 1;
    setTotalPrice(
      basePrices[selectedProduct] * materialMultiplier * finishMultiplier
    );
  }, [selectedProduct, customOptions]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Stats animation
    const animateStats = () => {
      setStats({ projects: 0, clients: 0, years: 0 });
      setTimeout(() => {
        setStats({ projects: 1500, clients: 420, years: 12 });
      }, 500);
    };
    animateStats();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    // Initialize Three.js scene for background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create animated geometric shapes
    const shapes = [];
    const geometries = [
      new THREE.TorusGeometry(1, 0.3, 16, 100),
      new THREE.OctahedronGeometry(1),
      new THREE.TetrahedronGeometry(1),
    ];

    for (let i = 0; i < 10; i++) {
      const geometry =
        geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.1,
      });
      const shape = new THREE.Mesh(geometry, material);

      shape.position.x = (Math.random() - 0.5) * 10;
      shape.position.y = (Math.random() - 0.5) * 10;
      shape.position.z = (Math.random() - 0.5) * 10;

      shapes.push(shape);
      scene.add(shape);
    }

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      shapes.forEach((shape) => {
        shape.rotation.x += 0.001;
        shape.rotation.y += 0.002;
      });
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    if (showModel && modelContainerRef.current) {
      // Initialize Three.js scene for 3D model
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });

      renderer.setSize(400, 400);
      modelContainerRef.current.appendChild(renderer.domElement);

      // Create a chair model (simplified for example)
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshPhongMaterial({ color: modelColor });
      const chair = new THREE.Mesh(geometry, material);
      scene.add(chair);

      // Add lights
      const light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(0, 0, 2);
      scene.add(light);

      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);

      // Add orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = true;
      controls.enablePan = true;

      camera.position.z = 2;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        chair.rotation.y = modelRotation;
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        modelContainerRef.current?.removeChild(renderer.domElement);
      };
    }
  }, [showModel]);

  const designSteps = [
    {
      step: 1,
      title: "Consultation",
      description: "Meet with our design experts to discuss your vision",
      icon: "💭",
      features: [
        "Free consultation",
        "Expert advice",
        "Material selection",
        "Style guidance",
      ],
    },
    {
      step: 2,
      title: "3D Mockup",
      description: "Review detailed 3D renderings of your custom piece",
      icon: "🎨",
      features: [
        "Realistic 3D models",
        "Multiple angles",
        "Color variations",
        "Material preview",
      ],
    },
    {
      step: 3,
      title: "Production",
      description: "Watch your design come to life in our facility",
      icon: "⚒️",
      features: [
        "Quality materials",
        "Expert craftsmanship",
        "Regular updates",
        "Quality checks",
      ],
    },
    {
      step: 4,
      title: "Delivery",
      description: "Receive your perfectly crafted custom furniture",
      icon: "🚚",
      features: [
        "Professional delivery",
        "Installation service",
        "Quality guarantee",
        "After-sales support",
      ],
    },
  ];

  const materials = [
    { name: "Premium Steel", color: "#C0C0C0", price: 1 },
    { name: "Gold Plated", color: "#FFD700", price: 2 },
    { name: "Rose Gold", color: "#B76E79", price: 1.8 },
    { name: "Antique Bronze", color: "#614E1A", price: 1.5 },
  ];

  const finishes = [
    { name: "Polished", preview: "✨", price: 1.2 },
    { name: "Brushed", preview: "🌫️", price: 1.1 },
    { name: "Matte", preview: "⬛", price: 1 },
    { name: "Textured", preview: "📐", price: 1.3 },
  ];

  const products = [
    { id: "chair", name: "Chair", price: "₹2,999" },
    { id: "table", name: "Table", price: "₹5,999" },
    { id: "dining-set", name: "Dining Set", price: "₹15,999" },
  ];

  const handleOptionChange = (option, value) => {
    setCustomOptions((prev) => ({
      ...prev,
      [option]: value,
    }));
  };

  return (
    <div className="relative min-h-screen ">
      {/* Three.js Background Container */}

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-screen flex items-center justify-center text-white"
      >
        <div className="absolute inset-0 z-0" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
          >
            Custom Steel Creations
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Your vision, our craftsmanship. Create something truly unique.
          </motion.p>
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => setShowChairViewer(true)}
            className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
          >
            Try 3D Customizer
          </motion.button>
        </div>
      </motion.section>

      {/* Design Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            Our Design Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {designSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveStep(step.step)}
                className={`relative cursor-pointer group ${
                  activeStep === step.step ? "scale-105" : ""
                }`}
              >
                <div className="  rounded-xl p-6 text-white hover:bg-white/20 transition-all">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-4xl">{step.icon}</span>
                    </div>
                    {index < designSteps.length - 1 && (
                      <div className="absolute top-1/2 left-full w-full h-1 bg-purple-600/20 -translate-y-1/2 hidden md:block" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  <AnimatePresence>
                    {activeStep === step.step && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2"
                      >
                        {step.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <span className="text-purple-400">✓</span>
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Customizer Modal */}
      <AnimatePresence>
        {showChairViewer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0  flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-xl p-8 max-w-4xl w-full mx-4"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">3D Customizer</h3>
                <button
                  onClick={() => setShowChairViewer(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <ChairViewer onClose={() => setShowChairViewer(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Selection Section */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Select Your Product</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {products.map((product) => (
              <motion.button
                key={product.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-lg transition-colors ${
                  selectedProduct === product.id
                    ? "bg-red-600"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={() => setSelectedProduct(product.id)}
              >
                <p className="font-semibold">{product.name}</p>
                <p className="text-sm text-gray-300">{product.price}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* 3D Preview Section */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">3D Preview</h2>
          <div className="relative h-[400px]">
            <Canvas
              shadows
              camera={{ position: [0, 4, 8], fov: 75 }}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
                failIfMajorPerformanceCaveat: true,
              }}
            >
              <Suspense fallback={null}>
                <Scene />
              </Suspense>
            </Canvas>
          </div>
          {/* Display Current Window Size */}
          <div className="mt-4 text-sm text-gray-400">
            Window Size: {window.innerWidth}px x {window.innerHeight}px
          </div>
        </div>
      </div>

      {/* Customization Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Material */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Material</h3>
          <select
            value={customOptions.material}
            onChange={(e) => handleOptionChange("material", e.target.value)}
            className="w-full bg-gray-700 text-white rounded-lg p-2"
          >
            <option value="stainless-steel">Stainless Steel</option>
            <option value="mild-steel">Mild Steel</option>
            <option value="chrome">Chrome Plated</option>
          </select>
        </div>

        {/* Finish */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Finish</h3>
          <select
            value={customOptions.finish}
            onChange={(e) => handleOptionChange("finish", e.target.value)}
            className="w-full bg-gray-700 text-white rounded-lg p-2"
          >
            <option value="polished">Polished</option>
            <option value="matte">Matte</option>
            <option value="brushed">Brushed</option>
          </select>
        </div>

        {/* Color */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Color</h3>
          <div className="grid grid-cols-4 gap-2">
            {["#C0C0C0", "#FFD700", "#B87333", "#4A4A4A"].map((color) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full border-2 ${
                  customOptions.color === color
                    ? "border-red-500"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleOptionChange("color", color)}
              />
            ))}
          </div>
        </div>

        {/* Size */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Size</h3>
          <select
            value={customOptions.size}
            onChange={(e) => handleOptionChange("size", e.target.value)}
            className="w-full bg-gray-700 text-white rounded-lg p-2"
          >
            <option value="standard">Standard</option>
            <option value="large">Large</option>
            <option value="custom">Custom</option>
          </select>
        </div>
      </div>

      {/* Request Quote Button */}
      <motion.div
        className="text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all">
          Request Custom Quote
        </button>
      </motion.div>

      <div className=" min-h-screen ">
        {/* Three.js Background Container */}
        <div ref={containerRef} className="fixed inset-0 -z-10" />

        {/* Industry Solutions Section */}
        <section className="py-20 ">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-center text-white mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Trusted by Industry Leaders
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-xl transition-all cursor-pointer ${
                    selectedIndustry === industry.id
                      ? "bg-purple-600/20 border-2 border-purple-500"
                      : "bg-gray-800/50 hover:bg-gray-700/50"
                  }`}
                  onClick={() => setSelectedIndustry(industry.id)}
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <span className="text-purple-400 mr-2">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Technical Specifications */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
            >
              {steelGrades.map((grade) => (
                <div
                  key={grade.grade}
                  className="bg-gray-900/50 p-6 rounded-xl"
                >
                  <div className="text-purple-400 text-2xl font-bold mb-2">
                    Grade {grade.grade}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Properties:</span>
                      <span className="text-white">{grade.properties}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Thickness Range:</span>
                      <span className="text-white">{grade.thickness}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
            >
              <div className="text-5xl font-bold text-purple-400 mb-2">
                {stats.projects}+
              </div>
              <div className="text-gray-300">Projects Completed</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-5xl font-bold text-purple-400 mb-2">
                {stats.clients}+
              </div>
              <div className="text-gray-300">Satisfied Clients</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-5xl font-bold text-purple-400 mb-2">
                {stats.years}+
              </div>
              <div className="text-gray-300">Years Experience</div>
            </motion.div>
          </div>
        </section>

        {/* Existing sections (Design Process, 3D Customizer, Product Selection) remain same... */}

        {/* Floating Price Display */}
        <motion.div
          className="fixed bottom-4 right-4 bg-gray-900/80 p-4 rounded-xl backdrop-blur-sm"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
        >
          <div className="text-lg font-bold text-purple-400">
            Estimated Price:{" "}
            <span className="text-white">₹{totalPrice.toLocaleString()}</span>
          </div>
          <div className="text-sm text-gray-400">
            Includes GST &amp; Installation
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Customization;
