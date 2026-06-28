import webDev from "/images/web-dev.jpg";
import graphicDesign from "/images/graphic-design.jpg";
import videoEditing from "/images/video-editing.jpg";
import seo from "/images/seo.jpg";
import writing from "/images/writing.jpg";
import blog from "/images/blog.jpg";
import mobileApp from "/images/mobile-app.jpg";
import flutter from "/images/flutter.jpg";
import frontend from "/images/frontend-dev.jpg";
import socialmedia from "/images/socialmedia.jpg";
import socialMarketing from "/images/mediaMarketing.jpg";
import brandIdentity from "/images/brandIdentityDesign.jpg";

const services = [
  {
    id: 1,
    sellerId: 1,
    title: "Website Development",
    freelancer: "Ali Hassan",
    category: "Web Development",
    image: webDev,
    description: "Modern responsive business websites.",
    price: "$150",
    rating: 4.9,
  },
  {
    id: 2,
    sellerId: 2,
    title: "React Frontend Development",
    freelancer: "Sara Khan",
    category: "Web Development",
    image: frontend,
    description: "Professional React applications.",
    price: "$200",
    rating: 4.8,
  },
  {
    id: 3,
    sellerId: 3,
    title: "Logo Design",
    freelancer: "Ahmed Raza",
    category: "Graphic Design",
    image: graphicDesign,
    description: "Unique and memorable logo designs.",
    price: "$50",
    rating: 4.7,
  },
  {
    id: 4,    
    sellerId: 4,
    title: "Brand Identity Design",
    freelancer: "Fatima Noor",
    category: "Graphic Design",
    image: brandIdentity,
    description: "Complete branding solutions.",
    price: "$120",
    rating: 4.9,
  },
  {
    id: 5,
    sellerId: 5,
    title: "YouTube Video Editing",
    freelancer: "Usman Ali",
    category: "Video Editing",
    image: videoEditing,
    description: "Professional video editing service.",
    price: "$70",
    rating: 4.8,
  },
  {
    id: 6,
    sellerId: 6,
    title: "Social Media Reels",
    freelancer: "Ayesha Malik",
    category: "Video Editing",
    image: socialmedia,
    description: "Engaging Instagram & TikTok reels.",
    price: "$40",
    rating: 4.6,
  },
  {
    id: 7,
    sellerId: 7,
    title: "SEO Marketing",
    freelancer: "Bilal Khan",
    category: "Marketing",
    image: seo,
    description: "Improve Google rankings.",
    price: "$100",
    rating: 4.9,
  },
  {
    id: 8,
    sellerId: 8,
    title: "Social Media Marketing",
    freelancer: "Hamza Ahmed",
    category: "Marketing",
    image: socialMarketing,
    description: "Grow your audience effectively.",
    price: "$80",
    rating: 4.8,
  },
  {
    id: 9,
    sellerId: 9,
    title: "Blog Writing",
    freelancer: "Zara Ali",
    category: "Writing",
    image: blog,
    description: "SEO-friendly articles and blogs.",
    price: "$30",
    rating: 4.7,
  },
  {
    id: 10,
    sellerId: 10,
    title: "Copywriting",
    freelancer: "Hina Sheikh",
    category: "Writing",
    image: writing,
    description: "High-converting marketing copy.",
    price: "$45",
    rating: 4.8,
  },
  {
    id: 11,
    sellerId: 11,
    title: "Android App Development",
    freelancer: "Saad Khan",
    category: "Programming",
    image: mobileApp,
    description: "Custom Android applications.",
    price: "$300",
    rating: 4.9,
  },
  {
    id: 12,
    sellerId: 12,
    title: "Flutter App Development",
    freelancer: "Mariam Ahmed",
    category: "Programming",
    image: flutter,
    description: "Cross-platform mobile apps.",
    price: "$350",
    rating: 5.0,
  },
];

export default services;