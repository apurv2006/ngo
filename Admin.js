import React, { useState } from 'react';

function Admin() {
  const [ngo, setNgo] = useState({
    id: '',
    name: '',
    image: '',
    description: '',
    foundationDate: '',
    contact: {
      email: '',
      phone: ''
    },
    link: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('contact')) {
      setNgo({
        ...ngo,
        contact: {
          ...ngo.contact,
          [name.split('.')[1]]: value
        }
      });
    } else {
      setNgo({
        ...ngo,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save new NGO
    console.log('New NGO added:', ngo);
    alert(`New NGO "${ngo.name}" added successfully!`);
    setNgo({
      id: '',
      name: '',
      image: '',
      description: '',
      foundationDate: '',
      contact: {
        email: '',
        phone: ''
      },
      link: ''
    });
  };

  return (
    <div className="admin">
      <h2>Add New NGO</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={ngo.id} onChange={handleChange} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={ngo.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="image" value={ngo.image} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={ngo.description} onChange={handleChange} required></textarea>
        </div>
        <div>
          <label>Foundation Date:</label>
          <input type="text" name="foundationDate" value={ngo.foundationDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact Email:</label>
          <input type="email" name="contact.email" value={ngo.contact.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact Phone:</label>
          <input type="text" name="contact.phone" value={ngo.contact.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Website URL:</label>
          <input type="text" name="link" value={ngo.link} onChange={handleChange} required />
        </div>
        <button type="submit">Add NGO</button>
      </form>
    </div>
  );
}

export default Admin;
