"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";

type SelectProps = {
  topics: string[];
};

export default function SelectTopic({ topics }: SelectProps) {
  const router = useRouter();

  const handleValueChange = (value: string) => {
    router.push(`/${value.replaceAll(" ", "_")}`);
  };

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="flex w-[32px] items-center justify-center">
        <div className="">
          <FaChevronDown size={18} />
        </div>
      </SelectTrigger>
      <SelectContent>
        {topics?.map((topic, index) => (
          <SelectItem key={index} value={topic}>
            {topic}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
