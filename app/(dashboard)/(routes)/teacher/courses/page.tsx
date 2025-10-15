import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
    return ( 
        <div>
            <Button className="p-6">
                <Link href="/teacher/create">
                    Courses Page
                </Link>
            </Button>
        </div>
     );
}
 
export default CoursesPage;