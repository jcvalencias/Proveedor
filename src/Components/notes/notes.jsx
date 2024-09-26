import { useState, useEffect } from "react";
import api from "../../api";

function Notes() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getNotes();
    }, [])

    const getNotes = () => {
        api
        .get("/notes/")
        .then((res) => res.data)
        .then((data) => {setNotes(data);
            console.log(notes);
        })
        .catch((err) => alert(err));
    
    }

    const deleteNote = (id) => {
        api.delete(`/notes/delete/{$id}/`).then((res) => {
            if (res.status == 204) alert("Note deleted!")
            else alert("Failed to delete note.")
        }).catch((error) => alert(error))
        getNotes()
    }

    const createNote = (e) => {
        e.preventDefault()
        api.post("/notes/", {content, title}).then((res) => {
            console.log(res.status)
            if (res.status === 201) alert("Note created!");
            else alert("Failed to make note.");
        })
        .catch((err) => alert(err));
        getNotes();
    }
    return <div>
        <div>
            <h2>Notes</h2>
        </div>
        <h2>Create a Note</h2>
        <form onSubmit={createNote}>
            <label htmlFor="title">Title:</label>
            <br />
            <input
                type="text"
                id="title"
                name="title"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label htmlFor="content">Content:</label>
            <br />
            <textarea
                type="text"
                id="content"
                name="content"
                required
                onChange={(e) => setContent(e.target.value)}
                value={content}
            />
            <br />
            <input type="submit" value="Submit"></input>
        </form>
    </div>;
}

export default Notes;