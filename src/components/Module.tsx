import * as Collapsible from "@radix-ui/react-collapsible";

import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";
import { ModuleDTO } from "../models/ModuleDTO";

import { useAppSelector } from "../store";

interface ModuleProps {
  module: ModuleDTO;
  moduleIndex: number;
}

export function Module({ module, moduleIndex }: ModuleProps) {
  const lessons = useAppSelector((state) => {
    return state.player.course.modules[moduleIndex].lessons;
  });

  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-sm">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{module.title}</strong>
          <span className="text-xs text-zinc-400">
            {module.lessons.length} aulas
          </span>
        </div>

        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons.map((lesson) => (
            <Lesson lesson={lesson} key={lesson.id} />
          ))}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
