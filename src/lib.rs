mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, waz!");
}

#[wasm_bindgen]
pub fn markdown_to_html() -> String {
    println!("Printing: {}", markdown::to_html("## Hello, *world*!"));
    markdown::to_html("## Hello, *world*!")
}
