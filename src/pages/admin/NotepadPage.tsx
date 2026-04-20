import React, { useState } from 'react';
import { FileText, Plus, Search, Trash2, Edit, X } from 'lucide-react';

type Note = {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
};

export default function NotepadPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [titleInput, setTitleInput] = useState('');
  const [contentInput, setContentInput] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const startCreating = () => {
    setIsCreating(true);
    setActiveNote(null);
    setTitleInput('');
    setContentInput('');
  };

  const cancelCreating = () => {
    setIsCreating(false);
    setTitleInput('');
    setContentInput('');
  };

  const handleSaveNote = () => {
    if (!titleInput.trim()) return;

    const timestamp = new Date().toLocaleString('en-GB', { 
      day: 'numeric', month: 'short', year: 'numeric', 
      hour: '2-digit', minute: '2-digit' 
    });

    if (activeNote) {
      // Update
      setNotes(notes.map(n => n.id === activeNote.id ? { 
        ...n, title: titleInput, content: contentInput, updatedAt: timestamp 
      } : n));
    } else {
      // Create new
      const newNote: Note = {
        id: Date.now().toString(),
        title: titleInput,
        content: contentInput,
        updatedAt: timestamp
      };
      setNotes([newNote, ...notes]);
    }

    setIsCreating(false);
    setActiveNote(null);
    setTitleInput('');
    setContentInput('');

    // Show toast
    setToastMessage("Note saved");
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setNotes(notes.filter(n => n.id !== id));
    if (activeNote?.id === id) {
      setActiveNote(null);
      setIsCreating(false);
    }
  };

  const openNote = (note: Note) => {
    setActiveNote(note);
    setTitleInput(note.title);
    setContentInput(note.content);
    setIsCreating(true);
  };

  const filteredNotes = notes.filter(n => 
    n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    n.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-[1200px] mx-auto h-[calc(100vh-100px)] flex flex-col relative font-serif">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 shrink-0">
        <h1 className="text-2xl md:text-[28px] font-bold text-brand-dark uppercase tracking-[1px] flex items-center gap-3">
          <FileText size={28} className="text-brand-main" /> Notepad
        </h1>
        <button 
          onClick={startCreating}
          className="bg-brand-main text-brand-light px-6 py-2.5 rounded-[4px] font-bold uppercase text-[13px] tracking-wide hover:bg-brand-dark transition-colors flex items-center gap-2"
        >
          <Plus size={18} /> New Note
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 flex-1 min-h-0">
        
        {/* Left Column: Note List */}
        <div className="w-full md:w-1/3 flex flex-col bg-brand-content/50 border border-brand-main rounded-[4px] overflow-hidden">
          <div className="p-4 border-b border-brand-main/50 relative shrink-0">
            <Search className="absolute left-7 top-1/2 -translate-y-1/2 text-brand-main/60" size={16} />
            <input 
              type="text" 
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark text-[14px]"
            />
          </div>

          <div className="flex-1 overflow-y-auto">
            {notes.length === 0 ? (
              <div className="p-8 text-center text-[13px] text-brand-main italic">
                No notes yet. Click "New Note" to start.
              </div>
            ) : filteredNotes.length === 0 ? (
              <div className="p-8 text-center text-[13px] text-brand-main italic">
                No matching notes found.
              </div>
            ) : (
              <div className="divide-y divide-brand-main/30">
                {filteredNotes.map((note) => (
                  <div 
                    key={note.id}
                    onClick={() => openNote(note)}
                    className={`p-4 cursor-pointer transition-colors group relative ${activeNote?.id === note.id ? 'bg-brand-main/10 border-l-4 border-brand-main' : 'hover:bg-brand-main/5 border-l-4 border-transparent'}`}
                  >
                    <div className="flex justify-between items-start gap-2">
                       <h3 className="font-bold text-brand-dark text-[15px] truncate font-sans">{note.title}</h3>
                       <button 
                         onClick={(e) => handleDelete(note.id, e)}
                         className="text-red-700/60 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-all"
                       >
                         <Trash2 size={16} />
                       </button>
                    </div>
                    <p className="text-[13px] text-brand-dark/70 line-clamp-1 mt-1">{note.content || 'No additional content'}</p>
                    <p className="text-[11px] text-brand-main mt-2">Updated: {note.updatedAt}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Editor / Fallback */}
        <div className="w-full md:w-2/3 flex flex-col bg-brand-content/50 border border-brand-main rounded-[4px] overflow-hidden relative">
          {!isCreating && !activeNote ? (
             <div className="flex-1 flex flex-col items-center justify-center text-brand-main p-8 text-center opacity-60">
               <Edit size={48} className="mb-4" />
               <p className="text-[15px] italic">Select a note to edit, or create a new one.</p>
             </div>
          ) : (
             <div className="flex-1 flex flex-col">
               <div className="flex justify-between items-center p-4 border-b border-brand-main/50 bg-brand-main/5 shrink-0">
                 <span className="text-[13px] text-brand-dark font-bold uppercase tracking-wide">
                   {activeNote ? 'Edit Note' : 'New Note'}
                 </span>
                 <button onClick={cancelCreating} className="text-brand-main hover:text-brand-dark flex items-center gap-1 text-[13px] uppercase font-bold">
                   <X size={16} /> Close
                 </button>
               </div>
               
               <div className="p-4 flex-1 flex flex-col gap-4 overflow-y-auto">
                 <input 
                   type="text" 
                   value={titleInput}
                   onChange={(e) => setTitleInput(e.target.value)}
                   placeholder="Note Title..."
                   className="w-full py-3 px-4 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark text-[16px] font-bold font-sans"
                 />
                 <textarea 
                   value={contentInput}
                   onChange={(e) => setContentInput(e.target.value)}
                   placeholder="Write your note here..."
                   className="w-full flex-1 py-3 px-4 rounded-[2px] border border-brand-main bg-brand-light focus:outline-none focus:ring-1 focus:ring-brand-main text-brand-dark text-[14px] resize-none"
                 />
               </div>

               <div className="p-4 border-t border-brand-main/50 bg-brand-main/5 shrink-0 flex justify-end gap-3">
                 <button 
                   onClick={cancelCreating}
                   className="px-6 py-2.5 rounded-[4px] bg-transparent border border-brand-main text-brand-main hover:bg-brand-light font-bold uppercase text-[12px] tracking-wide transition-colors"
                 >
                   Cancel
                 </button>
                 <button 
                   onClick={handleSaveNote}
                   disabled={!titleInput.trim()}
                   className="px-6 py-2.5 rounded-[4px] bg-brand-dark text-brand-light hover:bg-brand-main disabled:opacity-50 disabled:cursor-not-allowed font-bold uppercase text-[12px] tracking-wide transition-colors flex items-center gap-2"
                 >
                   <FileText size={16} /> Save Note
                 </button>
               </div>
             </div>
          )}

        </div>
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="absolute bottom-6 right-6 bg-brand-content border border-brand-main text-brand-dark font-bold text-[14px] px-6 py-4 rounded-[4px] shadow-lg animate-in fade-in slide-in-from-bottom-4">
          {toastMessage}
        </div>
      )}

    </div>
  );
}
