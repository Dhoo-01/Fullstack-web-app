interface Note {
    id: string,
    title: string,
    createdAt: string,
    updatedAt: string,
    tags: string[],
    body: string
}


const notes: Note[] = [];

export default notes
