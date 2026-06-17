// Peripheral Device Encyclopedia ("Peripedia") - script.js

// 1. Shared Database for Comparison Engine
const COMPARE_DATABASE = {
  keyboard: {
    name: "Keyboard",
    category: "Input",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=800",
    description: "A computer keyboard is one of the primary input devices used with a computer. It is composed of buttons that create letters, numbers, and symbols, and perform additional functions. It acts as the primary interface for typing text, executing shortcuts, and navigating operating systems. Modern keyboards connect either via wired cables (USB) or wireless technologies (Bluetooth, RF).",
    workingPrinciple: "A keyboard operates using an internal key matrix, which is a grid of circuits beneath the keys. When a key is pressed, it completes an electrical connection at a specific intersection of a row and a column. The keyboard controller detects this state, filters out key debouncing noise, identifies the key's scan code, and sends it to the computer.",
    specs: {
      "Connection Type": "Wired USB-C / Wireless Bluetooth 5.1 & 2.4GHz RF",
      "Number of Keys": "104 Standard Keys (Full Size) / 84 Keys (Tenkeyless)",
      "Switch Type": "Mechanical (Cherry MX Blue/Red/Brown) / Membrane (Rubber Dome)",
      "Layout": "QWERTY / AZERTY / QWERTZ / Dvorak / Colemak"
    },
    advantages: ["Extremely high efficiency and speed for text input.", "Tactile mechanical switches provide high accuracy.", "Extensive shortcuts bypass mouse navigation."],
    disadvantages: ["Can lead to repetitive strain injuries (RSI).", "Mechanical switches can be noisy.", "Not suitable for pointing or freehand drawing."]
  },
  mouse: {
    name: "Mouse",
    category: "Input",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=800",
    description: "A computer mouse is a hand-held pointing device that detects two-dimensional motion relative to a flat surface. This motion is translated into the movement of a pointer on a display, allowing smooth control of the graphical user interface (GUI). Standard mice include a left and right button, and a central scroll wheel.",
    workingPrinciple: "An optical mouse works by emitting light onto the surface below. A miniature sensor captures thousands of images per second. An internal Digital Signal Processor (DSP) analyzes differences between consecutive frames to calculate the direction and speed of movement, transmitting coordinates to the computer.",
    specs: {
      "DPI": "800 - 16,000 DPI (Adjustable DPI levels)",
      "Polling Rate": "125 Hz - 1000 Hz (USB response frequency)",
      "Connectivity": "Wired USB / 2.4GHz Wireless / Bluetooth 5.0",
      "Sensor Type": "Optical (LED red/blue light) / Laser (Infrared diode)"
    },
    advantages: ["Incredibly intuitive for GUI interaction.", "High precision spatial tracking.", "Scroll wheel makes page navigation effortless."],
    disadvantages: ["Requires flat, clear desk space.", "Can cause wrist strain after long hours.", "Useless for text entry or console navigation."]
  },
  printer: {
    name: "Printer",
    category: "Output",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800",
    description: "A printer is a peripheral device that accepts text and graphic output from a computer and transfers the information to paper. The primary printing technologies are inkjet (spraying liquid ink through tiny nozzles) and laser (melting dry toner powder onto the paper using a fuser unit).",
    workingPrinciple: "Inkjet printers use thermal or piezoelectric elements to squeeze liquid ink droplets through micro-nozzles onto paper. Laser printers use a laser beam to project an electrostatic image of the page onto a rotating photosensitive drum, which attracts dry toner. The paper passes by, and a heated fuser melts the toner into the fibers.",
    specs: {
      "Print Technology": "Thermal Inkjet / Electrostatic Laser / Dot Matrix Impact",
      "Print Speed": "12 - 40 Pages Per Minute (PPM)",
      "Resolution": "Up to 4800 x 1200 optimized DPI / 1200 x 1200 DPI",
      "Connectivity": "Wi-Fi 802.11b/g/n, Ethernet Port, USB 2.0"
    },
    advantages: ["Produces tangible hard copies for reading and signing.", "High-resolution color photo printing.", "Laser models offer rapid high-volume outputs."],
    disadvantages: ["Consumables (ink, toner, papers) are expensive.", "Prone to mechanical paper jams.", "Slow throughput compared to instant digital sharing."]
  },
  scanner: {
    name: "Scanner",
    category: "Input",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    description: "A scanner is an input device that optically scans images, printed text, handwriting, or an object, and converts it to a digital image. Standard configurations include flatbeds (glass plate), sheet-feds (ADF), and handheld wands. OCR software is often paired with scanners to convert print to editable text.",
    workingPrinciple: "A document is placed on glass and illuminated by a light source. A carriage containing Charge-Coupled Device (CCD) or Contact Image Sensor (CIS) sensors sweeps across. The sensors capture reflected light, convert it to electrical charges, and an ADC outputs digital pixels sent to the computer.",
    specs: {
      "Optical Resolution": "Up to 4800 x 9600 DPI / 600 x 600 DPI",
      "Scan Speed": "8 - 15 seconds per page / Up to 60 pages per minute",
      "Color Depth": "24-bit (Standard) / 48-bit (Professional photo grade)",
      "Interface": "SuperSpeed USB 3.0, Wi-Fi, Ethernet"
    },
    advantages: ["Converts physical records into secure digital copies.", "Reduces file cabinet storage costs.", "OCR turns scanned pages into editable files."],
    disadvantages: ["Image quality depends on original document condition.", "Manual flatbed scanning is slow for books.", "Professional CCD scanners are expensive."]
  },
  monitor: {
    name: "Monitor",
    category: "Output",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800",
    description: "A monitor is an output device that displays information in pictorial or text form. Modern monitors use Liquid Crystal Display (LCD) with LED backlighting or OLED panels. Resolution, refresh rate, and color accuracy determine the quality and target use-cases of the screen.",
    workingPrinciple: "A monitor controls pixels. In LCDs, a white LED backlight shines through polarizing filters and liquid crystals. Thin-film transistors apply currents to align the crystals, controlling light transmission through red, green, and blue sub-pixel filters to create colors. OLEDs emit light directly from organic pixels.",
    specs: {
      "Panel Type": "IPS (Color accuracy) / VA (Contrast) / TN (Speed) / OLED (Deep blacks)",
      "Resolution": "1920x1080 Full HD / 2560x1440 QHD / 3840x2160 4K Ultra HD",
      "Refresh Rate": "60 Hz / 144 Hz / 240 Hz / 360 Hz",
      "Response Time": "0.5ms - 4ms GtG (Gray-to-Gray)"
    },
    advantages: ["Provides instant, high-definition real-time visual feedback.", "Wide screens boost multi-window productivity.", "Eye-care features reduce glare and blue-light strain."],
    disadvantages: ["Consumes significant continuous electrical power.", "Can trigger Computer Vision Syndrome over long sessions.", "OLED panels can suffer from permanent burn-in."]
  },
  webcam: {
    name: "Webcam",
    category: "Input",
    image: "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=800",
    description: "A webcam is a digital video camera that feeds or streams an image or video in real time through a computer network. Webcams connect via USB and are typically attached to monitors, desktop workspaces, or integrated directly into laptops.",
    workingPrinciple: "Light is focused by glass lenses onto a CMOS image sensor. The light-sensitive pixels generate charges corresponding to light intensity and colors. Onboard processing digitizes and compresses the stream (using H.264 or MJPEG), sending it via USB to the computer.",
    specs: {
      "Video Resolution": "1080p Full HD @ 30/60 fps / 4K Ultra HD @ 30 fps",
      "Field of View (FOV)": "65° / 78° / 90° adjustable wide-angle views",
      "Focus Type": "Smart Autofocus with face tracking / Fixed manual focus",
      "Connection": "USB 2.0 / USB 3.0 Type-A / USB Type-C plug-and-play"
    },
    advantages: ["Facilitates instant global face-to-face communication.", "Compact, low-cost, and plug-and-play.", "Automatic light correction compensates for poor rooms."],
    disadvantages: ["Presents privacy and hacking security risks.", "Video degrades easily in low light (pixel noise).", "Consumes notable internet upload bandwidth."]
  },
  speaker: {
    name: "Speaker",
    category: "Output",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800",
    description: "Computer speakers are output devices designed to receive audio signals from sound cards and convert them into audible sound waves. They range from simple stereo pairs to multi-channel surround sound configurations with active subwoofers.",
    workingPrinciple: "The computer's DAC translates digital audio code into weak analog electrical currents. These are amplified and sent to the speaker's voice coil (electromagnet) placed inside a permanent magnet. The varying currents cause the coil to vibrate, moving the speaker cone to create sound waves in the air.",
    specs: {
      "Output Power": "10 Watts RMS (Desktop stereo) to 120 Watts RMS (With subwoofer)",
      "Frequency Response": "20 Hz - 20 kHz (Full human auditory hearing spectrum)",
      "Audio Interface": "3.5mm Aux Line-In, Bluetooth 5.0, USB Digital Audio, Optical Input",
      "Configuration": "2.0 Active Stereo / 2.1 Stereo with Subwoofer / 5.1 Surround Sound"
    },
    advantages: ["Allows group auditory listening without headsets.", "Delivers deep bass and high fidelity audio scales.", "Universal connection protocols are widely compatible."],
    disadvantages: ["Can easily disturb others in shared rooms.", "Multi-speaker arrays require significant desk workspace.", "High-end audiophile systems represent a high cost."]
  },
  microphone: {
    name: "Microphone",
    category: "Input",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800",
    description: "A microphone is an acoustic-to-electric transducer that converts sound waves in the air into electrical signals. It is standard for voice communications, recording studio content, text dictation, and smart assistant controls.",
    workingPrinciple: "In condenser microphones, sound waves strike a thin plastic diaphragm situated close to a metal backplate, acting as a capacitor. Vibrations alter the distance between plates, changing the capacitance and producing fluctuating currents that represent the captured sound.",
    specs: {
      "Polar Pattern": "Cardioid (Front directional) / Omnidirectional / Bidirectional / Figure-8",
      "Frequency Range": "20 Hz - 20 kHz (Studio quality capture spectrum)",
      "Bit Depth / Sample Rate": "24-bit / 96 kHz (High-res studio) / 16-bit / 48 kHz (Standard USB)",
      "Sensitivity": "-38dB ± 3dB (0dB = 1V/Pa at 1kHz)"
    },
    advantages: ["Enables hands-free computer controls and text dictation.", "USB models record high-fidelity voice without extra equipment.", "Directional polar patterns capture vocal details while filtering ambient noises."],
    disadvantages: ["Highly sensitive to background room reflections and echo.", "Condenser capsules are delicate and sensitive to humidity.", "Captures keyboard/mouse clicking noise if positioned closely."]
  },
  headphone: {
    name: "Headphone",
    category: "Output",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    description: "A pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an electrical signal to a corresponding sound. Headphones let a single user listen to an audio source privately, in contrast to a loudspeaker, which emits sound into the open air.",
    workingPrinciple: "A headphone operates on the same principle as a speaker. Electrical audio signals from the computer's sound card pass through a voice coil inside a permanent magnet. This creates a fluctuating magnetic field that causes the coil to vibrate. The coil is attached to a thin diaphragm, which moves the surrounding air to generate sound waves.",
    specs: {
      "Driver Size": "30mm - 50mm Dynamic Drivers",
      "Frequency Response": "10 Hz - 25 kHz (Extended range)",
      "Impedance": "16 Ohm - 300 Ohm (Low to High impedance)",
      "Connectivity": "Bluetooth 5.2 / 3.5mm Analog Audio / USB-C Digital"
    },
    advantages: ["Allows private listening without disturbing others.", "High-fidelity audio spatial mapping and detail capture.", "Passive or active noise cancellation blocks environment distraction."],
    disadvantages: ["Can cause ear fatigue or physical discomfort over hours.", "High volume settings present potential risk of hearing damage.", "Limits situational awareness of environment sounds."]
  },
  projector: {
    name: "Projector",
    category: "Output",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&q=80&w=800",
    description: "An optical output device that projects an image (or moving images) onto a surface, commonly a projection screen. Most projectors create an image by shining a light through a small transparent lens, but some newer types can project images directly using lasers.",
    workingPrinciple: "A projector receives video signals from a computer and processes them to control an internal light engine. Light splits into red, green, and blue beams, passing through small liquid crystal panels (LCD) or reflecting off a microscopic mirror chip (DLP) to create the image, which is then projected through a lens.",
    specs: {
      "Brightness": "2,000 - 5,000 ANSI Lumens",
      "Native Resolution": "1080p Full HD / 3840x2160 4K UHD",
      "Contrast Ratio": "10,000:1 to 1,000,000:1 (Dynamic)",
      "Light Source Type": "LED Lamp / Metal Halide Bulb / Laser Diode"
    },
    advantages: ["Projects massive screen sizes (100+ inches) for large audiences.", "Reflected light is softer on eyes than direct backlit monitors.", "Saves physical space when compared to buying giant TVs."],
    disadvantages: ["Requires dark or dimly lit rooms to prevent washed-out colors.", "Replacement lightbulbs can carry expensive maintenance fees.", "Cooling fans generate constant hum noise during operation."]
  },
  "barcode-reader": {
    name: "Barcode Reader",
    category: "Input",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
    description: "An optical input scanner that reads printed barcodes, decodes the data contained in the barcode, and sends the data to a computer. Like a flatbed scanner, it consists of a light source, a lens, and a light sensor translating optical impulses into electrical signals.",
    workingPrinciple: "A barcode reader sweeps a red light source across a barcode. The dark bars absorb the light, while the white spaces reflect it. A sensor detects the reflections and generates a wave pattern of varying electrical current, which a decoder chip converts into digital letters and numbers.",
    specs: {
      "Scan Technology": "Laser Diode / 2D Imager (CMOS Sensor)",
      "Scan Rate": "100 - 500 scans per second",
      "Max Read Distance": "1 inch to 3 feet / Up to 30 feet (Extended Range)",
      "Decoding Capability": "1D Barcode (UPC/EAN) / 2D Codes (QR Code, Data Matrix)"
    },
    advantages: ["Incredibly fast and accurate data logging without manual typing errors.", "Facilitates instant inventory tracking and retail transaction speed.", "Extremely rugged, shock-resistant builds suited for physical workspaces."],
    disadvantages: ["Requires direct line of sight to scan the code label.", "Damaged, dirty, or crinkled labels will fail to read.", "Cannot retrieve data if barcode formatting standards are corrupt."]
  },
  joystick: {
    name: "Joystick",
    category: "Input",
    image: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&q=80&w=800",
    description: "An input device consisting of a stick that pivots on a base and reports its angle or direction to the device it is controlling. Joysticks are widely used for flight simulators, arcade gaming, and controlling industrial machinery.",
    workingPrinciple: "A joystick operates using internal sensors to measure movement along two axes (X and Y). Potentiometers or contactless Hall-effect magnetic sensors detect changes in mechanical pivot angles. An onboard controller chip translates these shifts into coordinate data sent via USB.",
    specs: {
      "Axes of Movement": "3 Axes (Pitch, Roll, Twist Yaw)",
      "Sensor Type": "Potentiometers / Hall Effect Magnetic Sensors",
      "Buttons & Controls": "12+ programmable buttons, 8-way hat switch, throttle lever",
      "Connection Interface": "Wired USB Type-A / wireless RF"
    },
    advantages: ["Provides natural, three-dimensional spatial control mapping for simulators.", "Ergonomic designs prevent hand cramp fatigue during long flights.", "Precise analog inputs offer much finer adjustments than on/off keys."],
    disadvantages: ["Carries a steep learning curve for beginner operators.", "Highly specialized for simulations; poor for general desktop navigation.", "Larger flight throttle setups occupy significant desk workspaces."]
  }
};

