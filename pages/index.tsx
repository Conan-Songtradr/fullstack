import { usePlaylists } from "../lib/hooks";
import styles from "../styles/Home.module.css";

const Home = () => {
  const { playlists } = usePlaylists();

  return (
    <div className={styles.container}>
      {playlists.map((playlist) => (
        <p key={playlist.name}>{playlist.name}</p>
      ))}
    </div>
  );
};

export default Home;
