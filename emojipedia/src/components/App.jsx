import React from "react";
import Title from "../components/title";
import Frame from "../components/frame";
import emojipedia from "../emojipedia";

// {
//     id: 1,
//     emoji: "😀",
//     name: "Grinning Face",
//     meaning:
//       "The happy smiling face is one of the most common emojis and universally applicable: you just want to say hello, express joy or excitement about something or brighten up a short text.",
//   },

// function createEntery(emojiTerm) {}

function App() {
  return (
    <div>
      <Title />
      <div>
        {emojipedia.map((emojiTerm) => {
          return (
            <Frame
              key={emojiTerm.id}
              emoji={emojiTerm.emoji}
              name={emojiTerm.name}
              meaning={emojiTerm.meaning}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
