import { PlayCircle, Video } from "lucide-react";
import { LessonDTO } from "../models/LessonDTO";

interface LessonProps {
  lesson: LessonDTO;
  isCurrent?: boolean;
  onPlay: () => void;
}

export function Lesson({ lesson, isCurrent = false, onPlay }: LessonProps) {
  return (
    <button
      data-active={isCurrent}
      onClick={onPlay}
      disabled={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400
       data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100"
    >
      {isCurrent ? (
        <PlayCircle className="w-4 h-4 text-emerald-400" />
      ) : (
        <Video className="w-4 h-4 text-zinc-500" />
      )}
      <span>{lesson.title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {lesson.duration}
      </span>
    </button>
  );
}
