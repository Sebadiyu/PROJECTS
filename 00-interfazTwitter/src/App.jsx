import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
    return (
        <div className="App">
            <TwitterFollowCard userName="DukiSSJ" initialIsFollowing={true}>
                YA SUPISTE
            </TwitterFollowCard>
            <TwitterFollowCard userName="emimartinezz1" isFollowing>
                Emiliano Martinez
            </TwitterFollowCard>
            <TwitterFollowCard userName="elonmusk" isFollowing>
                Elon Musk
            </TwitterFollowCard>
            <TwitterFollowCard userName="natijota" isFollowing>
                Nati Jota
            </TwitterFollowCard>
            <TwitterFollowCard userName="Argentina" isFollowing>
                Selección Argentina
            </TwitterFollowCard>
        </div>
    );
}
