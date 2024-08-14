import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaClock, FaMobileAlt, FaTags } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";




export default function Component() {
  const data = [
    {
      title: "Introduction to Web Development",
      description:
        "Learn the fundamentals of web development, including HTML,CSS, and JavaScript.",
      hour: 12,
      price: 99,
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VifGVufDB8fDB8fHww",
    },
    {
      title: "Data Science Fundamentals",
      description:
        "Dive into the world of data science and learn how to analyze and interpret data.",
      hour: 18,
      price: 149,
      url: "https://images.unsplash.com/photo-1644325349124-d1756b79dd42?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Machine Learning for Beginners",
      description:
        "Explore the fundamentals of machine learning and build your own models.",
      hour: 24,
      price: 199,
      url: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWFjaGluZSUyMExlYXJuaW5nfGVufDB8fDB8fHww",
    },
    {
      title: "Introduction to Digital Marketing",
      description:
        "Learn the essential strategies and tactics for effective digital marketing.",
      hour: 15,
      price: 129,
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
  const tags = ["Course 1", "Course 2", "Course 3", "Course 4", "Course 5"];
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="grid gap-4">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explore Our Courses
              </h1>
              <div className="hidden ml-auto relative flex-1 max-w-sm md:block">
                <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
                  <IoIosSearch className="size-4" />
                </div>
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="h-9 pl-8 rounded-md bg-muted focus:bg-primary/10"
                />
              </div>
            </div>
            <p className="text-muted-foreground md:text-xl">
              Find the perfect course to expand your knowledge and skills.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="cursor-pointer">Course 0</Badge>
              {tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="cursor-pointer">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((item, index) => (
              <CourseCard key={index} item={item} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