// Subtype data for specialization comparisons
const SUBTYPE_DATABASE = {
  keyboard: [
    {
      name: "Mechanical Keyboard",
      mechanism: "Individual mechanical switch per key (spring-loaded)",
      durability: "High (50M - 100M presses)",
      tactility: "Highly tactile with audible click / bump feedback",
      suitability: "Gamers, coders, writers needing precise, fast keystrokes"
    },
    {
      name: "Membrane Keyboard",
      mechanism: "Silicone dome keypress sheet over printed copper tracings",
      durability: "Moderate (5M - 10M presses)",
      tactility: "Soft, mushy, quiet key feedback",
      suitability: "Quiet office desks and budget home environments"
    },
    {
      name: "Ergonomic Keyboard",
      mechanism: "Angled or split keyboard key layouts designed for body alignment",
      durability: "Depends on switch type (Membrane or Mechanical)",
      tactility: "Variable based on switch configuration",
      suitability: "Writers suffering wrist fatigue, RSI, or carpal tunnel strain"
    }
  ],
  mouse: [
    {
      name: "Optical Mouse",
      accuracy: "High (Optimal on cloth/textured surfaces)",
      dpi: "400 - 12,000 DPI",
      cost: "Low to Moderate ($15 - $50)",
      bestUse: "General office usage, competitive gaming on fabric mousepads."
    },
    {
      name: "Laser Mouse",
      accuracy: "Very High (Can track on glass/glossy surfaces; prone to acceleration jitter)",
      dpi: "2,000 - 25,000+ DPI",
      cost: "High ($60 - $120)",
      bestUse: "High-precision drafting, travelers working on diverse glass surfaces."
    },
    {
      name: "Wireless Mouse",
      accuracy: "High (Modern 2.4GHz links match wired speeds)",
      dpi: "800 - 16,000 DPI",
      cost: "Moderate to High ($30 - $150)",
      bestUse: "Clean, wire-free desk layouts, remote presentations, and mobility."
    }
  ],
  printer: [
    {
      name: "Inkjet Printer",
      speed: "Moderate (10 - 20 PPM)",
      cost: "Low unit cost; High ink costs ($30 - $150 unit)",
      quality: "Superb for high-resolution photo and color graphics",
      maintenance: "High (Nozzles dry out and clog if not operated regularly)"
    },
    {
      name: "Laser Printer",
      speed: "Very High (25 - 50+ PPM)",
      cost: "Higher unit cost; Very low cost per page ($100 - $400 unit)",
      quality: "Sharp, crisp monochrome text; decent color graphics",
      maintenance: "Low (Toner is a dry polymer powder that does not dry out)"
    },
    {
      name: "Dot Matrix Printer",
      speed: "Slow to Moderate (character-by-character impact)",
      cost: "Very low unit maintenance; cheap ink ribbons ($150 - $300 unit)",
      quality: "Low resolution; highly pixelated text output",
      maintenance: "Very Low (Extremely rugged, handles carbon-copy papers)"
    }
  ],
  scanner: [
    {
      name: "Flatbed Scanner",
      resolution: "Very High (Up to 4800 - 9600 DPI)",
      portability: "Low (Heavy desktop size, fragile glass plate)",
      speed: "Moderate (10 - 15 seconds per single page)",
      typicalUse: "Scanning high-fidelity photos, bound books, and fragile papers."
    },
    {
      name: "Sheet-fed Scanner",
      resolution: "Moderate (600 - 1200 DPI)",
      portability: "Moderate (Space-saving compact office footprint)",
      speed: "Very High (30 - 80 PPM using Automatic Document Feeder)",
      typicalUse: "High-volume, double-sided document digitization and archiving."
    },
    {
      name: "Handheld Scanner",
      resolution: "Low to Moderate (300 - 900 DPI)",
      portability: "Very High (Battery-operated, pocketable stick shape)",
      speed: "Slow (Dependent on steady, manual sweeping speed)",
      typicalUse: "Capturing quick receipts, scanning book quotes in libraries."
    }
  ],
  monitor: [
    {
      name: "IPS Monitor",
      colors: "Superior (100% sRGB / DCI-P3 color gamuts)",
      angles: "Wide (178° viewing angles with no color shifts)",
      contrast: "Standard (1000:1 contrast ratio)",
      bestUse: "Graphic design, photo editing, and color-accurate office work."
    },
    {
      name: "VA Monitor",
      colors: "Good (Standard color spectrum reproduction)",
      angles: "Moderate (Minor shift when viewed from sides)",
      contrast: "High (3000:1 to 4000:1 contrast ratios; deep blacks)",
      bestUse: "Movie viewing, casual gaming, and contrast-rich curved setups."
    },
    {
      name: "OLED Monitor",
      colors: "Extreme (Perfect color gamuts with pure highlights)",
      angles: "Wide (Zero color shifts at any perspective angle)",
      contrast: "Infinite (Individual self-lit pixel shutting, true black)",
      bestUse: "Premium gaming, HDR media creation, and home cinema rooms."
    }
  ],
  webcam: [
    {
      name: "Integrated Webcam",
      resolution: "Standard HD (720p resolution)",
      framerate: "Moderate (30 frames per second)",
      lens: "Basic plastic lens with fixed focus distances",
      suitability: "Casual laptop users needing basic emergency video calls"
    },
    {
      name: "External 1080p Webcam",
      resolution: "Full HD (1080p high definition)",
      framerate: "Smooth (30 or 60 frames per second)",
      lens: "Glass lens with automatic focus and light correction",
      suitability: "Corporate workers, remote professionals, and online lecturers"
    },
    {
      name: "4K Conference Webcam",
      resolution: "Ultra HD (4K extreme detail)",
      framerate: "High (Smooth 30 fps 4K or 60 fps 1080p)",
      lens: "Premium wide-angle glass lens with auto face framing",
      suitability: "Conference rooms, group boardrooms, and professional streamers"
    }
  ],
  speaker: [
    {
      name: "Stereo 2.0 Speakers",
      channels: "2 audio channels (Left & Right desk units)",
      bass: "Standard (Fidelity limited to mids/highs; no subwoofer)",
      wiring: "Simple (Single aux line and power cable)",
      bestUse: "Compact workspaces, office cubicles, and basic audio listening"
    },
    {
      name: "Surround 5.1 System",
      channels: "6 audio channels (5 surrounds + 1 dedicated subwoofer)",
      bass: "Very Rich (Dedicated floor-unit active subwoofer box)",
      wiring: "Complex (Requires multiple channels routed around the room)",
      bestUse: "Home theater setups, console gaming rooms, and audiophiles"
    },
    {
      name: "Soundbar & Subwoofer",
      channels: "3 channels simulated (Compact horizontal bar)",
      bass: "Rich (Comes with compact wireless companion subwoofer)",
      wiring: "Simple (Optical or HDMI Arc single connection)",
      bestUse: "Under-monitor desk setups and TV stands desiring neat layouts"
    }
  ],
  microphone: [
    {
      name: "USB Condenser Mic",
      sensitivity: "High (Picks up rich vocal details and nuances)",
      patterns: "Variable (Supports Cardioid, Omni, and Bidirectional)",
      noiseRejection: "Low (Picks up keyboard clicks and fan hums)",
      bestUse: "Home recording, voice acting, podcasting, and streaming"
    },
    {
      name: "Dynamic Studio Mic",
      sensitivity: "Moderate (Focuses only on sounds right next to the mic)",
      patterns: "Fixed directional (Cardioid / Supercardioid)",
      noiseRejection: "Very High (Naturally blocks background ambient noises)",
      bestUse: "Broadcasting, recording in noisy rooms, and vocal captures"
    },
    {
      name: "Lavaliere Clip-On Mic",
      sensitivity: "Moderate (Designed to capture clear chest voice)",
      patterns: "Omnidirectional (Consistent vocal level when head turns)",
      noiseRejection: "Moderate (Focuses on speaker's immediate area)",
      bestUse: "Vlogging, mobile journalism, walking lectures, and interviews"
    }
  ],
  headphone: [
    {
      name: "Over-Ear Headphone",
      driverSize: "40mm - 50mm dynamic drivers",
      passiveIsolation: "High (Cups enclose the entire ear lobe)",
      wearingStyle: "Around-Ear headband layout",
      typicalUse: "Studio monitoring, audio engineering, gaming setups, and office work."
    },
    {
      name: "On-Ear Headphone",
      driverSize: "30mm - 40mm dynamic drivers",
      passiveIsolation: "Moderate (Pads sit directly on top of the ears)",
      wearingStyle: "On-Ear lightweight headband layout",
      typicalUse: "Casual travel commuting, lightweight office calls, and kids' learning labs."
    },
    {
      name: "In-Ear Earbuds",
      driverSize: "6mm - 12mm micro drivers",
      passiveIsolation: "Very High (Soft silicone tips seal the ear canal)",
      wearingStyle: "Direct in-ear insertion with stable wingtips",
      typicalUse: "Gym workouts, running, mobile phone calls, and high-portability travel."
    }
  ],
  projector: [
    {
      name: "DLP Projector",
      contrast: "High (Deep black levels and higher native contrast)",
      colorReproduction: "Good (Accurate tones; prone to color-wheel rainbow effect)",
      lampLifespan: "Standard (3,000 - 5,000 hours bulb lifespan)",
      typicalUse: "Home cinemas, dark gaming rooms, and high-contrast movies."
    },
    {
      name: "LCD Projector",
      contrast: "Standard (Decent blacks; minor grey tinting in dark rooms)",
      colorReproduction: "Excellent (Vibrant, highly saturated color output)",
      lampLifespan: "Standard (4,000 - 6,000 hours bulb lifespan)",
      typicalUse: "Classrooms, office boardrooms, and highly lit presentation halls."
    },
    {
      name: "Laser Projector",
      contrast: "Extreme (Infinite dynamic contrast ratios)",
      colorReproduction: "Superior (Ultra-wide gamuts matching cinematic standards)",
      lampLifespan: "Very High (20,000+ hours maintenance-free light source)",
      typicalUse: "Large commercial venues, auditoriums, and premium custom theaters."
    }
  ],
  "barcode-reader": [
    {
      name: "Handheld Laser Scanner",
      scanEngine: "Single red laser diode and oscillating mirror",
      readSpeed: "Fast (100 scans/sec; line must align with barcode)",
      supportedCodes: "1D linear barcodes only (UPC, EAN, Code 39)",
      typicalUse: "Retail point-of-sale cash registers and book library indexing."
    },
    {
      name: "Omnidirectional Presentation Scanner",
      scanEngine: "Multi-line laser grid or rastering mirrors",
      readSpeed: "Extremely Fast (1,000+ scans/sec; scans at any orientation)",
      supportedCodes: "1D linear barcodes only",
      typicalUse: "High-throughput supermarket checkout lanes and package sorting."
    },
    {
      name: "2D Area Imager",
      scanEngine: "2D CMOS camera image sensor with LED illumination",
      readSpeed: "Very Fast (Reads codes from screens, damaged labels, any angle)",
      supportedCodes: "1D & 2D codes (QR Codes, PDF417, Data Matrix)",
      typicalUse: "Mobile ticketing, boarding passes, warehouse stock tracking, and pharmacy logs."
    }
  ],
  joystick: [
    {
      name: "Flight Simulation Joystick (HOTAS)",
      sensorType: "High-precision contactless Hall Effect magnetic sensors",
      gripDesign: "Ergonomic flight stick with separate physical throttle controller",
      programmableInputs: "16+ buttons, 8-way hat switch, multi-axis analog controls",
      typicalUse: "Civilian and military flight simulator games and pilot training."
    },
    {
      name: "Arcade Joystick",
      sensorType: "Clicky microswitches with octagonal/square physical gates",
      gripDesign: "Classic heavy-duty ball-top or bat-top handle shaft",
      programmableInputs: "8 arcade microswitch action buttons, 4-way or 8-way directional stick",
      typicalUse: "Retro arcade cabinets, fighting games, and retro console emulation."
    },
    {
      name: "Industrial Controller Joystick",
      sensorType: "Contactless sensors housed in weatherproof rugged casings",
      gripDesign: "Heavy-duty spring-return lever with safety deadman switch button",
      programmableInputs: "Single trigger button, standard analog X/Y coordinate outputs",
      typicalUse: "Operating construction cranes, warehouse forklifts, electric wheelchairs, and UAVs."
    }
  ]
};

// 2. Global Fuzzy Search Engine
function setupGlobalSearch() {
  const searchInput = document.getElementById("global-search-input");
  const resultsContainer = document.getElementById("search-results-dropdown");

  if (!searchInput || !resultsContainer) return;

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    
    if (query.length < 2) {
      resultsContainer.classList.add("hidden");
      resultsContainer.innerHTML = "";
      return;
    }

    const matches = [];

    // Filter local compare database keys for global routing redirection
    for (const key in COMPARE_DATABASE) {
      const dev = COMPARE_DATABASE[key];
      const matchName = dev.name.toLowerCase().includes(query);
      const matchDesc = dev.description.toLowerCase().includes(query);
      const matchWorking = dev.workingPrinciple.toLowerCase().includes(query);
      const matchCat = dev.category.toLowerCase().includes(query);

      if (matchName || matchDesc || matchWorking || matchCat) {
        matches.push({
          key: key,
          name: dev.name,
          category: dev.category,
          snippet: dev.description.substring(0, 75) + "..."
        });
      }
    }

    if (matches.length > 0) {
      resultsContainer.classList.remove("hidden");
      resultsContainer.innerHTML = matches.map(match => `
        <div class="search-result-item" onclick="selectSearchResult('${match.key}')">
          <div class="result-header">
            <span class="result-name">${match.name}</span>
            <span class="category-badge ${match.category.toLowerCase()} text-xs">${match.category}</span>
          </div>
          <div class="result-snippet">${match.snippet}</div>
        </div>
      `).join("");
    } else {
      resultsContainer.classList.remove("hidden");
      resultsContainer.innerHTML = `<div class="search-no-results">No peripheral matches found.</div>`;
    }
  });

  // Hide dropdown on click outside
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
      resultsContainer.classList.add("hidden");
    }
  });
}

