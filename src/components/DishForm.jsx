import React, { useState } from 'react';


const DishForm = () => {
  const [dish, setDish] = useState({
    name: '',
    preparation_time: '',
    type: '',
    no_of_slices: '',
    diameter: '',
    spiciness_scale: '',
    slices_of_bread: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDish({ ...dish, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
    <form  onSubmit={handleSubmit}>
      <label style={{fontFamily: 'system-ui', fontSize: '20px'}} htmlFor="name">Name:</label>
      <input style={{width: '200px', margin: '15px', padding:'5px', borderRadius: '5px'}}
        type="text"
        id="name"
        name="name"
        value={dish.name}
        onChange={handleInputChange}
        required
      />

      <label style={{width: '200px', margin: '15px', padding:'5px', borderRadius: '5px', fontFamily: 'system-ui', fontSize: '20px'}}
       htmlFor="preparation_time">Preparation Time:</label>
      <input style={{width: '200px', margin: '15px', padding:'5px', borderRadius: '5px'}}
        type="time"
        id="preparation_time"
        name="preparation_time"
        value={dish.preparation_time}
        onChange={handleInputChange}
        required
      />

      <label style={{width: '200px', margin: '15px', padding:'5px', borderRadius: '5px', fontFamily: 'system-ui', fontSize: '20px'}}
       htmlFor="type">Type:</label>
      <select style={{width: '200px', margin: '15px', padding:'5px', borderRadius: '5px'}}
        id="type"
        name="type"
        value={dish.type}
        onChange={handleInputChange}
        required
      >
        <option value="">--Please choose an option--</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </select>

      {dish.type === 'pizza' && (
        <>
          <label style={{width: '200px', margin: '15px', padding:'5px', borderRadius: '5px', fontFamily: 'system-ui', fontSize: '20px'}}
           htmlFor="no_of_slices"># of Slices:</label>
          <input style={{width: '200px', margin: '15px', padding:'5px', borderRadius: '5px'}}
            type="number"
            id="no_of_slices"
            name="no_of_slices"
            value={dish.no_of_slices}
            onChange={handleInputChange}
            required
          />

          <label style={{width: '200px', margin: '15px', padding:'5px', borderRadius: '5px', fontFamily: 'system-ui', fontSize: '20px'}}
           htmlFor="diameter">Diameter:</label>
          <input style={{width: '200px', margin: '15px', padding:'5px', borderRadius: '5px'}}
            type="number"
            step="0.01"
            id="diameter"
            name="diameter"
            value={dish.diameter}
            onChange={handleInputChange}
            required
          />
        </>
      )}

      {dish.type === 'soup' && (
        <>
          <label style={{width: '200px', margin: '15px', padding:'5px', borderRadius: '5px', fontFamily: 'system-ui', fontSize: '20px'}} 
          htmlFor="spiciness_scale">Spiciness Scale (1-10):</label>
          <input style={{width: '200px', margin: '15px', padding:'5px', borderRadius: '5px'}}
            type="number"
            id="spiciness_scale"
            name="spiciness_scale"
            min="1"
            max="10"
            value={dish.spiciness_scale}
            onChange={handleInputChange}
            required
          />
        </>
      )}

      {dish.type === 'sandwich' && (
        <>
          <label style={{width: '200px', margin: '15px', padding:'5px', borderRadius: '5px'}}
           htmlFor="slices_of_bread"># of Slices of Bread:</label>
          <input style={{width: '200px', margin: '15px', padding:'5px', borderRadius: '5px'}}
            type="number"
            id="slices_of_bread"
            name="slices_of_bread"
            value={dish.slices_of_bread}
            onChange={handleInputChange}
            required
          />
        </>
      )}

      <button style={{padding: '10px', borderRadius: '10px', width: '120px', fontFamily: 'system-ui', fontSize: '15px', color: 'white', backgroundColor: 'rgb(57, 168, 131)' }} type="submit">Submit</button>
    </form>
    </div>
  );
};

export default DishForm;


