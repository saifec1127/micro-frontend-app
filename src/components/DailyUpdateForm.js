import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDailyUpdate } from '../features/dailyUpdates/dailyUpdatesSlice';

const DailyUpdateForm = () => {
  const [formData, setFormData] = useState({
    mood: '',
    energyLevel: '',
    physicalFeelings: '',
    emotionalThoughts: '',
    activities: '',
    highlightsOfTheDay: '',
    concerns: '',
    babysDevelopmentObservations: '',
    additionalNotes: ''
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addDailyUpdate(formData));
    setFormData({
      mood: '',
      energyLevel: '',
      physicalFeelings: '',
      emotionalThoughts: '',
      activities: '',
      highlightsOfTheDay: '',
      concerns: '',
      babysDevelopmentObservations: '',
      additionalNotes: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Mood:</label>
      <input type="text" name="mood" value={formData.mood} onChange={handleChange} required />
      <label>Energy Level:</label>
      <input type="text" name="energyLevel" value={formData.energyLevel} onChange={handleChange} required />
      <label>Physical Feelings:</label>
      <input type="text" name="physicalFeelings" value={formData.physicalFeelings} onChange={handleChange} required />
      <label>Emotional Thoughts:</label>
      <input type="text" name="emotionalThoughts" value={formData.emotionalThoughts} onChange={handleChange} required />
      <label>Activities:</label>
      <input type="text" name="activities" value={formData.activities} onChange={handleChange} required />
      <label>Highlights of the Day:</label>
      <input type="text" name="highlightsOfTheDay" value={formData.highlightsOfTheDay} onChange={handleChange} required />
      <label>Concerns:</label>
      <input type="text" name="concerns" value={formData.concerns} onChange={handleChange} required />
      <label>Baby's Development Observations:</label>
      <input type="text" name="babysDevelopmentObservations" value={formData.babysDevelopmentObservations} onChange={handleChange} required />
      <label>Additional Notes:</label>
      <input type="text" name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DailyUpdateForm;
