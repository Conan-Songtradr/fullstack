import { usePlaylists } from "../lib/hooks";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { playlists } = usePlaylists();

  return (
    <div className={styles.container}>
      {playlists.map((playlist) => (
        <p key={playlist.name}>{playlist.name}</p>
      ))}
    </div>
  );
}
