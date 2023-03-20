import { h } from "preact";
import { useState } from "preact/hooks";

export default function Greeting({ messages }: { messages: any }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div>
      <h3 className="line-through">{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  );
}
