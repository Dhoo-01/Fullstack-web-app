import { Hono } from "hono";
import createNote from "./handlers/createNote.ts";
//jangan lupa nanti tambahin import dari masing² handler

const notes = new Hono();

notes.post("/", createNote);

export default notes;
