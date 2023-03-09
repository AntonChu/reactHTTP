export const Form = ({ submit }) => {

  return (
    <div className="wrapper">
      <form onSubmit={submit} className="form">
        <label>
          <p>New Note</p>
          <textarea className="textarea"></textarea>
        </label>
        <button>OK</button>
      </form>
    </div>
  );
};
