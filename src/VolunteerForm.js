import React, { useState } from 'react';

function VolunteerForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for volunteering!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h3 className="text-success text-center mb-4">Become a Volunteer</h3>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Your Name" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Your Email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows="4" placeholder="Why do you want to volunteer?" name="message" value={form.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-success w-100">Submit</button>
      </form>
    </div>
  );
}

export default VolunteerForm;
