import { createSignal } from "solid-js";
import { markdown_to_html } from "waz";

export default function Markdown() {
  const [text, setText] = createSignal("");
  // console.log(markdown_to_html);
  const handleClick = () => {
    console.log("clicked");
    console.log(markdown_to_html);
  };
  return (
    <main>
      <div class="flex items-center justify-center">
        <textarea
          class="border border-black h-5/6 w-3/4"
          onInput={(event) => setText(event.target.value)}
        />
      </div>
      <button class="border border-dotted" onClick={() => handleClick()}>
        Click to run Rust func
      </button>
      <div class="flex items-center justify-center p-2">{text()}</div>
    </main>
  );
}
