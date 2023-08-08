import { ModuleDTO } from "./ModuleDTO";

export type CourseDTO = {
  modules: ModuleDTO[];
  currentModuleIndex: number;
  currentLessonIndex: number;
};