// Redirect search result clicks directly to the static HTML page
window.selectSearchResult = function(deviceKey) {
  const searchInput = document.getElementById("global-search-input");
  const resultsContainer = document.getElementById("search-results-dropdown");
  
  searchInput.value = "";
  resultsContainer.classList.add("hidden");
  window.location.href = `${deviceKey}.html`;
};

// 3. Persisted Theme Selector (Runs on all pages)
function setupThemeMode() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute("data-theme", "dark");
    updateThemeToggleIcon(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    updateThemeToggleIcon(false);
  }

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      updateThemeToggleIcon(false);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      updateThemeToggleIcon(true);
    }
  });
}

function updateThemeToggleIcon(isDark) {
  const btn = document.getElementById("theme-toggle-btn");
  if (!btn) return;
  if (isDark) {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  } else {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

// 4. Mobile side-nav menu drawer
function setupMobileNav() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links-wrapper");

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.classList.toggle("open");
  });
}

// 5. Scroll Back to Top widget
function setupBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 6. Sticky Sidebar Scroll Spy for Device Detail sections
function setupDetailScrollSpy() {
  const sections = document.querySelectorAll(".detail-section");
  const navLinks = document.querySelectorAll(".subnav-link");

  if (sections.length === 0 || navLinks.length === 0) return;

  window.addEventListener("scroll", () => {
    let currentSectionId = "";
    const scrollPos = window.scrollY + 120; // offset tolerancing

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = sec.getAttribute("id");
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        const href = link.getAttribute("onclick");
        if (href && href.includes(currentSectionId)) {
          link.classList.add("active");
        }
      });
    }
  });
}

// In-page smooth scroll trigger for device subnavs
window.scrollToDetailSection = function(sectionId, element) {
  event.preventDefault();
  const target = document.getElementById(sectionId);
  if (target) {
    const headerHeight = 90;
    const targetOffset = target.offsetTop - headerHeight;
    window.scrollTo({ top: targetOffset, behavior: "smooth" });
    
    document.querySelectorAll(".subnav-link").forEach(l => l.classList.remove("active"));
    element.classList.add("active");
  }
};

// 7. Interactive Device Comparison Page Logic (`compare.html`)
window.toggleComparisonMode = function(mode) {
  document.querySelectorAll(".compare-tab-btn").forEach(btn => btn.classList.remove("active"));
  document.getElementById(`tab-${mode}`).classList.add("active");

  if (mode === "generic") {
    document.getElementById("compare-panel-generic").classList.remove("hidden");
    document.getElementById("compare-panel-subtypes").classList.add("hidden");
  } else {
    document.getElementById("compare-panel-generic").classList.add("hidden");
    document.getElementById("compare-panel-subtypes").classList.remove("hidden");
  }
};

