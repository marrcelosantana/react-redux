import { Video } from "lucide-react";
import { LessonDTO } from "../models/LessonDTO";

interface LessonProps {
  lesson: LessonDTO;
}

export function Lesson({ lesson }: LessonProps) {
  return (
    <button className="flex items-center gap-3 text-sm text-zinc-400">
      <Video className="w-4 h-4 text-zinc-500" />
      <span>{lesson.title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {lesson.duration}
      </span>
    </button>
  );
}
