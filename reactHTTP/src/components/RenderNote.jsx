export const RenderNote = ({ notes, requestDelete, requestGet }) => {

  return (
    <div className="notes-container">
      {notes.map((el) => {
        return (
          <div className="note" key={el.id}>
            <p className="note-text">
              {el.id}
              {el.text}
            </p>
            <button onClick={() => {
              requestDelete(el.id);
            }} className="note-close">X</button>
          </div>
        );
      })}
    </div>
  );
};