window.runGenericComparison = function() {
  const key1 = document.getElementById("device1-select").value;
  const key2 = document.getElementById("device2-select").value;
  const tableWrapper = document.getElementById("generic-comparison-table-wrapper");

  if (!tableWrapper) return;

  if (!key1 || !key2) {
    tableWrapper.innerHTML = `
      <div class="text-center py-5 text-muted">
        <p>Please select two devices from the dropdown lists above to generate a side-by-side comparison table.</p>
      </div>
    `;
    return;
  }

  if (key1 === key2) {
    tableWrapper.innerHTML = `
      <div class="text-center py-5 text-warning">
        <p>Warning: Please select two different devices to generate an informative comparison matrix.</p>
      </div>
    `;
    return;
  }

  const d1 = COMPARE_DATABASE[key1];
  const d2 = COMPARE_DATABASE[key2];

  let specRowsHtml = "";
  const allSpecs = Array.from(new Set([...Object.keys(d1.specs), ...Object.keys(d2.specs)]));
  
  allSpecs.forEach(spec => {
    specRowsHtml += `
      <tr>
        <td class="compare-row-header">${spec}</td>
        <td class="compare-val-col">${d1.specs[spec] || "<span class='text-muted'>N/A</span>"}</td>
        <td class="compare-val-col">${d2.specs[spec] || "<span class='text-muted'>N/A</span>"}</td>
      </tr>
    `;
  });

  tableWrapper.innerHTML = `
    <div class="table-responsive">
      <table class="gsm-compare-table">
        <thead>
          <tr>
            <th class="col-feature">Device Features</th>
            <th class="col-device">
              <div class="header-dev-cell">
                <img src="${d1.image}" alt="${d1.name}" class="compare-thumbnail">
                <div class="compare-meta">
                  <h4>${d1.name}</h4>
                  <span class="category-badge ${d1.category.toLowerCase()}">${d1.category}</span>
                </div>
              </div>
            </th>
            <th class="col-device">
              <div class="header-dev-cell">
                <img src="${d2.image}" alt="${d2.name}" class="compare-thumbnail">
                <div class="compare-meta">
                  <h4>${d2.name}</h4>
                  <span class="category-badge ${d2.category.toLowerCase()}">${d2.category}</span>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-section-divider">
            <td colspan="3">1. General Overview</td>
          </tr>
          <tr>
            <td class="compare-row-header">Description</td>
            <td class="compare-val-col text-justify text-sm">${d1.description}</td>
            <td class="compare-val-col text-justify text-sm">${d2.description}</td>
          </tr>
          <tr>
            <td class="compare-row-header">Working Principle</td>
            <td class="compare-val-col text-sm">${d1.workingPrinciple}</td>
            <td class="compare-val-col text-sm">${d2.workingPrinciple}</td>
          </tr>
          
          <tr class="table-section-divider">
            <td colspan="3">2. Technical Specifications</td>
          </tr>
          ${specRowsHtml}

          <tr class="table-section-divider">
            <td colspan="3">3. Pros & Cons</td>
          </tr>
          <tr>
            <td class="compare-row-header">Key Advantage</td>
            <td class="compare-val-col compare-pro-col">✔ ${d1.advantages[0]}</td>
            <td class="compare-val-col compare-pro-col">✔ ${d2.advantages[0]}</td>
          </tr>
          <tr>
            <td class="compare-row-header">Key Disadvantage</td>
            <td class="compare-val-col compare-con-col">✘ ${d1.disadvantages[0]}</td>
            <td class="compare-val-col compare-con-col">✘ ${d2.disadvantages[0]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
};

window.onSubtypeCategoryChange = function() {
  const cat = document.getElementById("subtype-category-select").value;
  const tableWrapper = document.getElementById("subtype-comparison-table-wrapper");

  if (!tableWrapper) return;

  if (!cat) {
    tableWrapper.innerHTML = `
      <div class="text-center py-5 text-muted">
        <p>Please choose a category from the dropdown to compare its core technological subtypes (e.g., Inkjet vs Laser printers).</p>
      </div>
    `;
    return;
  }

  const subs = SUBTYPE_DATABASE[cat];
  if (!subs) return;

  // Generic metadata dynamic renderer
  const keys = Object.keys(subs[0]).filter(k => k !== 'name');
  
  let headerCols = `<th class="col-feature">Parameters</th>`;
  subs.forEach(sub => {
    headerCols += `<th>${sub.name}</th>`;
  });

  let rowsHtml = "";
  keys.forEach(key => {
    const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
    let rowCells = `<td class="compare-row-header">${capitalizedKey}</td>`;
    subs.forEach(sub => {
      rowCells += `<td class="compare-val-col">${sub[key]}</td>`;
    });
    rowsHtml += `<tr>${rowCells}</tr>`;
  });

  tableWrapper.innerHTML = `
    <div class="table-responsive">
      <table class="gsm-compare-table">
        <thead>
          <tr>
            ${headerCols}
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>
  `;
};

// 8. FAQ Accordion Click Handler (`faq.html`)
window.toggleFaqAccordion = function(element) {
  const panel = element.nextElementSibling;
  const arrow = element.querySelector(".faq-arrow-icon");
  const isOpen = panel.classList.contains("active");

  document.querySelectorAll(".faq-answer-panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".faq-arrow-icon").forEach(a => a.classList.remove("rotated"));

  if (!isOpen) {
    panel.classList.add("active");
    arrow.classList.add("rotated");
  }
};

// 9. Feedback Form handler (`about.html`)
window.handleFeedbackSubmit = function(e) {
  e.preventDefault();
  const form = document.getElementById("project-feedback-form");
  const successBox = document.getElementById("feedback-success-msg");
  
  if (form && successBox) {
    form.style.display = "none";
    successBox.classList.remove("hidden");
    successBox.style.opacity = 1;
  }
};

// 10. Home Category Filtering (Runs on `index.html`)
window.filterHomeCards = function(category, element) {
  const filters = document.querySelectorAll(".filter-btn");
  filters.forEach(btn => btn.classList.remove("active"));
  
  if (element) {
    element.classList.add("active");
  } else {
    // Find matching button by category string if element not provided directly
    filters.forEach(btn => {
      if (btn.innerText.toLowerCase().includes(category)) {
        btn.classList.add("active");
      }
    });
  }

  const cards = document.querySelectorAll(".device-card");
  cards.forEach(card => {
    const badge = card.querySelector(".category-badge");
    const cardCat = badge.innerText.toLowerCase();
    
    if (category === "all" || cardCat === category) {
      card.style.display = "flex";
      setTimeout(() => card.style.opacity = "1", 50);
    } else {
      card.style.opacity = "0";
      card.style.display = "none";
    }
  });
};

// Auto category filter on loading home page via parameter ?filter=input/output
function checkCategoryFilterOnLoad() {
  const urlParams = new URLSearchParams(window.location.search);
  const filter = urlParams.get("filter");
  if (filter && (filter === "input" || filter === "output")) {
    const grid = document.getElementById("devices-grid");
    if (grid) {
      window.filterHomeCards(filter);
      // Smooth scroll to devices grid
      setTimeout(() => {
        const headerHeight = 90;
        const targetOffset = document.querySelector(".categories-section").offsetTop - headerHeight;
        window.scrollTo({ top: targetOffset, behavior: "smooth" });
      }, 300);
    }
  }
}

// 11. Central Quiz Question Database (10 questions per device)
const QUIZ_DATABASE = {
  keyboard: [
    { q: "What is the primary function of a keyboard matrix?", options: ["To translate scan codes into letters", "To detect which key has completed an electrical connection", "To filter out double key presses", "To power the LED backlighting"], answer: 1, explanation: "The keyboard matrix is a grid of circuits beneath the keys that is completed when a key is pressed, allowing the controller to locate the press." },
    { q: "Which switch type uses a physical spring-loaded plunger for tactile key registration?", options: ["Membrane switch", "Capacitive switch", "Mechanical switch", "Rubber dome switch"], answer: 2, explanation: "Mechanical keyboards use individual physical switches containing a spring-loaded plunger and metal contacts for precise, tactile keypresses." },
    { q: "What does the debouncing algorithm inside a keyboard controller do?", options: ["Increases the LED backlighting speed", "Filters out mechanical noise of key contacts clicking", "Compresses scan codes for USB transfer", "Translates QWERTY layout to DVORAK"], answer: 1, explanation: "Debouncing filters out the rapid mechanical vibrations of metal contacts clicking together, ensuring only a single keypress is registered." },
    { q: "Which of the following is a classic non-QWERTY ergonomic keyboard layout?", options: ["AZERTY", "QWERTZ", "Dvorak", "ANSI"], answer: 2, explanation: "Dvorak is an alternative keyboard layout designed to place common letters on the home row, reducing hand movement and strain." },
    { q: "How does a standard keyboard connect to a computer system?", options: ["HDMI or DisplayPort", "USB Type-A/C or Bluetooth/RF", "SATA or PCIe bus", "RJ-45 Ethernet"], answer: 1, explanation: "Keyboards typically connect via wired USB connections or wireless protocols like Bluetooth or 2.4GHz RF controllers." },
    { q: "What code is initially generated by the keyboard controller when a key is pressed?", options: ["ASCII Code", "Unicode", "Scan Code", "Binary Machine Code"], answer: 2, explanation: "A keyboard controller generates a raw 'Scan Code' representing the key's position, which the OS device driver later translates to ASCII or Unicode." },
    { q: "What is a major disadvantage of membrane keyboards compared to mechanical keyboards?", options: ["They are much noisier", "They are too expensive to replace", "They have a shorter lifespan and mushier feel", "They consume too much electrical power"], answer: 2, explanation: "Membrane keyboards have a shorter lifespan (5-10M keystrokes) and a softer, mushier typing feel due to the rubber dome layer degrading." },
    { q: "What is the standard number of keys on a full-sized desktop keyboard?", options: ["84 Keys", "104 Keys", "68 Keys", "120 Keys"], answer: 1, explanation: "A standard full-sized QWERTY desktop keyboard has 104 keys, which includes a dedicated numeric keypad and function row." },
    { q: "A mechanical keyboard switch uses a rubber dome to complete the circuit.", options: ["True", "False"], answer: 1, explanation: "False. Mechanical switches use individual spring-loaded plastic plungers and metal leaf contacts, not rubber domes." },
    { q: "QWERTY layout was originally designed to prevent mechanical typewriter keys from jamming.", options: ["True", "False"], answer: 0, explanation: "True. The QWERTY layout separated frequently used letter pairs to prevent physical typewriter bars from colliding and jamming." }
  ],
  mouse: [
    { q: "What does DPI stand for in computer mouse specifications?", options: ["Data Per Inch", "Digital Pixel Index", "Dots Per Inch", "Display Point Indicator"], answer: 2, explanation: "DPI stands for Dots Per Inch, which dictates the measurement of cursor movement sensitivity relative to physical hand motion." },
    { q: "How does an optical mouse track motion?", options: ["By sweeping a physical rubber trackball", "By capturing surface images and analyzing differences", "By measuring infrared temperature shifts", "By mechanical friction gears"], answer: 1, explanation: "Optical mice emit light and use a tiny sensor to capture thousands of surface images per second, tracking movement mathematically." },
    { q: "What internal chip analyzes surface frame differences in an optical mouse?", options: ["ALU (Arithmetic Logic Unit)", "DSP (Digital Signal Processor)", "BIOS Chip", "GPU"], answer: 1, explanation: "The Digital Signal Processor (DSP) inside the mouse sensor calculates coordinate displacement from sequential surface frame captures." },
    { q: "What is the polling rate of a computer mouse?", options: ["The optical tracking resolution", "The speed of the scroll wheel encoder", "The frequency at which coordinates are reported (Hz)", "The maximum speed before losing tracking"], answer: 2, explanation: "Polling rate measures how many times per second (e.g. 125Hz - 1000Hz) the mouse reports its position data to the host CPU." },
    { q: "Which mouse sensor type is capable of tracking on glossy glass surfaces?", options: ["Red LED Optical", "Infrared Laser", "Contact Roller", "Blue LED Optical"], answer: 1, explanation: "Laser mice use coherent light diodes that map microscopic surface imperfections, allowing them to track on glass or glossy tables." },
    { q: "Which specification determines the mouse input responsiveness latency?", options: ["DPI sensitivity", "Polling Rate", "Sensor Pixel Array Size", "USB Cable Gauge"], answer: 1, explanation: "Higher polling rates (like 1000Hz) reduce mouse input delay to 1 millisecond, yielding smoother cursor responses." },
    { q: "What does mouse acceleration do?", options: ["Increases tracking resolution on high speed swipes", "Moves the cursor further when hand swipe velocity increases", "Powers up the internal wireless transmitter speed", "Calibrates the mouse sensor to steel surfaces"], answer: 1, explanation: "Mouse acceleration makes the cursor move further if you swipe the mouse quickly, which is often disabled by competitive gamers for muscle consistency." },
    { q: "What is a common ergonomic injury associated with prolonged incorrect mouse usage?", options: ["Tinnitus", "Repetitive Strain Injury (RSI)", "Presbyopia", "Scoliosis"], answer: 1, explanation: "Prolonged wrist twisting and repetitive mouse clicking can lead to Carpal Tunnel Syndrome or Repetitive Strain Injury (RSI)." },
    { q: "A higher DPI mouse sensor is always physically larger than a low DPI one.", options: ["True", "False"], answer: 1, explanation: "False. DPI is a sensitivity rating based on the optical density of the sensor array, not the physical dimensions of the mouse chip." },
    { q: "Laser mice can track on glass surfaces while standard optical mice struggle.", options: ["True", "False"], answer: 0, explanation: "True. Laser sensors capture microscopic details on transparent surfaces, whereas traditional optical LEDs pass straight through glass." }
  ],
  printer: [
    { q: "Which printing technology uses static electricity to transfer dry plastic powder onto paper?", options: ["Thermal Inkjet", "Laser Printing", "Impact Dot Matrix", "Piezoelectric Inkjet"], answer: 1, explanation: "Laser printers use an electrostatic drum and a fuser assembly to attract, transfer, and melt dry toner powder into paper fibers." },
    { q: "What is the name of the dry powder ink utilized by laser printers?", options: ["Cartridge dye", "Polymer liquid", "Toner", "Ribbon wax"], answer: 2, explanation: "Laser printers use toner, which is a fine, dry plastic-and-polymer powder that is attracted electrostatically to the drum." },
    { q: "What component in a laser printer uses heat and pressure to melt toner into paper?", options: ["Corona wire", "Fuser Unit", "Photosensitive Drum", "Laser scanner assembly"], answer: 1, explanation: "The fuser unit contains heated rollers that melt the dry toner particles, bonding them permanently to the paper's fiber grid." },
    { q: "How do thermal inkjet printers eject ink droplets?", options: ["By high-pressure air pumps", "By heating ink to form a vapor bubble that forces a droplet out", "By mechanical hammers hitting ink ribbons", "By vibrating electrostatic speakers"], answer: 1, explanation: "Thermal inkjets heat the print head nozzles, creating vapor bubbles that expand and push liquid ink droplets onto the paper." },
    { q: "What metric measures the speed of desktop printers?", options: ["DPI", "PPM (Pages Per Minute)", "Hz", "IPS"], answer: 1, explanation: "Printer throughput speed is rated in PPM (Pages Per Minute), which represents the output capability for standard text pages." },
    { q: "What is a main advantage of laser toners over liquid inkjet cartridges?", options: ["They do not clog or dry out if left unused", "They are cheaper to purchase initially", "They print much richer color glossy photos", "They operate at much lower temperatures"], answer: 0, explanation: "Toner is a dry powder, so it does not dry out, clog nozzles, or degrade over months of inactivity like liquid inkjet inks." },
    { q: "What unit measures print output quality and sharpness?", options: ["PPM", "DPI (Dots Per Inch)", "Dpi (Decibels per inch)", "Pica rate"], answer: 1, explanation: "DPI (Dots Per Inch) determines print resolution; higher DPI means finer, sharper details and smoother gradients." },
    { q: "Which printer type is most suited for industrial carbon-copy invoices?", options: ["Inkjet Printer", "Laser Printer", "Dot Matrix Impact Printer", "3D Resin Printer"], answer: 2, explanation: "Dot matrix printers physically strike an inked ribbon against the page using pins, generating the mechanical force needed to imprint carbon copies." },
    { q: "Laser printers print pages by spraying a liquid ink mist onto the paper.", options: ["True", "False"], answer: 1, explanation: "False. Laser printers use dry toner powder transferred electrostatically and melted onto the paper via fuser rollers." },
    { q: "A thermal inkjet printhead uses heat to create ink bubbles that eject droplets.", options: ["True", "False"], answer: 0, explanation: "True. Thermal printheads flash-heat the nozzle chambers to bubble-eject droplets, differing from piezoelectric crystal vibrations." }
  ],
  scanner: [
    { q: "What component converts reflected light from a scanned document into electrical signals?", options: ["LED array", "CCD (Charge-Coupled Device) or CIS", "OCR decoder", "Glass carriage motor"], answer: 1, explanation: "CCD and CIS are optical sensor arrays that capture photons reflected off the document and translate them into electric charges." },
    { q: "What software analyzes document pixels and translates them into editable text character codes?", options: ["BIOS driver", "OCR (Optical Character Recognition)", "PDF compiler", "DirectX engine"], answer: 1, explanation: "Optical Character Recognition (OCR) translates pixel patterns of alphanumeric letters in an image into editable, searchable text." },
    { q: "What type of scanner uses an ADF to sweep pages over a stationary sensor?", options: ["Flatbed Scanner", "Sheet-fed Document Scanner", "Handheld Wand Scanner", "3D LiDAR Scanner"], answer: 1, explanation: "Sheet-fed scanners use an Automatic Document Feeder (ADF) to grab, pull, and scan stacks of single pages rapidly." },
    { q: "What does color depth (bit depth) in scanners indicate?", options: ["The time required to scan full-color items", "The total amount of color information captured per pixel", "The maximum dimensions of document sheets", "The output file size compression ratio"], answer: 1, explanation: "Color depth (e.g. 24-bit or 48-bit) determines the nuances of color tones and gradations a scanner can detect and output." },
    { q: "What sensor technology allows modern flatbed scanners to be thin and powered entirely by USB?", options: ["CCD Sensor", "CIS (Contact Image Sensor)", "LiDAR Sensor", "Photodiode array"], answer: 1, explanation: "CIS technology places sensors directly near the scan glass with LEDs, requiring far less power and no mirrors/lenses compared to CCD." },
    { q: "What does ADC stand for in scanner circuits?", options: ["Analog-to-Digital Converter", "Automatic Document Controller", "Active Depth Calibrator", "Audio Device Connector"], answer: 0, explanation: "The Analog-to-Digital Converter (ADC) translates analog voltage outputs from optical sensors into digital binary color values." },
    { q: "Which scanner configuration is best for fragile historic scrapbooks?", options: ["ADF Sheet-fed Scanner", "Flatbed Glass Scanner", "Barcode Imager", "3D Laser Scanner"], answer: 1, explanation: "Flatbed scanners let documents rest static on a flat glass plate, avoiding the risk of tearing or crushing delicate papers." },
    { q: "What is a typical professional resolution rating for high-fidelity photo flatbed scanners?", options: ["300 x 600 DPI", "4800 x 9600 DPI", "720 x 1080 DPI", "1200 x 1200 DPI"], answer: 1, explanation: "High-end photo flatbeds boast up to 4800 x 9600 DPI optical resolutions, resolving microscopic details in film slides and prints." },
    { q: "A scanner's optical resolution is measured in DPI (Dots Per Inch).", options: ["True", "False"], answer: 0, explanation: "True. Like printers, scanner pixel density and resolution capability is measured in DPI (Dots Per Inch)." },
    { q: "OCR software stands for Optical Carrier Recognition.", options: ["True", "False"], answer: 1, explanation: "False. OCR stands for Optical Character Recognition." }
  ],
  monitor: [
    { q: "Which panel technology is best known for color accuracy and wide viewing angles?", options: ["TN (Twisted Nematic)", "VA (Vertical Alignment)", "IPS (In-Plane Switching)", "CRT Phosphor"], answer: 2, explanation: "IPS (In-Plane Switching) panels align liquid crystals horizontally, yielding accurate color reproduction and 178° viewing angles." },
    { q: "What does refresh rate measure in computer monitors?", options: ["The velocity of liquid crystal color switching", "The number of screen frame updates per second (Hz)", "The total power draw of the backlight module", "The pixel response lag in milliseconds"], answer: 1, explanation: "Refresh rate is measured in Hertz (Hz) and represents how many times per second the monitor redraws the active frame." },
    { q: "What is the main benefit of OLED panels over standard LCD panels?", options: ["They consume less power in full-white screens", "They offer infinite contrast with individually self-lit pixels", "They are completely immune to static image damage", "They have much lower manufacturing costs"], answer: 1, explanation: "OLED pixels emit light individually. Turning them off produces true black levels, creating infinite contrast ratios." },
    { q: "What panel technology offers the fastest response times but poorest viewing angles?", options: ["IPS Panel", "VA Panel", "TN Panel", "OLED Panel"], answer: 2, explanation: "TN (Twisted Nematic) panels have very fast response times (e.g. 0.5ms) but suffer from severe color shifts when viewed off-center." },
    { q: "What does GtG stand for in monitor specifications?", options: ["Green-to-Green bandwidth", "Gray-to-Gray pixel response time", "Graphics-to-GPU sync latency", "Gamma-to-Gain ratio"], answer: 1, explanation: "Gray-to-Gray (GtG) measures the time it takes for a monitor pixel to change color states, dictating motion blur." },
    { q: "Which monitor type is susceptible to permanent image burn-in?", options: ["Standard LCD with IPS", "OLED Panels", "TN Panels", "VA Panels"], answer: 1, explanation: "OLED panels can suffer from permanent burn-in when static bright elements degrade the organic material unevenly over time." },
    { q: "What is the total pixel count of a standard 4K Ultra HD resolution?", options: ["1920 x 1080", "2560 x 1440", "3840 x 2160", "7680 x 4320"], answer: 2, explanation: "4K UHD monitors display 3840 x 2160 pixels, offering four times the resolution detail of 1080p Full HD." },
    { q: "How does a VA panel compare to an IPS panel in black level reproduction?", options: ["VA has much lower native contrast", "VA offers deeper blacks with 3000:1+ contrast ratios", "VA exhibits severe glow around bright letters", "IPS reproduces deeper, richer black levels"], answer: 1, explanation: "VA panels align liquid crystals vertically to block backlight leakage, providing much higher contrast ratios and deeper blacks than IPS." },
    { q: "IPS panels generally have faster pixel response times than TN panels.", options: ["True", "False"], answer: 1, explanation: "False. Historically, TN panels have had faster response times, though modern fast-IPS models now come very close." },
    { q: "OLED displays do not require a separate backlight panel because pixels emit their own light.", options: ["True", "False"], answer: 0, explanation: "True. OLED is an emissive display technology where each organic sub-pixel glows on its own when current is applied." }
  ],
  webcam: [
    { q: "Which sensor type is utilized in modern webcams to capture video?", options: ["CCD light tube", "CMOS image sensor", "LiDAR photodiode", "Vacuum raster tube"], answer: 1, explanation: "CMOS (Complementary Metal-Oxide-Semiconductor) sensors are highly integrated, energy-efficient, and ideal for compact webcams." },
    { q: "What does FOV stand for in webcam lens specifications?", options: ["Frame Optical Velocity", "Frequency of Video", "Field of View", "Focus Optical Vector"], answer: 2, explanation: "Field of View (FOV) measures the angle width of the area captured by the webcam lens, typically between 65° and 90°." },
    { q: "What video compression codec is commonly used by webcams to stream HD video over USB?", options: ["MPEG-2", "H.264", "FLAC", "ProRes 422"], answer: 1, explanation: "H.264 is an efficient compression format supported by webcams to stream 1080p video over standard USB 2.0 bandwidth." },
    { q: "What is a standard framerate for smooth motion video in video conferencing?", options: ["12 fps", "30 fps", "120 fps", "5 fps"], answer: 1, explanation: "30 frames per second (fps) is the standard for smooth real-time video streaming, with 60 fps common in high-end streaming models." },
    { q: "What type of webcam focus adjusts automatically based on software facial detection?", options: ["Fixed manual focus", "Smart Autofocus", "Infrared thermal tracking", "Laser range finder"], answer: 1, explanation: "Smart Autofocus adjust the camera lens mechanically to maintain crisp focus on the user's face during movement." },
    { q: "Which connection interface is best suited for streaming uncompressed 4K video from a webcam?", options: ["USB 2.0 Type-A", "USB 3.0 or USB Type-C", "3.5mm Aux Line", "HDMI out only"], answer: 1, explanation: "USB 3.0 / Type-C provides the high bandwidth (5 Gbps+) needed to transfer dense, uncompressed 4K webcam video frames." },
    { q: "What is a major security risk unique to connected computer webcams?", options: ["High power consumption shocks", "Remote hijacking and unauthorized snooping", "Permanent screen burn-in", "Toner dust inhalation"], answer: 1, explanation: "Malware can hijack webcams without lighting the status LED, presenting critical privacy and security risks." },
    { q: "Why do webcam images look grainy in poorly lit rooms?", options: ["The lens drops out of focus", "The sensor amplifies weak signals, generating digital noise", "The USB cable drops data packets", "The color compression reduces resolution"], answer: 1, explanation: "CMOS sensors amplify pixel sensitivity to reveal details in low-light, which concurrently amplifies background electronic noise, making images grainy." },
    { q: "A webcam converts visual light into analog electrical signals before digitizing it.", options: ["True", "False"], answer: 0, explanation: "True. Photons hit the CMOS pixels, generating analog electrical charges that are then converted to binary code via an ADC chip." },
    { q: "Focal length determines the horizontal field of view of a camera lens.", options: ["True", "False"], answer: 0, explanation: "True. A shorter focal length yields a wider field of view, while a longer focal length magnifies far-away subjects (telephoto)." }
  ],
  speaker: [
    { q: "What component translates digital audio from a computer sound card into analog currents?", options: ["ADC", "DAC (Digital-to-Analog Converter)", "Op-Amp controller", "LFE crossover"], answer: 1, explanation: "The DAC translates computer binary audio codes into fluctuating electrical currents that analog speakers can interpret." },
    { q: "What part of a speaker moves back and forth to create sound waves in the air?", options: ["Voice coil magnet", "Speaker Cone (Diaphragm)", "Amplifier shield", "Crossover circuit"], answer: 1, explanation: "The speaker cone (diaphragm) pushes air back and forth to compress it, generating physical longitudinal sound waves." },
    { q: "What magnetic component causes the speaker voice coil to vibrate?", options: ["Electromagnet coil", "Permanent Magnet", "Ferrite core transformer", "Steel speaker grille"], answer: 1, explanation: "The voice coil acts as an electromagnet. When analog currents pass through it, it interacts with the permanent magnet's field to push and pull the cone." },
    { q: "What metric defines the continuous electrical power output capability of a speaker?", options: ["Peak PMPO Watts", "RMS Power (Watts)", "Decibel gain (dB)", "Impedance rating (Ohms)"], answer: 1, explanation: "RMS (Root Mean Square) power represents the continuous, safe output capability of speaker amplifiers without distortion." },
    { q: "What is the standard frequency range of human auditory perception?", options: ["20 Hz - 20 kHz", "1 Hz - 100 kHz", "500 Hz - 5 kHz", "10 Hz - 50 kHz"], answer: 0, explanation: "The healthy human ear can perceive acoustic vibrations ranging from deep bass at 20 Hz to high-pitched treble at 20,000 Hz (20 kHz)." },
    { q: "How many audio channels does a standard 5.1 surround sound system have?", options: ["2 channels", "6 channels", "5 channels", "1 channel"], answer: 1, explanation: "A 5.1 system contains 6 channels: 5 directional speakers (Left, Right, Center, Left-Surround, Right-Surround) + 1 Subwoofer channel (.1)." },
    { q: "What is the primary function of a subwoofer in a speaker configuration?", options: ["To crisp high-frequency vocals", "To reproduce low-frequency bass sounds", "To separate channels digitally", "To amplify volume without drawing power"], answer: 1, explanation: "Subwoofers are specialized speakers designed to handle very low audio frequencies (20-120Hz), reproducing deep bass." },
    { q: "Which connection format provides a digital link from a computer to a speaker system?", options: ["3.5mm Aux jack", "Optical S/PDIF or USB Audio", "RCA Stereo cables", "Copper terminal wire"], answer: 1, explanation: "Optical S/PDIF and USB digital connections bypass noisy internal sound cards, sending digital bitstreams directly to external DACs." },
    { q: "A digital-to-analog converter (DAC) is required to hear computer sounds on speakers.", options: ["True", "False"], answer: 0, explanation: "True. Computer audio files are stored as binary numbers, which must be converted into physical analog electrical waveforms to drive speakers." },
    { q: "Active speakers require an external standalone amplifier to function.", options: ["True", "False"], answer: 1, explanation: "False. Active speakers have built-in power amplifiers inside their enclosures, meaning they only require a line-level signal." }
  ],
  microphone: [
    { q: "What capacitor-based transduction principle is used in studio condenser microphones?", options: ["Dynamic electromagnetic coil", "Piezoelectric crystal pressure", "Condenser (diaphragm and backplate capacitor)", "Carbon granular contact"], answer: 2, explanation: "Condenser microphones use a flexible diaphragm and fixed backplate capacitor. Vibrations change the distance, changing capacitance and generating current." },
    { q: "Which polar pattern captures sound directly from the front while rejecting the rear?", options: ["Omnidirectional", "Cardioid", "Figure-8 Bidirectional", "Shotgun line array"], answer: 1, explanation: "The Cardioid (heart-shaped) polar pattern is highly sensitive to front sound sources while cancelling out noises coming from behind." },
    { q: "What power supply is typically required to operate a studio condenser microphone?", options: ["9V battery", "120V AC wall outlet", "+48V Phantom Power", "No power required"], answer: 2, explanation: "Condenser microphones require +48V Phantom Power (delivered via XLR cable) to charge the internal capacitor plates and power the pre-amp." },
    { q: "Which microphone type is most rugged and preferred for loud, live concert stages?", options: ["Ribbon microphone", "Condenser microphone", "Dynamic Microphone", "Electret lapel mic"], answer: 2, explanation: "Dynamic microphones use a simple wire coil and magnet. They are highly durable, cheap, and handle extreme volume levels without distortion." },
    { q: "What does microphone sensitivity measure?", options: ["The frequency range captured by the capsule", "How efficiently the mic converts sound pressure to electrical voltage", "The physical weight of the diaphragm", "The maximum wind speed tolerance"], answer: 1, explanation: "Sensitivity (rated in dBV/Pa) determines the output voltage a microphone generates for a given sound pressure input; higher means louder output." },
    { q: "What polar pattern is best for recording a face-to-face interview with one microphone in the middle?", options: ["Cardioid", "Bidirectional (Figure-8)", "Omnidirectional", "Supercardioid"], answer: 1, explanation: "Bidirectional (Figure-8) polar patterns capture sound equally from the front and back while rejecting noises from the left and right sides." },
    { q: "What bit depth and sample rate is standard for professional high-resolution audio capture?", options: ["8-bit / 22 kHz", "16-bit / 44.1 kHz", "24-bit / 96 kHz", "32-bit / 192 kHz"], answer: 2, explanation: "24-bit depth and 96 kHz sample rate capture an immense dynamic range and frequency spectrum, preserving studio details." },
    { q: "Which microphone layout is ideal for hands-free vlogging and mobile journalism?", options: ["Desk stand condenser", "Lavaliere Clip-on Microphone", "Shotgun camera mount", "Handheld dynamic mic"], answer: 1, explanation: "Lavaliere (lapel) microphones clip onto shirts, staying close to the vocal tract to provide clear audio during motion." },
    { q: "A cardioid polar pattern captures sound equally from all directions.", options: ["True", "False"], answer: 1, explanation: "False. Cardioid captures sound from the front. Omnidirectional captures sound equally from all directions." },
    { q: "Condenser microphones require external phantom power (often 48V) to operate their capacitor.", options: ["True", "False"], answer: 0, explanation: "True. Without phantom power, the capacitor plates cannot maintain an electrostatic charge to generate signal currents." }
  ],
  headphone: [
    { q: "What is the typical driver size range for standard over-ear headphones?", options: ["6mm - 12mm", "15mm - 25mm", "40mm - 50mm", "80mm - 100mm"], answer: 2, explanation: "Over-ear headphones use large 40mm to 50mm dynamic drivers to push enough air for rich, full-frequency sound and bass response." },
    { q: "How does Active Noise Cancellation (ANC) block environment sounds?", options: ["By using thick foam padding to block holes", "By generating anti-phase sound waves that cancel ambient noise", "By cutting off the audio signal during loud ambient spikes", "By sealing the ear canal with vacuum pressure"], answer: 1, explanation: "ANC microphones detect ambient noise, and the internal processor generates an inverted, out-of-phase wave to cancel it out." },
    { q: "What headphone layout fits directly inside the ear canal, providing high passive isolation?", options: ["On-Ear Headphones", "Over-Ear Open-back", "In-Ear Earbuds", "Bone Conduction headsets"], answer: 2, explanation: "In-ear earbuds use silicone or foam tips that sit directly inside the ear canal, blocking external noise mechanically." },
    { q: "What does impedance measure in headphone specifications?", options: ["The maximum volume capacity (dB)", "The electrical resistance to the audio signal (Ohms)", "The total driver diameter size", "The digital latency speed"], answer: 1, explanation: "Impedance is measured in Ohms (Ω) and represents the electrical resistance of the headphone's voice coils." },
    { q: "What is a major potential health risk of long-term headphone use at high volumes?", options: ["Tinnitus and permanent hearing loss", "Color blindness", "Muscle fatigue in neck", "Presbyacusis"], answer: 0, explanation: "Listening to music above 85 decibels for prolonged periods can permanently damage the sensitive hair cells of the cochlea." },
    { q: "Which headphone type sits resting on top of the ear lobes without fully wrapping them?", options: ["Around-ear headphones", "On-Ear Headphones", "In-ear monitors", "Bone conduction headsets"], answer: 1, explanation: "On-ear (supra-aural) headphones sit directly on the ear lobes, being lighter but offering less passive noise isolation." },
    { q: "Why do high-impedance studio headphones (e.g. 250 Ohm) require a dedicated amplifier?", options: ["Because they use more battery power", "To deliver enough voltage to drive the high-resistance voice coils", "To translate digital signals to analog", "To activate active noise cancellation"], answer: 1, explanation: "High-impedance headphones require higher voltage to achieve normal volumes, which standard phone audio jacks cannot supply." },
    { q: "What is the main benefit of open-back headphones?", options: ["They block the most ambient noise", "They offer a wider, more natural audio soundstage", "They have the deepest sub-bass response", "They prevent sound from leaking out"], answer: 1, explanation: "Open-back cups allow air and sound waves to pass freely through the grilles, creating a wide, natural 'speaker-like' soundstage." },
    { q: "Active noise cancellation (ANC) works by creating anti-noise sound waves.", options: ["True", "False"], answer: 0, explanation: "True. ANC uses destructive interference by broadcasting a wave 180 degrees out-of-phase with the incoming noise." },
    { q: "High-impedance headphones are easier to drive directly from smartphones.", options: ["True", "False"], answer: 1, explanation: "False. High-impedance headphones require dedicated amplification; low-impedance (16-32 Ohm) are designed for smartphones." }
  ],
  projector: [
    { q: "Which projector display technology uses millions of micro-mirrors on a silicon chip?", options: ["CRT scanning gun", "DLP (Digital Light Processing)", "3LCD panels", "Liquid crystal on silicon (LCoS)"], answer: 1, explanation: "DLP projectors use a Digital Micromirror Device (DMD) containing millions of microscopic mirrors that tilt toward or away from the light source." },
    { q: "What metric defines the brightness of a projector's light output?", options: ["DPI", "ANSI Lumens", "Contrast Ratio", "Throw Ratio"], answer: 1, explanation: "ANSI Lumens is the industry standard rating for the total amount of light emitted by a projector's light engine." },
    { q: "What projector light source offers the longest operational lifespan?", options: ["Metal Halide Bulb", "UHP Lamp", "Laser Diode", "Halogen Bulb"], answer: 2, explanation: "Laser diode light engines last up to 20,000 to 30,000 hours, requiring zero maintenance compared to bulbs (which last ~4,000 hours)." },
    { q: "What is a common disadvantage of traditional bulb-based projectors?", options: ["They have low native contrast", "High heat output and expensive bulb replacements", "They cannot project in 1080p", "They require wireless internet connection"], answer: 1, explanation: "Traditional projector lamps run extremely hot, require noisy fans, and burn out after a few thousand hours, costing up to $200 to replace." },
    { q: "Which projector type splits light into red, green, and blue paths through liquid crystal panels?", options: ["DLP Projector", "3LCD Projector", "CRT Projector", "Laser scan projector"], answer: 1, explanation: "3LCD projectors use dichroic mirrors to split light into RGB, sending them through three separate LCD panels before combining them in a prism." },
    { q: "What does contrast ratio define in projectors?", options: ["The ratio between the brightest white and darkest black output", "The distance from the lens to the projection screen", "The ratio of width to height of the image", "The color spectrum saturation range"], answer: 0, explanation: "Contrast ratio determines the difference between the darkest blacks and brightest whites; higher contrast means richer, less washed-out images." },
    { q: "What is the typical lifespan of a laser projector light source?", options: ["1,000 hours", "5,000 hours", "20,000 hours", "100,000 hours"], answer: 2, explanation: "Laser projectors are highly reliable, offering 20,000+ hours of operation before the light output degrades to half brightness." },
    { q: "Why do high-brightness projectors require cooling fans?", options: ["To prevent optical distortion in the lens", "To disperse the ozone gas generated", "To dissipate the high heat generated by the light engine", "To blow dust off the projection screen"], answer: 2, explanation: "High-power lamps or lasers generate intense heat in a tiny space. Cooling fans prevent critical components from melting or failing." },
    { q: "DLP projectors use microscopic mirrors to reflect light and create images.", options: ["True", "False"], answer: 0, explanation: "True. A DMD chip acts as a reflective spatial light modulator, tilting mirrors thousands of times per second to create pixels." },
    { q: "ANSI Lumens measures the native resolution of a projector.", options: ["True", "False"], answer: 1, explanation: "False. ANSI Lumens measures light output (brightness). Native resolution is measured in pixels (e.g. 1920x1080)." }
  ],
  "barcode-reader": [
    { q: "How does a standard laser barcode scanner read printed labels?", options: ["By capturing a 2D color photo", "By measuring light absorption of dark bars and reflection of white spaces", "By mechanical physical rollers sliding on the label", "By reading radio waves emitted from the ink"], answer: 1, explanation: "Laser scanners emit a red beam; the dark bars absorb the light, while the white spaces reflect it back to a sensor that decodes the wave." },
    { q: "What type of barcode reader can scan codes from glowing smartphone screens?", options: ["Single line Laser Scanner", "2D Area Imager (CMOS Sensor)", "Oscillating Raster Scanner", "Wand pen scanner"], answer: 1, explanation: "2D area imagers use a digital camera sensor to take a picture of the code, allowing them to read barcodes and QR codes off glowing screens." },
    { q: "What component decodes the electrical wave patterns of a barcode reader into digital characters?", options: ["Laser diode", "CMOS array", "Decoder Chip", "Analog multiplier"], answer: 2, explanation: "The internal decoder chip analyzes the digitized waveform, verifies the checksum parameters, and sends the decoded text data to the computer." },
    { q: "Which barcode format consists of both vertical lines (1D) and square patterns (2D)?", options: ["UPC Code", "EAN-13", "QR Code", "Code 39"], answer: 2, explanation: "A QR Code is a two-dimensional (2D) matrix barcode that can hold far more data than traditional 1D linear codes." },
    { q: "What is the main benefit of an omnidirectional scanner at supermarket checkouts?", options: ["It reads barcodes from up to 50 feet away", "It scans barcodes rapidly at any angle without manual alignment", "It prints price labels automatically", "It uses safe green laser diodes"], answer: 1, explanation: "Omnidirectional scanners generate a grid of overlapping laser lines, ensuring at least one line intersects the barcode regardless of its angle." },
    { q: "What wavelength of light is most common in barcode laser diodes?", options: ["Invisible Ultraviolet (UV)", "Visible Red Light (650nm)", "Invisible Infrared (IR)", "Visible Violet Light (400nm)"], answer: 1, explanation: "Visible red light around 650nm is highly efficient, cheap to manufacture, and safe for standard retail operations." },
    { q: "What is a major limitation of 1D laser scanners?", options: ["They cannot scan 2D QR codes or read from digital screens", "They are extremely fragile", "They require separate electrical power cables", "They take minutes to scan a single label"], answer: 0, explanation: "1D laser scanners require a physical reflection contrast that phone screens disperse, and they cannot interpret the vertical details of 2D codes." },
    { q: "What metric defines the scanning speed of barcode readers?", options: ["PPM", "DPI resolution", "Scans per second", "Impedance"], answer: 2, explanation: "Scan rate is measured in scans per second (ranging from 100 to 1000+), dictating how fast the scanner sweeps and logs labels." },
    { q: "A 2D barcode imager can read standard QR codes from a smartphone screen.", options: ["True", "False"], answer: 0, explanation: "True. Because a 2D imager operates like a camera sensor, it easily captures the visual grid of a QR code off any backlit screen." },
    { q: "A barcode reader cannot read barcodes if they are printed in green ink.", options: ["True", "False"], answer: 1, explanation: "False. Barcode readers can read barcodes printed in green ink as long as the red laser diode has enough reflection contrast against the white backdrop." }
  ],
  joystick: [
    { q: "What sensor type inside a modern joystick provides contactless magnet-based axis detection?", options: ["Rotary Potentiometer", "Hall Effect Sensor", "Carbon sweep contact", "Opto-interrupter encoder"], answer: 1, explanation: "Hall Effect sensors measure magnetic field changes during stick pivot, offering frictionless, wear-free axis detection." },
    { q: "What does HOTAS stand for in flight simulation controller setups?", options: ["High Optical Tracking And Stability", "Hands On Throttle And Stick", "Horizontal Orientation Tactical Axis System", "Hovering Operational Target Assist System"], answer: 1, explanation: "HOTAS (Hands On Throttle And Stick) layouts place all critical cockpit controls on the throttle and flight stick, allowing the pilot to operate without lifting hands." },
    { q: "Which flight axis controls the banking/tilt of an aircraft?", options: ["Pitch Axis", "Roll Axis", "Yaw Axis", "Throttle Axis"], answer: 1, explanation: "Roll axis maps the left-and-right tilting movement of the stick to bank the aircraft wings." },
    { q: "What mechanical gate shape is preferred by fighting game arcade players?", options: ["Circular Gate", "Octagonal or Square Gate", "Star Gate", "Triangular Gate"], answer: 1, explanation: "Octagonal or square gates guide the arcade stick shaft into exact corners, ensuring precise execution of fighting game combos." },
    { q: "What component historically measured physical stick displacement via electrical resistance?", options: ["Hall sensor", "Potentiometer", "Opto-coupler", "Piezoelectric wafer"], answer: 1, explanation: "Potentiometers measure displacement by rotating a metal wiper contact across a resistive track, which wears down over time." },
    { q: "Which industrial equipment commonly utilizes rugged analog joysticks?", options: ["Laser Printers", "Construction cranes and excavators", "Flatbed scanners", "Desktop computer monitors"], answer: 1, explanation: "Heavy machinery like cranes, excavators, and mining equipment rely on industrial joysticks for precise hydraulic controls." },
    { q: "How many axes of motion does a flight stick with twist-yaw control support?", options: ["1 Axis", "2 Axes", "3 Axes", "4 Axes"], answer: 2, explanation: "A twist-yaw flight stick supports 3 axes: Pitch (X-tilt), Roll (Y-tilt), and Yaw (Z-axis twist)." },
    { q: "What is the function of a 'hat switch' on a joystick?", options: ["Adjusts the physical tension of the stick spring", "Provides quick directional points of view (POV) switching", "Locks the stick in a centered position", "Powers down the USB connection safely"], answer: 1, explanation: "The POV hat switch (often 8-way) sits on top of the grip, allowing pilots to look around the cockpit or swap targets quickly." },
    { q: "Hall effect sensors in joysticks use magnets to detect physical stick rotation.", options: ["True", "False"], answer: 0, explanation: "True. They measure voltage changes induced by shifting magnetic fields when the stick is pivoted." },
    { q: "HOTAS stands for Hands On Throttle And Stick.", options: ["True", "False"], answer: 0, explanation: "True. It refers to the ergonomic cockpit design concept where control switches are mapped onto the flight stick and throttle." }
  ]
};

// Match Game Templates
const MATCHING_TEMPLATES = [
  { left: "Keyboard", right: "Input (Matrix Switch Grid)" },
  { left: "Printer", right: "Output (Heat Fuser Toner)" },
  { left: "Monitor", right: "Output (Liquid Crystal IPS)" },
  { left: "Scanner", right: "Input (Charge-Coupled Device)" },
  { left: "Mouse", right: "Input (Optical Frame Tracking)" },
  { left: "Speaker", right: "Output (Voice Coil Magnet)" },
  { left: "Microphone", right: "Input (Condenser Capacitor)" },
  { left: "Webcam", options: [], right: "Input (CMOS Video Stream)" },
  { left: "Projector", right: "Output (DLP Mirror Array)" },
  { left: "Joystick", right: "Input (Hall Effect Sensor)" },
  { left: "Barcode Reader", right: "Input (Laser Line Scanner)" },
  { left: "Headphone", right: "Output (Private Ear Driver)" }
];

// 12. Gemini API Client logic
async function callGeminiAPI(prompt, systemInstruction = "", formatJson = false) {
  const apiKey = localStorage.getItem("gemini_api_key");
  if (!apiKey) {
    throw new Error("API_KEY_MISSING");
  }
  
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  
  const requestBody = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {}
  };
  
  if (systemInstruction) {
    requestBody.systemInstruction = { parts: [{ text: systemInstruction }] };
  }
  
  if (formatJson) {
    requestBody.generationConfig.responseMimeType = "application/json";
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const errorText = await response.text();
    let parsedErr = {};
    try { parsedErr = JSON.parse(errorText); } catch(e) {}
    throw new Error(parsedErr.error?.message || `HTTP Error ${response.status}`);
  }

  const responseData = await response.json();
  if (responseData.candidates && responseData.candidates[0].content && responseData.candidates[0].content.parts) {
    return responseData.candidates[0].content.parts[0].text;
  }
  throw new Error("Invalid response format received from Gemini.");
}

// Global API Key settings modal control
window.setupApiKeyModal = function() {
  const overlay = document.getElementById("api-modal-overlay");
  if (!overlay) return;

  window.openApiKeyModal = function() {
    const input = document.getElementById("gemini-api-key-input");
    if (input) {
      input.value = localStorage.getItem("gemini_api_key") || "";
    }
    overlay.classList.add("open");
  };

  window.closeApiKeyModal = function() {
    overlay.classList.remove("open");
  };

  window.saveApiKey = function() {
    const input = document.getElementById("gemini-api-key-input");
    if (input) {
      const key = input.value.trim();
      if (key) {
        localStorage.setItem("gemini_api_key", key);
        alert("API Key saved successfully!");
      } else {
        localStorage.removeItem("gemini_api_key");
        alert("API Key removed.");
      }
      closeApiKeyModal();
      // Reload current page to update states
      window.location.reload();
    }
  };
};

// 13. Dynamic AI Assistant Module
let chatHistory = [];

window.setupFloatingChat = function() {
  const trigger = document.getElementById("chat-trigger-btn");
  const container = document.getElementById("chat-panel-container");
  if (!trigger || !container) return;

  trigger.addEventListener("click", () => {
    container.classList.toggle("open");
    if (container.classList.contains("open")) {
      const view = document.getElementById("chat-messages-viewport");
      if (view && view.children.length === 0) {
        // Load initial welcome message
        appendChatMessage("ai", "Hello! I am **Peripheral AI Assistant**. Ask me anything about computer peripheral devices!", view);
      }
      // Focus input
      const input = document.getElementById("chat-panel-input");
      if (input) input.focus();
    }
  });

  window.closeFloatingChat = function() {
    container.classList.remove("open");
  };
};

// Helper to convert markdown-like syntax to HTML strings safely
function parseMarkdownToHtml(text) {
  // Escape html characters to prevent script injection
  let safeText = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Bold headings: ### Header or # Header -> <h4>Header</h4>
  safeText = safeText.replace(/^(?:###|##|#)\s+(.+)$/gm, "<h4>$1</h4>");
  
  // Bold text: **bold** -> <strong>bold</strong>
  safeText = safeText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Unordered list items: * item -> <li>item</li>
  // Group consecutive list items in <ul>
  const lines = safeText.split("\n");
  let insideList = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("* ") || line.startsWith("- ")) {
      const content = line.substring(2);
      if (!insideList) {
        lines[i] = "<ul><li>" + content + "</li>";
        insideList = true;
      } else {
        lines[i] = "<li>" + content + "</li>";
      }
    } else {
      if (insideList) {
        lines[i - 1] = lines[i - 1] + "</ul>";
        insideList = false;
      }
    }
  }
  if (insideList) {
    lines[lines.length - 1] = lines[lines.length - 1] + "</ul>";
  }
  safeText = lines.join("\n");

  // Paragraph breaks
  safeText = safeText.replace(/\n\n/g, "<br><br>");

  return safeText;
}

function appendChatMessage(sender, text, container) {
  const row = document.createElement("div");
  row.className = `chat-message-row ${sender === "user" ? "user-msg" : "ai-msg"}`;
  
  const avatar = document.createElement("div");
  avatar.className = "chat-avatar";
  avatar.innerText = sender === "user" ? "U" : "AI";
  
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble-text";
  bubble.innerHTML = parseMarkdownToHtml(text);
  
  row.appendChild(avatar);
  row.appendChild(bubble);
  container.appendChild(row);
  
  // Auto scroll
  container.scrollTop = container.scrollHeight;
}

// Floating widget message send handler
window.sendFloatingChatMessage = async function() {
  const input = document.getElementById("chat-panel-input");
  const viewport = document.getElementById("chat-messages-viewport");
  if (!input || !viewport) return;

  const msg = input.value.trim();
  if (!msg) return;

  input.value = "";
  appendChatMessage("user", msg, viewport);

  // Show typing indicator
  const indicator = document.createElement("div");
  indicator.className = "chat-message-row ai-msg typing-indicator-row";
  indicator.innerHTML = `
    <div class="chat-avatar">AI</div>
    <div class="chat-bubble-text" style="padding: 10px 14px;">
      <div class="typing-indicator-dots">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>
  `;
  viewport.appendChild(indicator);
  viewport.scrollTop = viewport.scrollHeight;

  try {
    const system = "You are the 'Peripheral AI Assistant' for Peripedia. You help users learn about computer peripheral devices and answer educational questions. RULES: 1. Answer ONLY topics related to computer peripheral devices: Keyboard, Mouse, Printer, Scanner, Monitor, Speaker, Microphone, Webcam, Plotter, Joystick, Touchscreen, Barcode Reader, Projector, Storage Devices. 2. If the user asks about ANY unrelated topic, you MUST respond exactly: 'I am Peripheral AI Assistant. I can only answer questions related to computer peripheral devices.' 3. When answering a valid topic, you MUST structure your response with: Definition, Working Principle, Key Specifications, Real-life Applications, Advantages, Disadvantages. 4. Keep the language academic, clear, and professional.";
    
    // Check key
    const key = localStorage.getItem("gemini_api_key");
    let aiResponse = "";
    if (!key) {
      // Simulation mode fallback
      aiResponse = simulateAiResponse(msg);
    } else {
      // Build prompt with history
      chatHistory.push({ role: "user", text: msg });
      const promptText = chatHistory.map(h => `${h.role}: ${h.text}`).join("\n") + "\nassistant: ";
      aiResponse = await callGeminiAPI(promptText, system);
      chatHistory.push({ role: "assistant", text: aiResponse });
      // Keep history clean
      if (chatHistory.length > 8) chatHistory.shift();
    }

    // Remove typing indicator
    const rows = viewport.querySelectorAll(".typing-indicator-row");
    rows.forEach(r => r.remove());

    appendChatMessage("ai", aiResponse, viewport);
  } catch (error) {
    const rows = viewport.querySelectorAll(".typing-indicator-row");
    rows.forEach(r => r.remove());
    if (error.message === "API_KEY_MISSING") {
      appendChatMessage("ai", "Gemini API Key is missing. Please click the Settings gear icon in the header to enter your API Key, or proceed in simulation mode.", viewport);
    } else {
      appendChatMessage("ai", `Error communicating with AI Assistant: ${error.message}`, viewport);
    }
  }
};

window.clearFloatingChat = function() {
  const viewport = document.getElementById("chat-messages-viewport");
  if (viewport) {
    viewport.innerHTML = "";
    chatHistory = [];
    appendChatMessage("ai", "Chat history cleared. How can I help you learn about peripherals today?", viewport);
  }
};

// Simple rule-based simulator for off-key demo testing
function simulateAiResponse(query) {
  const q = query.toLowerCase();
  const validKeywords = ["keyboard", "mouse", "printer", "scanner", "monitor", "speaker", "microphone", "webcam", "plotter", "joystick", "touchscreen", "barcode", "projector", "storage", "dpi", "laser"];
  const matchesKeyword = validKeywords.some(k => q.includes(k));

  if (!matchesKeyword) {
    return "I am Peripheral AI Assistant. I can only answer questions related to computer peripheral devices.";
  }

  if (q.includes("dpi")) {
    return "### Definition\nDPI stands for **Dots Per Inch**. In computer mouse tracking, it measures the physical sensor sensitivity, mapping pixel travel relative to hand sweeps.\n\n### Working Principle\nThe optical sensor emits light, taking surface shots. Higher DPI rates instruct the controller to move the desktop pointer further on screen for the same physical movement.\n\n### Key Specifications\n* Standard: 800 - 1600 DPI\n* Gaming Grade: 4,000 - 25,000 DPI\n\n### Real-life Applications\nUsed to calibrate cursor speeds for gaming, graphic layout drafting, and wide 4K screens.\n\n### Advantages\n* Faster cursor traversal with minimal physical wrist effort.\n* Higher precision control adjustments on the fly.\n\n### Disadvantages\n* Very high DPI makes the cursor twitchy and hard to align for basic office selections.";
  }
  
  if (q.includes("laser printer")) {
    return "### Definition\nA **Laser Printer** is an electrostatic output printer producing high-resolution text prints using dry plastic toner particles.\n\n### Working Principle\nA laser beam drafts an electrostatic charge pattern of the print image onto a rotating photosensitive drum. Dry toner sticks to these charged coordinates, gets rolled onto the paper, and goes through a heated fuser to melt into the fibers.\n\n### Key Specifications\n* Printing speed: 20 - 45 Pages Per Minute (PPM)\n* Resolution density: 1200 x 1200 DPI\n\n### Real-life Applications\nCorporate offices, banks, and administrative centers requiring massive monochrome text sheets daily.\n\n### Advantages\n* Toner powder doesn't clog nozzles or dry up.\n* Extremely rapid output speed and sharp text profiles.\n\n### Disadvantages\n* Higher machine purchase costs.\n* High continuous heating power consumption during prints.";
  }

  return "### Definition\nThis peripheral device operates as an interface connecting human operations or environments with computer systems.\n\n### Working Principle\nIt acts by converting sensory signals into digital code matrices, or vice versa, using electrical circuits scanned by microcontrollers.\n\n### Key Specifications\n* Wired or wireless connection\n* Industrial grade durability\n\n### Real-life Applications\nEducational classrooms, office desks, and gaming environments.\n\n### Advantages\n* Ergonomic efficiency boosts productivity.\n* Plug and play standard configurations.\n\n### Disadvantages\n* Repetitive motion causes wrist fatigue over hours.\n* Needs clean workspaces.";
}

// 14. Interactive Quiz Engine (Device Practice + Full Dashboard)
let activeQuizQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;
let quizTimerVal = 0;
let quizTimerId = null;
let currentDeviceKey = "";
let selectedAnswerIndex = null;
let matchingGameState = { selectedLeft: null, matchedCount: 0 };

// Initialize practice quiz on specific device page
window.initDeviceQuiz = function() {
  const container = document.getElementById("quiz-container");
  if (!container) return;

  const device = container.getAttribute("data-device");
  if (!device || !QUIZ_DATABASE[device]) return;

  currentDeviceKey = device;
  startDevicePracticeQuiz(device, container);
};

function startDevicePracticeQuiz(deviceKey, container) {
  // Load the 10 questions for this device
  activeQuizQuestions = [...QUIZ_DATABASE[deviceKey]];
  currentQuestionIndex = 0;
  quizScore = 0;
  
  renderCurrentQuizQuestion(container);
}

function renderCurrentQuizQuestion(container) {
  if (currentQuestionIndex >= activeQuizQuestions.length) {
    renderQuizFinalScore(container);
    return;
  }

  const qData = activeQuizQuestions[currentQuestionIndex];
  selectedAnswerIndex = null;

  // Calculate progress
  const progressPercent = Math.round((currentQuestionIndex / activeQuizQuestions.length) * 100);

  let optionsHtml = "";
  if (qData.type === "matching") {
    // Render Match the Device layout
    optionsHtml = renderMatchingGameHtml(qData);
  } else {
    // Standard Multiple Choice or True/False options list
    optionsHtml = `
      <div class="quiz-options-list">
        ${qData.options.map((opt, idx) => `
          <button class="quiz-option" onclick="handleQuizOptionClick(${idx}, this)">
            ${opt}
          </button>
        `).join("")}
      </div>
    `;
  }

  container.innerHTML = `
    <div class="quiz-card-container">
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
      </div>
      <div class="quiz-header">
        <span>Question ${currentQuestionIndex + 1} of ${activeQuizQuestions.length}</span>
        ${quizTimerId ? `<div class="quiz-timer-badge">⏱ <span id="timer-sec-box">${quizTimerVal}</span>s</div>` : ""}
      </div>
      <div class="quiz-question">${qData.q}</div>
      
      ${optionsHtml}

      <div id="quiz-explanation-container" class="quiz-explanation-box hidden">
        <strong>Explanation:</strong> <span id="explanation-text-box">${qData.explanation}</span>
      </div>

      <div class="quiz-action-row">
        <button id="quiz-next-btn" class="btn btn-primary hidden" onclick="handleQuizNextClick(this)">
          ${currentQuestionIndex === activeQuizQuestions.length - 1 ? "Finish Quiz" : "Next Question &rarr;"}
        </button>
      </div>
    </div>
  `;
}

window.handleQuizOptionClick = function(selectedIdx, buttonElement) {
  if (selectedAnswerIndex !== null) return; // prevent double clicks
  selectedAnswerIndex = selectedIdx;

  const qData = activeQuizQuestions[currentQuestionIndex];
  const correctAnswerIdx = qData.answer;

  const options = buttonElement.parentNode.querySelectorAll(".quiz-option");
  options.forEach((opt, idx) => {
    opt.classList.add("disabled");
    if (idx === correctAnswerIdx) {
      opt.classList.add("correct");
    } else if (idx === selectedIdx) {
      opt.classList.add("incorrect");
    }
  });

  if (selectedIdx === correctAnswerIdx) {
    quizScore++;
  }

  // Show explanation
  const expBox = document.getElementById("quiz-explanation-container");
  if (expBox) expBox.classList.remove("hidden");

  // Show Next button
  const nextBtn = document.getElementById("quiz-next-btn");
  if (nextBtn) nextBtn.classList.remove("hidden");
};

function renderMatchingGameHtml(qData) {
  // Shuffle Columns
  const leftNodes = [...qData.pairs].map(p => p.left).sort(() => Math.random() - 0.5);
  const rightNodes = [...qData.pairs].map(p => p.right).sort(() => Math.random() - 0.5);
  
  matchingGameState = { selectedLeft: null, matchedCount: 0 };

  return `
    <div class="matching-board">
      <div class="matching-column" id="match-col-left">
        ${leftNodes.map(leftVal => `
          <div class="matching-node" data-side="left" data-value="${leftVal}" onclick="handleMatchingNodeClick(this)">
            ${leftVal}
          </div>
        `).join("")}
      </div>
      <div class="matching-column" id="match-col-right">
        ${rightNodes.map(rightVal => `
          <div class="matching-node" data-side="right" data-value="${rightVal}" onclick="handleMatchingNodeClick(this)">
            ${rightVal}
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

window.handleMatchingNodeClick = function(node) {
  const side = node.getAttribute("data-side");
  const value = node.getAttribute("data-value");
  
  if (node.classList.contains("matched")) return;

  if (side === "left") {
    // Select left node
    document.querySelectorAll("[data-side='left']").forEach(n => n.classList.remove("selected"));
    node.classList.add("selected");
    matchingGameState.selectedLeft = node;
  } else if (side === "right" && matchingGameState.selectedLeft) {
    // Attempt match
    const leftVal = matchingGameState.selectedLeft.getAttribute("data-value");
    const rightVal = value;
    
    const activeQ = activeQuizQuestions[currentQuestionIndex];
    // Find pair match
    const pair = activeQ.pairs.find(p => p.left === leftVal && p.right === rightVal);

    if (pair) {
      // SUCCESS match!
      matchingGameState.selectedLeft.classList.remove("selected");
      matchingGameState.selectedLeft.classList.add("matched");
      node.classList.add("matched");
      matchingGameState.selectedLeft = null;
      matchingGameState.matchedCount++;
      
      if (matchingGameState.matchedCount === activeQ.pairs.length) {
        quizScore++; // full point earned!
        
        // Show explanation
        const expBox = document.getElementById("quiz-explanation-container");
        if (expBox) expBox.classList.remove("hidden");
        
        // Show Next button
        const nextBtn = document.getElementById("quiz-next-btn");
        if (nextBtn) nextBtn.classList.remove("hidden");
      }
    } else {
      // FAILED match
      matchingGameState.selectedLeft.classList.remove("selected");
      node.classList.add("incorrect");
      setTimeout(() => {
        node.classList.remove("incorrect");
      }, 800);
      matchingGameState.selectedLeft = null;
    }
  }
};

window.handleQuizNextClick = function(btnElement) {
  currentQuestionIndex++;
  const container = btnElement.closest("#quiz-container") || btnElement.closest(".quiz-panel-view") || document.getElementById("quiz-container") || document.getElementById("quiz-panel-viewport");
  renderCurrentQuizQuestion(container);
};

function renderQuizFinalScore(container) {
  if (quizTimerId) {
    clearInterval(quizTimerId);
    quizTimerId = null;
  }

  const pct = Math.round((quizScore / activeQuizQuestions.length) * 100);
  
  // Calculate badges
  let badge = "Beginner Learner 🥉";
  let gradeClass = "below-50";
  let motivationalMessage = "Keep practicing! Review the device sheets and principles to master computer peripherals.";

  if (pct >= 90) {
    badge = "Peripheral Expert 🏆";
    gradeClass = "expert";
    motivationalMessage = "Outstanding! You possess deep structural knowledge of peripheral architectures.";
  } else if (pct >= 75) {
    badge = "Advanced Learner 🥇";
    gradeClass = "advanced";
    motivationalMessage = "Great job! You have a strong grasp of technical inputs and outputs.";
  } else if (pct >= 50) {
    badge = "Intermediate Learner 🥈";
    gradeClass = "intermediate";
    motivationalMessage = "Decent effort. Look closely at working principles and interface specs.";
  }

  container.innerHTML = `
    <div class="quiz-card-container quiz-score-card">
      <div class="quiz-score-circle">${quizScore}/${activeQuizQuestions.length}</div>
      <h3 class="quiz-score-text">Score: ${pct}%</h3>
      <div class="badge-display text-center py-2" style="font-size: 18px; font-weight: 700; color: var(--accent);">
        Badge Earned: ${badge}
      </div>
      <p class="quiz-score-desc">${motivationalMessage}</p>
      
      <!-- Save score to local storage leaderboard -->
      <div class="leaderboard-save-panel text-center py-3" style="max-width: 400px; margin: 0 auto 24px auto; border-top: 1px solid var(--border-color); padding-top: 20px;">
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 12px;">Submit your score to the Local Leaderboard:</p>
        <div style="display: flex; gap: 8px;">
          <input type="text" id="leaderboard-username" class="certificate-name-input" placeholder="Your Name" style="font-size: 13.5px; padding: 8px 12px;">
          <button class="btn btn-primary" style="padding: 8px 16px; font-size: 13.5px;" onclick="saveScoreToLeaderboard('${badge}', ${pct})">Submit</button>
        </div>
      </div>

      <!-- Claim Expert Certificate -->
      ${pct >= 90 && activeQuizQuestions.length >= 10 ? `
        <div class="certificate-claim-box">
          <div class="certificate-claim-title">🎓 Claim Your Knowledge Certificate!</div>
          <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 16px;">Type your full name to generate a downloadable certificate print:</p>
          <div class="certificate-input-group">
            <input type="text" id="certificate-student-name" class="certificate-name-input" placeholder="Enter Full Name">
            <button class="certificate-download-btn" onclick="triggerCertificateDownload(${pct}, '${badge}')">Download PNG</button>
          </div>
        </div>
      ` : ""}

      <div style="display: flex; justify-content: center; gap: 16px; margin-top: 24px;">
        <button class="btn btn-secondary" onclick="restartActiveQuiz()">Retry Quiz</button>
        <a href="index.html" class="btn btn-primary">Back to Encyclopedia</a>
      </div>
    </div>
    <canvas id="certificate-canvas" width="800" height="600"></canvas>
  `;
}

window.saveScoreToLeaderboard = function(badge, percentage) {
  const input = document.getElementById("leaderboard-username");
  if (!input) return;

  const name = input.value.trim();
  if (!name) {
    alert("Please enter your name first!");
    return;
  }

  const scores = JSON.parse(localStorage.getItem("peripedia_leaderboard") || "[]");
  const dateStr = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  
  scores.push({
    name: name,
    score: percentage,
    date: dateStr,
    badge: badge
  });

  // Sort and cap top 10
  scores.sort((a,b) => b.score - a.score);
  localStorage.setItem("peripedia_leaderboard", JSON.stringify(scores.slice(0, 10)));
  
  alert("Score successfully logged to Leaderboard!");
  input.disabled = true;
  input.nextElementSibling.disabled = true;
};

window.triggerCertificateDownload = function(score, badge) {
  const input = document.getElementById("certificate-student-name");
  if (!input) return;
  const name = input.value.trim();
  if (!name) {
    alert("Please enter your name to issue the certificate!");
    return;
  }

  const dateStr = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  drawCertificate(name, score, badge, dateStr);
};

// Canvas certificate drawing function
function drawCertificate(name, score, badge, dateStr) {
  const canvas = document.getElementById("certificate-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  // Background Fill
  ctx.fillStyle = "#fafaf9";
  ctx.fillRect(0, 0, 800, 600);
  
  // Double Navy Border
  ctx.strokeStyle = "#1e3a8a";
  ctx.lineWidth = 15;
  ctx.strokeRect(20, 20, 760, 560);
  ctx.strokeStyle = "#fbbf24"; // Gold thin inner border
  ctx.lineWidth = 3;
  ctx.strokeRect(32, 32, 736, 536);
  
  // Header Text
  ctx.fillStyle = "#1e3a8a";
  ctx.font = "bold 32px Arial";
  ctx.textAlign = "center";
  ctx.fillText("PERIPEDIA ACADEMY", 400, 95);
  
  ctx.fillStyle = "#475569";
  ctx.font = "italic 14px Georgia";
  ctx.fillText("PERIPHERAL SYSTEMS ACADEMIC PORTFOLIO", 400, 125);
  
  // Title
  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 26px Arial";
  ctx.fillText("Certificate of Knowledge", 400, 195);
  
  ctx.fillStyle = "#475569";
  ctx.font = "15px Arial";
  ctx.fillText("This certificate is proudly awarded to", 400, 240);
  
  // Student Name
  ctx.fillStyle = "#2563eb";
  ctx.font = "bold 38px Georgia";
  ctx.fillText(name, 400, 305);
  
  // Line under name
  ctx.beginPath();
  ctx.moveTo(220, 320);
  ctx.lineTo(580, 320);
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Details
  ctx.fillStyle = "#0f172a";
  ctx.font = "15px Arial";
  ctx.fillText(`For outstanding performance on the Expert Level Peripheral Devices Examination.`, 400, 370);
  
  ctx.fillStyle = "#1e3a8a";
  ctx.font = "bold 16px Arial";
  ctx.fillText(`Grade Secured: ${score}%  |  Awarded Rank: ${badge.split(" ")[0]} Learner`, 400, 405);
  
  // Date of Issue
  ctx.fillStyle = "#64748b";
  ctx.font = "13px Arial";
  ctx.fillText(`Date of Issue: ${dateStr}`, 400, 450);
  
  // Seal or Ribbon graphic
  ctx.beginPath();
  ctx.arc(400, 505, 30, 0, Math.PI * 2);
  ctx.fillStyle = "#fbbf24";
  ctx.fill();
  ctx.strokeStyle = "#d97706";
  ctx.lineWidth = 3;
  ctx.stroke();
  
  ctx.fillStyle = "#d97706";
  ctx.font = "26px Arial";
  ctx.fillText("★", 400, 514);
  
  // Signatures
  ctx.fillStyle = "#64748b";
  ctx.font = "12px Arial";
  ctx.fillText("Course Director", 180, 545);
  ctx.fillText("Academic Coordinator", 620, 545);
  
  ctx.beginPath();
  ctx.moveTo(110, 530);
  ctx.lineTo(250, 530);
  ctx.moveTo(550, 530);
  ctx.lineTo(690, 530);
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 1;
  ctx.stroke();
  
  // Download Action
  const link = document.createElement("a");
  link.download = `peripedia_certificate_${name.replace(/\s+/g, "_")}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

window.restartActiveQuiz = function() {
  const container = document.getElementById("quiz-container") || document.getElementById("quiz-panel-viewport");
  if (!container) return;
  
  if (currentDeviceKey) {
    // Restart device practice quiz
    startDevicePracticeQuiz(currentDeviceKey, container);
  } else {
    // Restart dashboard quiz
    startDashboardConfiguredQuiz(container);
  }
};

// 15. Standalone Quiz Dashboard Control (`quiz.html`)
let quizDashboardConfig = { category: "mixed", mode: "intermediate" };

window.initQuizDashboard = function() {
  const mainPanel = document.getElementById("quiz-panel-viewport");
  if (!mainPanel) return;
  
  currentDeviceKey = ""; // dashboard mode
  renderLeaderboardTable();
  setupQuizTabControls();
};

function setupQuizTabControls() {
  const tabs = document.querySelectorAll(".quiz-tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const targetId = tab.getAttribute("data-tab");
      document.querySelectorAll(".quiz-tab-content").forEach(c => c.classList.add("hidden"));
      const activeContent = document.getElementById(`tab-content-${targetId}`);
      if (activeContent) activeContent.classList.remove("hidden");
    });
  });
}

