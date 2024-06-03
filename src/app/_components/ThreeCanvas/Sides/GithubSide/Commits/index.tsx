import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import CommitCube from "./CommitCube";

const GAP_SIZE = 0.015;

type CommitsResponse = {
  max: number;
  median: number;
  min: 1;
  p80: number;
  p90: number;
  p99: number;
  username: string;
  year: string;
  contributions: {
    week: number;
    days: { count: number }[];
  }[];
};

export const fetchCommitOptions = queryOptions<CommitsResponse>({
  queryKey: ["commits"],
  queryFn: async () => {
    const response = await fetch(
      "https://skyline.github.com/aaronclaes/2024.json",
    );

    return response.json();
  },
});

export default function Commits() {
  const query = useSuspenseQuery(fetchCommitOptions);

  const dailyCommits: number[] = [0];
  query.data.contributions.forEach((commit) => {
    commit.days.forEach((day) => {
      dailyCommits.push(day.count);
    });
  });

  const commitGraphWidth = 1.94;

  const cubesPerColumn = 7;
  const cubesPerRow = Math.ceil(dailyCommits.length / cubesPerColumn);
  const cubeWidth =
    (commitGraphWidth - cubesPerRow * GAP_SIZE + GAP_SIZE) / cubesPerRow;
  const widthWithGap = cubeWidth + GAP_SIZE;

  function getGreenShade(commit: number) {
    const greenValue = Math.floor((commit / query.data.max) * 200);
    return `rgb(0, ${greenValue}, 0)`;
  }

  return (
    <group position={[-(commitGraphWidth - cubeWidth) / 2, 0.5, 0]}>
      {dailyCommits.map((commit, index) => {
        const column = Math.floor(index / cubesPerColumn);
        const posX = column * widthWithGap;
        const posY = -(index % cubesPerColumn) * widthWithGap;
        const shade = getGreenShade(commit);
        return (
          <CommitCube
            key={index}
            posX={posX}
            posY={posY}
            count={commit}
            width={cubeWidth}
            shade={shade}
          />
        );
      })}
    </group>
  );
}
