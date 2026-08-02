
const CFG = {
    // Personal info
    name: "Mate Tohai",
    email: "tohaimate98@gmail.com",
    phone: "+45 52 80 59 71",

    // Social
    github: "matetohai",
    linkedin: "https://www.linkedin.com/in/matetohai/",

    // Auto
    year: new Date().getFullYear(),

    // ===== PROJECTS =====
    projects: [
        {
            title: "Jet engine",
            description: "Designing  a Jet Engine in Solidworks",
            tags: ["CAD Design", "Mechanical"],
            image: "assets/images/Jet engine.jpg"
        },
 /*      {
            title: "Industrial Robotic Arm",
            description: "6-axis robotic arm with servo-controlled joints.",
            tags: ["Robotics", "Automation"],
            image: "assets/images/project-2.jpg"
        },
/*        {
            title: "Industrial Robotic Arm",
            description: "6-axis robotic arm with servo-controlled joints.",
            tags: ["Robotics", "Automation"],
            image: "assets/images/project-2.jpg"
        },
        {
            title: "Industrial Robotic Arm",
            description: "6-axis robotic arm with servo-controlled joints.",
            tags: ["Robotics", "Automation"],
            image: "assets/images/project-2.jpg"
        }*/
    ],

    // ===== 3D MODELS =====
    models: [
        {
            title: "Final Jet Engine Assembly",
            description: "Assembled model from Solidworks",
            file: "assets/models/Final Jet Engine Assembly.glb",
            isSample: false
        },
        {
            title: "Exhaust Assembly_1",
            description: "Exhaust assembly thruster view_1",
            file: "assets/models/Exhaust Assembly_1.glb",
            isSample: false
        },
        {
            title: "Exhaust Assembly_2",
            description: "Exhaust assembly thruster view_1",
            file: "assets/models/Exhaust Assembly_2.glb",
            isSample: false
        },
        {
            title: "Exhaust Assembly_3",
            description: "Exhaust assembly thruster view_1",
            file: "assets/models/Exhaust Assembly_3.glb",
            isSample: false
        }        
    ],

    // URLs
    get githubUrl() { return `https://github.com/${this.github}`; },
    get linkedinUrl() { return `https://linkedin.com/in/${this.linkedin}`; },
    get emailUrl() { return `mailto:${this.email}`; }
};

window.CFG = CFG;