window.selectQuizConfig = function(param, val, cardElement) {
  quizDashboardConfig[param] = val;
  
  // Visual Selection Toggle
  const sibs = cardElement.parentNode.querySelectorAll(".quiz-selection-card");
  sibs.forEach(s => s.classList.remove("selected"));
  cardElement.classList.add("selected");
};

window.startDashboardQuiz = function() {
  const viewport = document.getElementById("quiz-panel-viewport");
  if (!viewport) return;
  
  startDashboardConfiguredQuiz(viewport);
};

function startDashboardConfiguredQuiz(viewport) {
  const cat = quizDashboardConfig.category;
  const mode = quizDashboardConfig.mode;
  
  // 1. Filter Questions
  let rawPool = [];
  if (cat === "input") {
    // Input devices
    const inputs = ["keyboard", "mouse", "scanner", "microphone", "webcam", "joystick", "barcode-reader"];
    inputs.forEach(k => { if (QUIZ_DATABASE[k]) rawPool.push(...QUIZ_DATABASE[k]); });
  } else if (cat === "output") {
    // Output devices
    const outputs = ["printer", "monitor", "speaker", "projector", "headphone"];
    outputs.forEach(k => { if (QUIZ_DATABASE[k]) rawPool.push(...QUIZ_DATABASE[k]); });
  } else {
    // Mixed - all devices
    Object.keys(QUIZ_DATABASE).forEach(k => {
      rawPool.push(...QUIZ_DATABASE[k]);
    });
  }

  // Shuffle Pool
  rawPool.sort(() => Math.random() - 0.5);

  // 2. Select Count based on Mode
  let qCount = 10;
  if (mode === "beginner") qCount = 5;
  else if (mode === "expert") qCount = 20;

  activeQuizQuestions = rawPool.slice(0, qCount);

  // If Expert mode, inject 1 Match the Device matching question at the end
  if (mode === "expert") {
    // Pick 4 random pairs from template
    const shuffledPairs = [...MATCHING_TEMPLATES].sort(() => Math.random() - 0.5).slice(0, 4);
    const matchingQuestion = {
      q: "Match each peripheral device to its core technical classification/type:",
      type: "matching",
      pairs: shuffledPairs,
      explanation: "Keyboards and Scanners act as inputs to the CPU, whereas Displays, Speakers, and Projectors act as visual/audio outputs."
    };
    // Replace the final question
    activeQuizQuestions[activeQuizQuestions.length - 1] = matchingQuestion;
  }

  currentQuestionIndex = 0;
  quizScore = 0;
  selectedAnswerIndex = null;

  // Initialize Timer
  if (mode === "expert") {
    quizTimerVal = 180; // 3 minutes
  } else if (mode === "intermediate") {
    quizTimerVal = 90; // 1.5 minutes
  } else {
    quizTimerVal = 60; // 1 minute
  }

  if (quizTimerId) clearInterval(quizTimerId);
  
  quizTimerId = setInterval(() => {
    quizTimerVal--;
    const display = document.getElementById("timer-sec-box");
    if (display) display.innerText = quizTimerVal;
    
    if (quizTimerVal <= 0) {
      clearInterval(quizTimerId);
      alert("Time's up! Submitting your answers.");
      renderQuizFinalScore(viewport);
    }
  }, 1000);

  // Render first question
  renderCurrentQuizQuestion(viewport);
}

