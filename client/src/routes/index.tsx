import { createSignal } from "solid-js";
import { gfm_markdown_to_html } from "waz";

export default function Home() {
  return (
    <main class="mx-auto p-4 text-center text-gray-700">
      <h1 class="max-6-xs my-16 text-6xl font-thin uppercase text-sky-700">
        Test
      </h1>
      <p class="mt-8">
        Visit{" "}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <span>Home</span>
      </p>
      <Markdown />
    </main>
  );
}

var test_str: string = "";

function Markdown() {
  const [text, setText] = createSignal("");
  const handleClick = () => {
    test_str = gfm_markdown_to_html(text());
    setElem(strToHTML(test_str));
  };

  const [elem, setElem] = createSignal(<></>);

  // turn template html string to HTML
  const strToHTML = (str: string) => {
    console.log("CALLED HERE: ", str);
    if (str === null || str === "") {
      return <></>;
    }
    console.log(<div innerHTML={str} class="list-disc" />);
    // inject styling
    var elems = <div innerHTML={str} class="list-disc" />;
    var cnt: number = 0;
    //@ts-ignore
    for (var elem in elems) {
      console.log(`idx: ${cnt}  ELEM:${elem}`);
      cnt++;
    }
    console.log("ELEMS: ", elems);
    console.log(typeof elems);
    return elems;
    // return <div innerHTML={str} class="list-disc" />;
  };

  return (
    <main>
      <div class="columns-2 flex-col">
        <textarea
          class="w-full border border-black"
          onInput={(event) => setText(event.target.value)}
        />
        <div>{elem()}</div>
      </div>
      <section id="button-area" class="flex justify-center">
        <button class="border border-black" onClick={() => handleClick()}>
          Click to run Rust func
        </button>
        <ul>
          <li class="list-disc">test</li>
          <li>test</li>
        </ul>
      </section>
    </main>
  );
}
