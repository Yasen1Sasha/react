import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/mantine/style.css";

export default function BlockNoteEditor( {initialContent, onChange}){
    const editor = useCreateBlockNote({
        initialContent: 
            initialContent ? JSON.parse(initialContent): undefined,
    });

    return (
        <BlockNoteView 
            editor = {editor}
            onChange = {()=>{
                onChange(JSON.stringify(editor.document));
            }}
            theme = "light"
        />
    );
}
