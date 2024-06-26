import useData from "./useData";
import { GameQuery } from "../App";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //sheesh wtf dont understand
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;

// USE THIS PAG NAHIHIRAPAN KA USE THIS INSTEAD OF useData

// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";

// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// export interface Game {
//   id: number;
//   name: string;
//   background_image: string;
//   parent_platforms: { platform: Platform }[]; //sheesh wtf dont understand
//   metacritic: number;
// }
// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }
// const useGames = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     // const controller = new AbortController();
//     setIsLoading(true);
//     apiClient
//       .get<FetchGamesResponse>("/games") //, { signal: controller.signal })
//       .then((res) => {
//         setGames(res.data.results);
//         setIsLoading(false);
//       })
//       .catch((err) => setError(err.message));

//     // return () => controller.abort();
//   }, []);

//   return { games, error, isLoading };
// };

// export default useGames;
