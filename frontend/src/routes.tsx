import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import InjuryInfoPage from "./pages/InjuryInfoPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import Page404 from "./pages/Page404";
import PlayerInfoPage from "./pages/PlayerInfoPage";
import ScheduleInfoPage from "./pages/ScheduleInfoPage";
import TeamInfoPage from "./pages/TeamInfoPage";
import GameInfoPage from "./pages/GameInfoPage";
import CoachInfoPage from "./pages/CoachInfoPage";
import RankingInfoPage from "./pages/RankingInfoPage";

export default function AppRouter() {
    const routes = useRoutes([
        {
            path: "",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <MainPage />,
                },
                {
                    path: "player-info",
                    element: <PlayerInfoPage />,
                },
                {
                    path: "coach-info",
                    element: <CoachInfoPage />,
                },
                {
                    path: "injury-info",
                    element: <InjuryInfoPage />,
                },
                {
                    path: "team-info",
                    element: <TeamInfoPage />,
                },
                {
                    path: "schedule-info",
                    element: <ScheduleInfoPage />,
                },
                // deprecated
                // {
                //     path: "game-info",
                //     element: <GameInfoPage />,
                // },
                {
                    path: "ranking-info",
                    element: <RankingInfoPage />,
                },
            ],
        },
        // unused
        // {
        //     path: "login",
        //     element: <LoginPage />,
        // },
        {
            path: "404",
            element: <Page404 />,
        },
        {
            path: "*",
            element: <Navigate to="/404" />,
        },
    ]);

    return routes;
}