const Form = ({
  setGender,
  setPhone,
  setName,
  createContact,
  getContacts,
  name,
  phone,
  gender,
  edit,
  updateContact,
  editId
}) => {
  const handleAdd = () => {
    createContact();
    getContacts();
    setName("");
    setPhone("");
    setGender("");
  };

  const handleEdit = (e, editId)=>{
    e.preventDefault();
    updateContact(editId);
    
  }

  return (
    <section >
      <div
        className="text-center mb-5 bg-light mx-auto mt-3 py-3"
        style={{ maxWidth: "350px" }}
      >
        ADD CONTACT
      </div>
      <form
        className="container mt-4 bg-light p-3"
        style={{ maxWidth: "350px" }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <select
          id="disabledSelect"
          className="form-select"
          required
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option >Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {edit ? (<button onClick={(e)=>handleEdit(e, editId)} className="btn btn-success w-100 my-4">
          Edit
        </button>) :
        (<button onClick={handleAdd} className="btn btn-success w-100 my-4" disabled={!name || !phone || !gender}>
          Add
        </button>)}
      </form>
    </section>
  );
};

export default Form;
