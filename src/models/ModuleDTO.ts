import { LessonDTO } from "./LessonDTO";

export type ModuleDTO = {
  id: number;
  title: string;
  lessons: LessonDTO[];
};
