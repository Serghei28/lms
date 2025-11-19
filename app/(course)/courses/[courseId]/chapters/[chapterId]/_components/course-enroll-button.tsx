"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

interface CourseEnrollButtonProps {
    price: number;
    courseId: string;
}

export const CourseEnrollButton = ({
price,
courseId,
}: CourseEnrollButtonProps) => {
    const [isLoading, setIsLoanidg] = useState(false);

     const router = useRouter();
    const { userId } = useAuth();


    if (!userId) {
        return (
            <Button
                onClick={() => router.push("/sign-in")}
                size="sm"
                className="w-full md:w-auto"
            >
                Login to purchase
            </Button>
        );
    }
    const onClick = async () => {
        try {
            setIsLoanidg(true);

            const response = await axios.post(`/api/courses/${courseId}/checkout`)

            window.location.assign(response.data.url);
        } catch {
            toast.error("Something went wrong");
        } finally {
            setIsLoanidg(false);
        }
    }

    return(
        <Button
        onClick={onClick}
        disabled={isLoading}
        size="sm"
        className="w-full md:w-auto"
        >
            Enroll for {formatPrice(price)}
        </Button>
    )
}