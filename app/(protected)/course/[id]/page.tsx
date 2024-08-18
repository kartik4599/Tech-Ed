"use client";
import CourseContent from "@/components/course-detail/CourseContent";
import CourseIncludeComponent from "@/components/course-detail/CourseIncludeComponent";
import CousePointsComponent from "@/components/course-detail/CousePointsComponent";
import MainCourseComponent from "@/components/course-detail/MainCourseComponent";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { fetcher } from "@/lib/services";
import { Course } from "@prisma/client";
import useSwr from "swr";

export default function CourseDetail({ params }: { params: { id: string } }) {
  const { data, isLoading, error } = useSwr<Course>(
    `/courses/${params.id}`,
    fetcher
  );

  if (isLoading || error) {
    return (
      <div className="w-full h-screen max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="space-y-4 md:space-y-6">
            <Skeleton>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Loading...
              </h1>
            </Skeleton>
            <Skeleton className="text-muted-foreground text-lg md:text-xl">
              <p className="text-muted-foreground text-lg md:text-xl">
                Please kindly wait or refresh the page
              </p>
            </Skeleton>
          </div>
          <Skeleton className="rounded-lg object-cover aspect-[4/3] w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <MainCourseComponent data={data!} />
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
