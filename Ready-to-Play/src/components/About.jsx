import imgplayer from "../assets/Resources/Logo.png";

function About() {
  return (
    <div className="Container" style={{background: "linear-gradient(to right, #52e63b, #177c17)"}}>
    <div style={{ display: "flex", flexDirection: "row-reverse", alignItems: "center", gap: "20px", padding: "20px" }}>
      <div style={{ flex: 1, padding: "10px" }}>
        <h1 style={{ color: "black", fontSize: "4vw", textAlign: "center" }}>
          About Ready to Play
        </h1>
        <div style={{ display: "flex", flexDirection: "row-reverse", alignItems: "center", gap: "20px" }}>
          <img
            src={imgplayer}
            alt="Gaming Enthusiast"
            style={{
              width: "150px", // size of the image
              height: "150px",
              borderRadius: "50%", // makes the image circular
              objectFit: "cover",
              border: "5px solid #000", // optional border for emphasis
              background: "white"
            }}
          />
          <p style={{ color: "black", fontSize: "1.5vw", lineHeight: "1.5" }}>
            Ready to Play is a revolutionary (and slightly chaotic) event booking platform for physical games. Our app bridges the gap between online convenience and real-world fun by helping you reserve spaces for your favorite activities—ping pong, board games, laser tag, you name it. But this is not your typical booking system. We are redefining the concept of fun with a sprinkle of chaos and a whole lot of personality. A dedicated page of brainrot memes? Check. A booking experience that surprises you with random TikTok audios and glitter explosions? Absolutely. From meme-filled pages to quirky pop-ups that keep you laughing, we have transformed routine event planning into a fun and unforgettable adventure. Because why settle for boring when you can book with brainrot?
          </p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "20px" }}>
            <h2>Our Goals</h2>
            <div
              style={{
                backgroundColor: "#f5f5f5",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "left", // align text to left
              }}
            >
              <ul style={{ color: "black", fontSize: "1.5vw", lineHeight: "1.5" }}>
                <li><strong>Encourage Real-Life Connections:</strong> In a digital-first world, we aim to inspire people to reconnect with friends, family, and communities through games and shared experiences.</li>
                <li><strong>Make Booking Fun:</strong> No one enjoys boring forms or plain interfaces. With Ready to Play, we have combined functionality with humor, infusing the process with unexpected joy and delightful surprises.</li>
                <li><strong>Blend Practicality with Entertainment:</strong> While the app delivers all the tools you need to organize events, it also offers hilarious, brainrot-infused moments to keep you engaged.</li>
                <li><strong>Simplify Event Planning:</strong> Make it easy for users to find and book sports venues or events without unnecessary hassle.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2>The Concept</h2>
            <div
              style={{
                backgroundColor: "#f5f5f5",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "left", // align text to left
              }}
            >
              <p style={{ color: "black", fontSize: "1.5vw", lineHeight: "1.5" }}>
                At its core, Ready to Play is about bringing people together to have fun in real life while embracing the quirks of internet culture. The app reflects the chaos and joy of modern memes and trends while fulfilling a practical purpose—making game night planning effortless and exciting. Whether you are here for the games or just to laugh at the brainrot surprises along the way, Ready to Play is here to create an unforgettable experience. So, what are you waiting for? Dive into Ready to Play and make your next game night legendary!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
