import { auth } from "@clerk/nextjs/server";
import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";

const TeacherLayout = async({
    children
}: {
    children: React.ReactNode;
}) => {
    const { userId } = await auth();

    if (!userId) {
  return redirect("/sign-in");
}

if (!isTeacher(userId)) {
  return redirect("/");
}

    return <>{children}</>
}

export default TeacherLayout;