function renderLeaderboardTable() {
  const table = document.getElementById("leaderboard-rows-box");
  if (!table) return;

  const data = JSON.parse(localStorage.getItem("peripedia_leaderboard") || "[]");
  if (data.length === 0) {
    table.innerHTML = `<tr><td colspan="4" class="text-center text-muted">No high scores registered yet. Be the first to secure an Expert badge!</td></tr>`;
    return;
  }

  table.innerHTML = data.map((d, index) => `
    <tr>
      <td><span class="rank-badge rank-${index + 1}">${index + 1}</span></td>
      <td><strong>${d.name}</strong></td>
      <td><span style="font-weight: 700; color: var(--accent);">${d.score}%</span></td>
      <td><span class="text-xs">${d.badge}</span></td>
      <td><span class="text-muted text-xs">${d.date}</span></td>
    </tr>
  `).join("");
}

// AI Generated Quiz connector
window.generateAIQuiz = async function() {
  const device = document.getElementById("ai-quiz-device").value;
  const difficulty = document.getElementById("ai-quiz-difficulty").value;
  const countVal = parseInt(document.getElementById("ai-quiz-count").value);
  
  const viewport = document.getElementById("quiz-panel-viewport");
  if (!viewport) return;

  // Check key
  const key = localStorage.getItem("gemini_api_key");
  if (!key) {
    // Simulation fallback
    alert("No Gemini API Key entered. Proceeding in simulation mode with 5 premium questions.");
    const simQuestions = [
      { q: "What primary factor causes modern high-speed laser scanners to create lighter/darker outputs?", options: ["Scanning head friction", "Dwell time of laser reflection on target area", "Sensor capacitor cooling rate", "CMOS shutter aperture sizing"], answer: 1, explanation: "The dwell time of reflection determines light absorption levels mapped onto the digital scanner matrix." },
      { q: "How do capacitive key switches differ from mechanical spring contact switches?", options: ["They emit wireless radio frequencies", "They measure distance changes of capacitor plates rather than physical metal clicks", "They run on separate liquid toner supplies", "They require mechanical gears to register keys"], answer: 1, explanation: "Capacitive switches detect key placement via variable capacitance shifts between plates, avoiding mechanical contact wear." },
      { q: "In color printing, what prevents magenta and cyan ink drops from blurring together?", options: ["Magnetic ink coatings", "Rapid heat evaporation of solvents in paper fibers", "Electrostatic alignment grids", "Wax barriers printed on page"], answer: 1, explanation: "Thermal ink evaporation forces ink layers to solidify quickly, avoiding color bleeding." },
      { q: "Which polar microphone pattern creates a zero-sensitivity null zone at 90 degrees and 270 degrees?", options: ["Cardioid", "Omnidirectional", "Figure-8 (Bidirectional)", "Supercardioid"], answer: 2, explanation: "Bidirectional microphones reject sounds perfectly from the lateral sides due to phase cancelation on the diaphragm sides." },
      { q: "What causes pixel crosstalk anomalies in dense liquid crystal panels?", options: ["CMOS leakage currents", "Voltage bleed from thin-film transistors into adjacent liquid cells", "LED backlight panel dimming", "Severe color spectrum shifts"], answer: 1, explanation: "Voltage bleed causes adjacent sub-pixels to slightly align, distorting adjacent pixel colors." }
    ];
    activeQuizQuestions = simQuestions.slice(0, countVal);
    currentQuestionIndex = 0;
    quizScore = 0;
    renderCurrentQuizQuestion(viewport);
    return;
  }

  // Show loading spinner in viewport
  viewport.innerHTML = `
    <div class="text-center py-5">
      <div class="typing-indicator-dots" style="justify-content: center; margin-bottom: 16px;">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
      <p style="font-weight: 700; color: var(--accent);">AI Assistant is generating custom questions about ${device} technology...</p>
      <p style="font-size:12.5px; color:var(--text-secondary);">This may take a few seconds as we query Gemini.</p>
    </div>
  `;

  try {
    const prompt = `Generate a quiz containing exactly ${countVal} ${difficulty} difficulty questions about ${device} technology. The output MUST be a valid JSON array of objects. Each object MUST contain these keys exactly: "q" (question string), "options" (array of 4 distinct strings), "answer" (integer index 0-3 of the correct option in the array), and "explanation" (detailed scientific explanation string). Respond ONLY with the raw JSON, do not wrap in markdown \`\`\`json blocks.`;
    const responseText = await callGeminiAPI(prompt, "You are a professional CSE professor writing tough academic questions. You output raw JSON arrays only.", true);
    
    // Parse response
    const parsedData = JSON.parse(responseText);
    if (Array.isArray(parsedData) && parsedData.length > 0) {
      activeQuizQuestions = parsedData;
      currentQuestionIndex = 0;
      quizScore = 0;
      selectedAnswerIndex = null;
      renderCurrentQuizQuestion(viewport);
    } else {
      throw new Error("Parsed data was not a valid array.");
    }
  } catch (error) {
    alert(`Failed to generate AI Quiz: ${error.message}. Fallback to local practice questions.`);
    startDashboardConfiguredQuiz(viewport);
  }
};

