"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const MyEditor = ({ value, onChange }: EditorProps) => {
  return (
    <div className="bg-white border rounded-md p-2">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        placeholder="Write your description..."
      />
    </div>
  );
};
