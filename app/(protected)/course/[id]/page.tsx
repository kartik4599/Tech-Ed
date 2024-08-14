import CourseContent from "@/components/course-detail/CourseContent";
import CourseIncludeComponent from "@/components/course-detail/CourseIncludeComponent";
import CousePointsComponent from "@/components/course-detail/CousePointsComponent";
import MainCourseComponent from "@/components/course-detail/MainCourseComponent";
import { Separator } from "@/components/ui/separator";
import { CourseData } from "@/lib/utils";

export default function CourseDetail({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const data = CourseData[id];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <MainCourseComponent data={data} />
      <Separator className="my-4" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <CousePointsComponent />
        <CourseIncludeComponent />
      </div>
      <Separator className="my-4" />
      <CourseContent />
    </div>
  );
}
