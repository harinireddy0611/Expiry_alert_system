import React, { useState } from 'react';
import "./Medform.css";

function MedicationForm() {
  const [medication, setMedication] = useState({
    name: '',
    dosage: '',
    manufacturer: '',
    manufactureDate: '',
    expiryDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedication({
      ...medication,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Medication Details:', medication);
    // Handle form submission, e.g., send data to a server
  };

  return (
    <div style={styles.container}>
      <h2>Medication Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name">Medication Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={medication.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="dosage">Dosage (in mgs):</label>
          <input
            type="number"
            id="dosage"
            name="dosage"
            value={medication.dosage}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="manufacturer">Manufacturer:</label>
          <input
            type="text"
            id="manufacturer"
            name="manufacturer"
            value={medication.manufacturer}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="manufactureDate">Manufacture Date:</label>
          <input
            type="date"
            id="manufactureDate"
            name="manufactureDate"
            value={medication.manufactureDate}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="date"
            id="expiryDate"
            name="expiryDate"
            value={medication.expiryDate}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '350px',
    margin: 'auto',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 10 40px rgba(0, 0, 0, 0.1)'
    
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  formGroup: {
    marginBottom: '15px'
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    width:'220px',
    padding: '10px 15px',
    backgroundColor: 'gold',
    color: 'black',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }
};

export default MedicationForm;
