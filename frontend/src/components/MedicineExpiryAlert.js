import React, { useState, useEffect } from 'react';
import './MedicineExpiryAlert.css'; 

const MedicineExpiryAlert = () => {
  const [medicines, setMedicines] = useState([]);
  const [newMedicine, setNewMedicine] = useState({ name: '', expiryDate: '' });

  useEffect(() => {
    checkExpiringMedicines();
    const interval = setInterval(checkExpiringMedicines, 86400000); 
    return () => clearInterval(interval);
  }, [medicines]);

  const addMedicine = (e) => {
    e.preventDefault();
    setMedicines([...medicines, newMedicine]);
    setNewMedicine({ name: '', expiryDate: '' });
  };

  const checkExpiringMedicines = () => {
    const today = new Date();
    const expiringMedicines = medicines.filter(medicine => {
      const expiryDate = new Date(medicine.expiryDate);
      const daysUntilExpiry = (expiryDate - today) / (1000 * 60 * 60 * 24);
      return daysUntilExpiry <= 30 && daysUntilExpiry > 0;
    });

    if (expiringMedicines.length > 0) {
      alert(`The following medicines will expire soon: ${expiringMedicines.map(m => m.name).join(', ')}`);
    }
  };

  return (
    <div className="medicine-expiry-alert">
      <header>
        <h1>FeelWell</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Log In</a>
        </nav>
      </header>

      <main>
        <section className="hero">
            <div className="image-section">
          <img src={`${process.env.PUBLIC_URL}/your-image-file-name.png`} alt="Shopping scene" className="main-image" />
        </div>
          <div className="hero-content">
            <h2>Stay on top of your health</h2>
            <p>Manage your medications and get alerts before they expire.</p>
            
          </div>
        </section>

        <section className="medicine-management">
          <h3>Medicine Expiry Management</h3>
          <form onSubmit={addMedicine}>
            <input
              type="text"
              placeholder="Medicine Name"
              value={newMedicine.name}
              onChange={(e) => setNewMedicine({...newMedicine, name: e.target.value})}
            />
            <input
              type="date"
              value={newMedicine.expiryDate}
              onChange={(e) => setNewMedicine({...newMedicine, expiryDate: e.target.value})}
            />
            <button type="submit">Add Medicine</button>
          </form>
         {/* <ul className="medicine-list">
            {medicines.map((medicine, index) => (
              <li key={index}>
                {medicine.name} - Expires on: {medicine.expiryDate}
              </li>
            ))}
          </ul>
          */}
        </section>
      </main>

      
    </div>
  );
};

export default MedicineExpiryAlert;