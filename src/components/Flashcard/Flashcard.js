import React from "react";
import "./Flashcard.css";

export default function Flashcard() {
  return (
    <div>
      <article class="flashcard">
        <input id="flashcard-1" type="checkbox" />
        <label for="flashcard-1">
          <section class="front">Front of the flashcard!</section>

          <section class="back">Back of the flashcard!</section>
        </label>
      </article>
    </div>
  );
}
