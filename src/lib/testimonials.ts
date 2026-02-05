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
    role: "DevOps Trainee",
    feedback: "It was an amazing journey for me to attend the Srish Technologies DevOps Training Institute. The professors were well-organized and had a high degree of knowledge. They also provided helpful tips on how to apply them in real world scenarios. I really recommend this training facility to anyone interested in learning DevOps.",
    rating: 5,
  },
  {
    id: "2",
    name: "Sravanthi Chowdary",
    role: "DevOps Trainee",
    feedback: "Trainer is just perfect. Explanation of concepts by using real-time warehouses is simply superb. I will definitely recommend Srish technologies for snowflake training.",
    rating: 5,
  },
  {
    id: "3",
    name: "Pokuri Srinivasa",
    role: "DevOps Trainee",
    feedback: "I can say it's a best DevOps training institute in KPHB. Trainers are encouraging students by clarifying their doubts even after attending interviews and getting jobs. This is the best one if you are looking for DevOps.",
    rating: 5,
  },
];
