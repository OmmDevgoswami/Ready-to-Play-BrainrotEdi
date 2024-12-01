import imgplayer from "./assets/gaming_enthusiast_image.jpg"
 
function App() {

  return(
  
    <div style={{ display: "flex", alignItems: "center", gap: "20px" , padding: "20px", }}>
      <div style={{ flex: 1, padding: "10px" }}> 
          <h1 style={{ color: "black", fontSize: "4vw", textAlign: "center" }}>
           About Ready to Play
          </h1>
          <p style={{ color: "black", fontSize: "1.5vw", lineHeight: "1.5" }}>
           Ready to Play is a revolutionary (and slightly chaotic) event booking platform for physical games. Our app bridges the gap between online convenience and real-world fun by helping you reserve spaces for your favorite activities—ping pong, board games, laser tag, you name it. But this is not your typical booking system. We are redefining the concept of fun with a sprinkle of chaos and a whole lot of personality. A dedicated page of brainrot memes? Check. A booking experience that surprises you with random TikTok audios and glitter explosions? Absolutely. From meme-filled pages to quirky pop-ups that keep you laughing, we have transformed routine event planning into a fun and unforgettable adventure. Because why settle for boring when you can book with brainrot?
          </p>

          <p className="paragraph" style={{ color: "black", fontSize: "1.5vw", lineHeight: "1.5" }}>
           <strong>Our Goals</strong><br />

           1. Encourage Real-Life Connections: In a digital-first world, we aim to inspire people to reconnect with friends, family, and communities through games and shared experiences. <br />
           2. Make Booking Fun: No one enjoys boring forms or plain interfaces. With Ready to Play, we have combined functionality with humor, infusing the process with unexpected joy and delightful surprises. <br />
           3. Blend Practicality with Entertainment: While the app delivers all the tools you need to organize events, it also offers hilarious, brainrot-infused moments to keep you engaged. <br />
           4. Simplify Event Planning: Make it easy for users to find and book sports venues or events without unnecessary hassle.
          </p>

          <p className="paragraph" style={{ color: "black", fontSize: "1.5vw", lineHeight: "1.5" }}>
           <strong>The Concept</strong> <br />
           At its core, Ready to Play is about bringing people together to have fun in real life while embracing the quirks of internet culture. The app reflects the chaos and joy of modern memes and trends while fulfilling a practical purpose—making game night planning effortless and exciting.Whether you are here for the games or just to laugh at the brainrot surprises along the way, Ready to Play is here to create an unforgettable experience. So, what are you waiting for? Dive into Ready to Play and make your next game night legendary!
          </p>
      </div>
     
       <div style={{ flex: 1 }}>
         <img 
           src={imgplayer} 
           alt="Gaming Enthusiast"
           style={{ width: "100%", height: "auto", borderRadius: "10px" }} 
          />
       </div>
    </div>
  );
}

export default App