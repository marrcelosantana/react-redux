import { LessonDTO } from "./LessonDTO";

export type ModuleDTO = {
  id: string;
  title: string;
  lessons: LessonDTO[];
};
