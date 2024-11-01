import React, { useState } from 'react';

function AdminDashboard({ addNGO }) {
  const [newNGO, setNewNGO] = useState({
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
      const contactField = name.split('.')[1];
      setNewNGO({
        ...newNGO,
        contact: {
          ...newNGO.contact,
          [contactField]: value
        }
      });
    } else {
      setNewNGO({
        ...newNGO,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNGO(newNGO);
    setNewNGO({
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
    alert('New NGO added successfully!');
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={newNGO.id} onChange={handleChange} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={newNGO.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="image" value={newNGO.image} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={newNGO.description} onChange={handleChange} required></textarea>
        </div>
        <div>
          <label>Foundation Date:</label>
          <input type="text" name="foundationDate" value={newNGO.foundationDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact Email:</label>
          <input type="email" name="contact.email" value={newNGO.contact.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact Phone:</label>
          <input type="text" name="contact.phone" value={newNGO.contact.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Website Link:</label>
          <input type="text" name="link" value={newNGO.link} onChange={handleChange} required />
        </div>
        <button type="submit">Add NGO</button>
      </form>
    </div>
  );
}

export default AdminDashboard;
