import ReactPlayer from "react-player";

import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";

import { next } from "../store/slices/player";

export function Video() {
  const lesson = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player;

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ];

    return currentLesson;
  });

  const dispatch = useDispatch();

  function handlePlayNext() {
    dispatch(next());
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
        onEnded={handlePlayNext}
        playing
      />
    </div>
  );
}
