import { JSX, createSignal } from "solid-js";
import { markdown_to_html } from "waz";

export default function Home() {
  return (
    <main>
      <section class="mx-auto p-4 text-center text-gray-700">
        <h1 class="max-6-xs my-8 text-4xl font-thin uppercase">
          Preview Markdown to Html
        </h1>
        <p>Simple rust function.</p>
        <p>Doing this to learn Rust + Wasm.</p>
      </section>
      <section>
        <Markdown />
      </section>
    </main>
  );
}

function Markdown() {
  const [text, setText] = createSignal<string>("");

  // blazingly fast, might as well retrigger on every keystroke :D
  const handleChange = () => {
    const test_str: string = markdown_to_html(text());
    // console.log(test_str);
    setElem(strToHTML(test_str));
  };

  const [elem, setElem] = createSignal<JSX.Element>(<></>);

  // turn template html string to HTML
  const strToHTML = (str: string) => {
    if (str === null || str === "") {
      return <></>;
    }
    return <div innerHTML={str} class="m-2 text-wrap" />;
  };
  return (
    <main>
      <div class="m-1 grid h-full grid-cols-2 pb-5">
        <textarea
          class="h-full max-h-full min-h-64 w-full rounded-md border border-black caret-red-950"
          onInput={(event) => {
            setText(event.target.value);
            handleChange();
          }}
          placeholder="Enter your markdown here."
        />
        <div class="h-full justify-start ">{elem()}</div>
      </div>
      <div>
        <a
          class="flex items-center justify-center"
          href="https://github.com/cruzluna/waz"
          target="_blank"
        >
          GitHub Repo Link
        </a>
      </div>
    </main>
  );
}
