import React, { useState } from "react";
import BlockNoteEditor from '../components/BlockNoteEditor';

export default function QuestCreatorPage() {    
    
    const updateTask = (id, field, value) => {
    }

    const handleSubmit = (e) => {
    }

    return (
        <div className="">
            <h1 className="">Створення квесту</h1>             
            <p className=""></p>

            <form className="" onSubmit={handleSubmit}>

                <div className="">
                    <BlockNoteEditor 
                        key = {1}
                        initialContent = {""}
                        onChange = {(jsonContent) => updateTask(1, 'content', jsonContent)}
                    />
                </div>
            </form>
        </div>
       
    );
}