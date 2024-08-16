import { type ClassValue, clsx } from "clsx";
import { Resolver } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CourseData = [
  {
    title: "Introduction to Web Development",
    description:
      "Learn the fundamentals of web development, including HTML,CSS, and JavaScript.",
    hour: 12,
    price: 999,
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VifGVufDB8fDB8fHww",
  },
  {
    title: "Data Science Fundamentals",
    description:
      "Dive into the world of data science and learn how to analyze and interpret data.",
    hour: 18,
    price: 1299,
    url: "https://images.unsplash.com/photo-1644325349124-d1756b79dd42?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Machine Learning for Beginners",
    description:
      "Explore the fundamentals of machine learning and build your own models.",
    hour: 24,
    price: 1299,
    url: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWFjaGluZSUyMExlYXJuaW5nfGVufDB8fDB8fHww",
  },
  {
    title: "Introduction to Digital Marketing",
    description:
      "Learn the essential strategies and tactics for effective digital marketing.",
    hour: 15,
    price: 599,
    url: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGlnaXRhbCUyME1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Graphic Design Fundamentals",
    description:
      "Explore the principles of design and learn how to create visually stunning designs.",
    hour: 20,
    price: 179,
    url: "https://plus.unsplash.com/premium_photo-1673214880293-0e94d61548b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R3JhcGhpY3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Introduction to Cybersecurity",
    description:
      "Gain a comprehensive understanding of cybersecurity principles and best practices.",
    hour: 22,
    price: 189,
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Project Management Essentials",
    description:
      "Learn the fundamental principles and techniques of effective project management.",
    hour: 16,
    price: 139,
    url: "https://plus.unsplash.com/premium_photo-1661782562303-b6839db30206?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Introduction to Artificial Intelligence",
    description:
      "Explore the fundamentals of artificial intelligence and its real-world applications.",
    hour: 26,
    price: 219,
    url: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXJ0aWZpY2lhbCUyMEludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Creative Writing Workshop",
    description:
      "Develop your creative writing skills and learn techniques to craft compelling stories.",
    hour: 14,
    price: 119,
    url: "https://plus.unsplash.com/premium_photo-1661690088942-d968065868d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V29ya3Nob3B8ZW58MHx8MHx8fDA%3D",
  },
];

export type SignUpForm = {
  name: string;
  email: string;
  password: string;
};

export type SignInForm = {
  email: string;
  password: string;
};

export const signUpFormResolver: Resolver<SignUpForm> = async (values) => {
  const errors: any = {};

  if (!values.name) errors.name = "Name is required";
  if (values.name && values.name.length < 3)
    errors.name = "Name should be at least 3 characters long";
  if (!values.email) errors.email = "Email is required";
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  )
    errors.email = "Invalid email address";
  if (!values.password) errors.password = "Password is required";
  if (values.password && values.password.length < 6)
    errors.password = "Password should be at least 6 characters long";

  return {
    values: values,
    errors,
  };
};

export const signInFormResolver: Resolver<SignInForm> = async (values) => {
  const errors: any = {};

  if (!values.email) errors.email = "Email is required";
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  )
    errors.email = "Invalid email address";
  if (!values.password) errors.password = "Password is required";
  if (values.password && values.password.length < 6)
    errors.password = "Password should be at least 6 characters long";

  return {
    values: values,
    errors,
  };
};