// 16. Standalone AI Assistant Page (`ai-assistant.html`)
window.initAiAssistant = function() {
  const viewport = document.getElementById("chat-console-viewport");
  if (!viewport) return;

  // Load welcome message
  appendChatMessage("ai", "Welcome! I am the **Peripheral AI Assistant** chatbot. You can ask me technical questions about computer keyboards, mice, monitors, scanners, storage systems, and printers. Type your question in the box below to start learning!", viewport);
  
  // Set up API config state display on page
  const keyBtn = document.getElementById("console-api-status-btn");
  if (keyBtn) {
    const hasKey = !!localStorage.getItem("gemini_api_key");
    if (hasKey) {
      keyBtn.innerHTML = `🔑 API Key Configured`;
      keyBtn.style.color = "#10b981";
      keyBtn.style.borderColor = "#10b981";
    } else {
      keyBtn.innerHTML = `🔑 Configure API Key`;
    }
  }
};

window.sendConsoleChatMessage = async function() {
  const input = document.getElementById("chat-console-input");
  const viewport = document.getElementById("chat-console-viewport");
  if (!input || !viewport) return;

  const msg = input.value.trim();
  if (!msg) return;

  input.value = "";
  appendChatMessage("user", msg, viewport);

  // Show typing indicator
  const indicator = document.createElement("div");
  indicator.className = "chat-message-row ai-msg typing-indicator-row";
  indicator.innerHTML = `
    <div class="chat-avatar">AI</div>
    <div class="chat-bubble-text" style="padding: 10px 14px;">
      <div class="typing-indicator-dots">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>
  `;
  viewport.appendChild(indicator);
  viewport.scrollTop = viewport.scrollHeight;

  try {
    const system = "You are the 'Peripheral AI Assistant' for Peripedia. You help users learn about computer peripheral devices and answer educational questions. RULES: 1. Answer ONLY topics related to computer peripheral devices: Keyboard, Mouse, Printer, Scanner, Monitor, Speaker, Microphone, Webcam, Plotter, Joystick, Touchscreen, Barcode Reader, Projector, Storage Devices. 2. If the user asks about ANY unrelated topic, you MUST respond exactly: 'I am Peripheral AI Assistant. I can only answer questions related to computer peripheral devices.' 3. When answering a valid topic, you MUST structure your response with: Definition, Working Principle, Key Specifications, Real-life Applications, Advantages, Disadvantages. 4. Keep the language academic, clear, and professional.";
    
    // Check key
    const key = localStorage.getItem("gemini_api_key");
    let aiResponse = "";
    if (!key) {
      // Simulation mode
      aiResponse = simulateAiResponse(msg);
    } else {
      chatHistory.push({ role: "user", text: msg });
      const promptText = chatHistory.map(h => `${h.role}: ${h.text}`).join("\n") + "\nassistant: ";
      aiResponse = await callGeminiAPI(promptText, system);
      chatHistory.push({ role: "assistant", text: aiResponse });
      if (chatHistory.length > 8) chatHistory.shift();
    }

    // Remove typing indicator
    const rows = viewport.querySelectorAll(".typing-indicator-row");
    rows.forEach(r => r.remove());

    appendChatMessage("ai", aiResponse, viewport);
  } catch (error) {
    const rows = viewport.querySelectorAll(".typing-indicator-row");
    rows.forEach(r => r.remove());
    if (error.message === "API_KEY_MISSING") {
      appendChatMessage("ai", "Gemini API Key is missing. Please click the 'Configure API Key' button above to link your key, or operate in simulation mode.", viewport);
    } else {
      appendChatMessage("ai", `Error communicating with AI: ${error.message}`, viewport);
    }
  }
};

window.triggerSuggestedQuestion = function(questionText) {
  const input = document.getElementById("chat-console-input") || document.getElementById("chat-panel-input");
  if (input) {
    input.value = questionText;
    // Auto-send
    const sendBtn = document.getElementById("chat-console-send-btn") || document.getElementById("chat-panel-send-btn");
    if (sendBtn) sendBtn.click();
  }
};

// Bootstrap utilities
document.addEventListener("DOMContentLoaded", () => {
  setupThemeMode();
  setupGlobalSearch();
  setupMobileNav();
  setupBackToTop();
  setupDetailScrollSpy();
  
  checkCategoryFilterOnLoad();
  setupFloatingChat();
  initDeviceQuiz();
  initQuizDashboard();
  initAiAssistant();
  setupApiKeyModal();
});

