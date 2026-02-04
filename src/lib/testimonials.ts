export interface Testimonial {
  id: string;
  name: string;
  role: string;
  feedback: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Pusuluri Saradhi",
    role: "DevOps Engineer",
    feedback: "It was an amazing journey for me to attend Rudra's Cloud Gurukul DevOps Training Institute. The professors were well-organized and had a high degree of knowledge. They also provided helpful tips on how to apply them in real world scenarios. I really recommend this training facility to anyone interested in learning DevOps.",
    rating: 5,
  },
  {
    id: "2",
    name: "Sravanthi Chowdary",
    role: "Cloud Engineer",
    feedback: "Trainer is just perfect! Explanation of concepts by using real-time warehouses is simply superb. The hands-on projects helped me understand the concepts deeply. I will definitely recommend Rudra's Cloud Gurukul for cloud and DevOps training.",
    rating: 5,
  },
  {
    id: "3",
    name: "Pokuri Srinivasa",
    role: "DevOps Trainee",
    feedback: "I can say it's the best DevOps training institute in KPHB. Trainers are encouraging students by clarifying their doubts even after attending interviews and getting jobs. This is the best one if you are looking for DevOps training.",
    rating: 5,
  },
  {
    id: "4",
    name: "Rahul Sharma",
    role: "AWS Solutions Architect",
    feedback: "The AWS DevOps course was comprehensive and practical. The real-time projects and interview preparation helped me land a job with a 65% salary hike. Highly recommended for anyone looking to transition into cloud computing.",
    rating: 5,
  },
  {
    id: "5",
    name: "Priya Reddy",
    role: "Full Stack Developer",
    feedback: "Excellent training methodology! The instructors have real industry experience and they share practical insights that you won't find in books. The placement support was outstanding - I got placed within 2 weeks of completing my course.",
    rating: 5,
  },
  {
    id: "6",
    name: "Venkat Kumar",
    role: "Data Engineer",
    feedback: "The Multi-Cloud DevOps course gave me expertise in all three major cloud platforms. The curriculum is up-to-date with industry standards. Thanks to RCG, I successfully transitioned from a support role to a DevOps engineer.",
    rating: 5,
  },
];
