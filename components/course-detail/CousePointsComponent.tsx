import { IoCheckmarkDoneSharp } from "react-icons/io5";

const CousePointsComponent = () => {
  const data = [
    {
      title: "Understand React fundamentals",
      description:
        "Learn the core concepts of React, including components, state, props, and lifecycle methods.",
    },
    {
      title: "Build interactive user interfaces",
      description:
        "Create dynamic, responsive web applications using React's powerful rendering and state management capabilities.",
    },
    {
      title: "Manage application state",
      description:
        "Explore state management techniques, including React's built-in state and popular state management libraries like Redux.",
    },
    {
      title: "Leverage React ecosystem",
      description:
        "Utilize the vast ecosystem of React libraries and tools to enhance your applications, such as routing, forms, and testing.",
    },
  ];

  return (
    <div className="mt-12 md:mt-16 lg:mt-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        What you'll learn
      </h2>
      <ul className="grid gap-3 md:gap-4">
        {data.map((item, index) => (
          <li className="flex items-start gap-3 md:gap-4" key={index}>
            <IoCheckmarkDoneSharp className="size-6 text-primary" />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CousePointsComponent;
