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
pub fn markdown_to_html(markdown_str: String) -> String {
    markdown::to_html(&markdown_str)
}
