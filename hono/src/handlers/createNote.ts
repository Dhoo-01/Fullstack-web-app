import type { Context } from "hono";
import{ nanoid } from "nanoid";
import notes from "../notes.ts";

const createNote = async (c: Context) => {
    //body request
    try {
        const data = await c.req.json();

        const { title, tags, body } = data;
        const id: string = nanoid(16);
        const createdAt: string = new Date().toISOString();
        const updatedAt: string = createdAt;

        const newNote = { title, tags, body, id, createdAt, updatedAt };

        notes.push(newNote); 

       // const isSuccess: boolean = notes.filter((note) => note.id === id).length > 0;
        return c.json({
            status: 'Success',
            message: 'note created',
            data: notes
        }, 201);

    } catch (err) {
        console.error(`error in createNote: ${err}`);

        return c.json({
            status: 'Fail',
            message: 'Internal server error',
            error: (err as Error).message
        }, 500);
    }
};

export default createNote
