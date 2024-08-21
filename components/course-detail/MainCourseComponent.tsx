import { CourseDetail } from "@/app/(protected)/course/[id]/page";
import PaymentButton from "../PaymentButton";

const MainCourseComponent = ({ data }: { data: CourseDetail }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
      <div className="space-y-4 md:space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          {data.title}
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          {data.description}
        </p>
        {!data.isPaid && <PaymentButton amount={data.price} id={data.id} />}
      </div>
      <img
        src={data.imageUrl!}
        alt="React Course"
        width="800"
        height="500"
        className="rounded-lg object-cover aspect-[4/3]"
      />
    </div>
  );
};

export default MainCourseComponent;
