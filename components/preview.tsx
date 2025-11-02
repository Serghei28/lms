"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill-new/dist/quill.bubble.css";

interface PreviewProps {
  value: string;
}

export const Preview = ({ value }: PreviewProps) => {
  const ReactQuill = useMemo(
    () =>
      dynamic(() => import("react-quill-new"), {
        ssr: false,
      }),
    []
  );

  if (!value) {
    return <p className="text-slate-500 italic">No description.</p>;
  }

  return (
    <div className="bg-gray-50 border rounded p-2">
      <ReactQuill value={value} readOnly theme="bubble" />
    </div>
  );
};
