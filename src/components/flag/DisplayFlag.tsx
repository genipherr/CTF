import * as React from "react";
import { useEffect, useState } from "react";

export default function DisplayFlag(props: { flag: string }) {
  const flag = props.flag;
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set a 5 second interval for each character.
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= flag.length) {
        clearInterval(interval);
      } else {
        setCount((count) => count + 1);
        counter++;
      }
    }, 500);

    // Clear interval.
    return () => clearInterval(interval);
  }, [flag, count]);

  // Assemble the list!
  let list = [...flag].slice(0, count).map((character, index) => {
    return <li key={index}>{character}</li>;
  });

  return <ul>{list}</ul>;
}
