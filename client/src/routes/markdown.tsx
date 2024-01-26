import { createSignal } from "solid-js";

export default function Markdown() {
  const [text, setText] = createSignal("");
  return (
    <main>
      <div class="flex items-center justify-center">
        <textarea
          class="border border-black h-5/6 w-3/4"
          onInput={(event) => setText(event.target.value)}
        />
      </div>
      <div class="flex items-center justify-center p-2">{text()}</div>
    </main>
  );
}
