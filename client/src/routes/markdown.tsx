import { createSignal } from "solid-js";

export default function Markdown() {
  const [text, setText] = createSignal("");
  return (
    <main>
      <div class="flex items-center justify-center">
        <textarea
          class="border border-black h-5/6 w-3/4"
          onChange={(event) => setText(event.target.value)}
        />
      </div>

      <div>{text()}</div>
    </main>
  );
}
