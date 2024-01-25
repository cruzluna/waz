import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema, DOMParser } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
import { exampleSetup } from "prosemirror-example-setup";
import { createEffect } from "solid-js";

export default function Test() {
  createEffect(() => {
    // Mix the nodes from prosemirror-schema-list into the basic schema to
    // create a schema with list support.
    const mySchema = new Schema({
      nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
      marks: schema.spec.marks,
    });

    (window as any).view = new EditorView(document.querySelector("#editor"), {
      state: EditorState.create({
        doc: DOMParser.fromSchema(mySchema).parse(
          (document as any).querySelector("#content"),
        ),
        plugins: exampleSetup({ schema: mySchema }),
      }),
    });
  });
  return (
    <main>
      <div id="editor" />
      <div id="content" />
    </main>
  );
}
