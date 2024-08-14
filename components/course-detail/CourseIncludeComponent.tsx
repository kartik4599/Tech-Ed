import { FaAward } from "react-icons/fa";
import { IoMdDocument, IoMdDownload } from "react-icons/io";
import { IoInfinite } from "react-icons/io5";
import { MdDevices, MdOutlineSlowMotionVideo } from "react-icons/md";

const CourseIncludeComponent = () => {
  const data = [
    { icon: MdOutlineSlowMotionVideo, name: "55.5 hours on-demand video" },
    { icon: IoMdDocument, name: "17 articles" },
    { icon: IoMdDownload, name: "90 downloadable resources" },
    { icon: MdDevices, name: "Access on mobile and TV" },
    { icon: FaAward, name: "Certificate of completion" },
    { icon: IoInfinite, name: "Full lifetime access" },
  ];

  return (
    <div className="mt-12 md:mt-16 lg:mt-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        This course includes
      </h2>
      <ul className="grid gap-3 md:gap-4">
        {data.map((item, index) => (
          <li className="flex items-start gap-3 md:gap-4" key={index}>
            <item.icon className="size-6 text-primary" />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseIncludeComponent;
