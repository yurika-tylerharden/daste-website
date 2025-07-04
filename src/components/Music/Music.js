import React from 'react';
import { motion } from 'framer-motion';
import './Music.css';
import SpotifyEmbed from './SpotifyEmbed';

const Music = ({ theme, changeTheme }) => {
  return (
    <motion.div
      className='music'
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className="video-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <iframe 
          src="https://www.youtube.com/embed/tS8d4XtT5oM?si=qst2KXv-XqEHGim4" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </motion.div>
      <motion.div
        className="spotify-embed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        <SpotifyEmbed artistId={'5uXWOfu1kA8mQ9bUp5GgxT'}/>
      </motion.div>
    </motion.div>
  );
}

export default Music;


// <main className="music">
//         <section>
//           {/* <h2>Around (Single)</h2> */}
//           <iframe 
//             title="Around Single by daste." 
//             src="https://open.spotify.com/embed/album/5sfmsDl4lB1lZdX2gxIK3q?si=LiNlxqvrQMSXzbRtBbTRqg" 
//             width="100%" 
//             height="380" 
//             frameBorder="0" 
//             allowTransparency="true" 
//             allow="encrypted-media"
//           ></iframe>
//           {/* <img src="assets/around.jpg" alt="Around Single" className="release-photo" /> */}
//         </section>
//         <section>
//           {/* <h2>Butterfly (Single)</h2> */}
//           <iframe 
//             title="Butterfly Single by daste." 
//             src="https://open.spotify.com/embed/album/5Q38YvTGu832sX1ZDKK2sO?si=_1WIx-6cSvu540d5yMjwwQ" 
//             width="100%" 
//             height="380" 
//             frameBorder="0" 
//             allowTransparency="true" 
//             allow="encrypted-media"
//           ></iframe>
//           {/* <img src="assets/butterfly.jpg" alt="Butterfly Single" className="release-photo" /> */}
//         </section>
//         <section>
//           {/* <h2>Dusk & Dawn (Album)</h2> */}
//           <iframe 
//             title="Dusk & Dawn Album by daste." 
//             src="https://open.spotify.com/embed/album/77bVy7O8N5R9vSDhcXWPFb?si=2qzmvx_KQhawv_f1GfFThw" 
//             width="100%" 
//             height="380" 
//             frameBorder="0" 
//             allowTransparency="true" 
//             allow="encrypted-media"
//           ></iframe>
//           {/* <img src="dusk_dawn.jpg" alt="Dusk & Dawn Album" className="release-photo" /> */}
//         </section>
//         <section>
//           {/* <h2>Same As It Ever Was (EP)</h2> */}
//           <iframe 
//             title="Same As It Ever Was EP by daste." 
//             src="https://open.spotify.com/embed/album/5UwvFKxjw0hwptJ5HyOWNb?si=u-xgaqHwRKyIBpSrCHCcJQ" 
//             width="100%" 
//             height="380" 
//             frameBorder="0" 
//             allowTransparency="true" 
//             allow="encrypted-media"
//           ></iframe>
//           {/* <img src="assets/same_as_it_ever_was.jpg" alt="Same As It Ever Was EP" className="release-photo" /> */}
//         </section>
//         <section>
//           {/* <h2>Palette (EP)</h2> */}
//           <iframe 
//             title="Palette EP by daste." 
//             src="https://open.spotify.com/embed/album/5vAb08N0DcBLIX2QopJbOa?si=IiM576EUS9O_SpusG9BUwA" 
//             width="100%" 
//             height="380" 
//             frameBorder="0" 
//             allowTransparency="true" 
//             allow="encrypted-media"
//           ></iframe>
//           {/* <img src="assets/palette.jpg" alt="Palette EP" className="release-photo" /> */}
//         </section>
//       </main>