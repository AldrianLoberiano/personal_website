export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  link?: string;
  image?: string;
}

export const categories: string[] = [
  'All',
  'Web Application',
  'Mobile Application',
  'Desktop Application',
  'E-commerce',
  'Government',
  'Healthcare',
  'Educational Platform',
  'Tourism',
  'Business Management',
  'Business Directory',
  'Service Management',
  'POS System',
  'AI Assistant',
  'IoT',
  'Cisco Projects'
];

export const projects: Project[] = [
  {
    title: "Barangay Appointment System",
    description: "A comprehensive PHP-based appointment management system for barangay offices. Features include online booking, queue management, and real-time notifications for citizens and staff.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    category: "Government",
    link: "https://github.com/AldrianLoberiano/sto_tomas_appointment_system",
    image: "/images/project1.png"
  },
  {
    title: "Smart Fruit Detection",
    description: "AI-powered computer vision system for real-time fruit detection and counting. Features a modern dark-themed UI with neon-green accents, accurate detection algorithms, and visual analytics dashboard.",
    tags: ["Django", "OpenCV", "MySQL", "TensorFlow"],
    category: "AI Assistant",
    link: "https://github.com/AldrianLoberiano/website",
    image: "/images/project2.png"
  },
  {
    title: "Coffee Shop POS",
    description: "Lightweight Point of Sale system with secure authentication, role-based access control for Admin, Barista, and Cashier. Includes inventory tracking, sales reporting, and transaction management.",
    tags: ["PHP", "CSS", "MySQL"],
    category: "POS System",
    link: "https://github.com/AldrianLoberiano/POS",
    image: "/images/project3.png"
  },
  {
    title: "Gas and Smoke Detection with IoT Integration system",
    description: "A safety monitoring system designed to detect gas leaks and smoke levels using IoT-enabled sensors. When hazardous levels are detected, the system automatically triggers alerts and activates safety mechanisms such as alarms, exhaust fans, or notifications. Built to demonstrate real-time environmental monitoring, automation, and smart IoT integration for enhanced safety and prevention.",
    tags: ["C++", "Arduino", "IoT"],
    category: "IoT",
    link: "https://github.com/AldrianLoberiano/gas_and_smoke_with_IoT",
    image: "/images/project4.jpg"
  }
];
