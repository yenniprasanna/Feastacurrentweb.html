document.getElementById('find-slots').addEventListener('click', function () {
    const deliveryDate = document.getElementById('delivery-date').value;
  
    if (!deliveryDate) {
      alert('Please select a delivery date.');
      return;
    }
  
    // Simulated API response with available time slots
    const timeSlots = getAvailableTimeSlots(deliveryDate);
  
    const slotsContainer = document.getElementById('time-slots');
    slotsContainer.innerHTML = '';
  
    if (timeSlots.length === 0) {
      slotsContainer.innerHTML = '<p>No available time slots for the selected date.</p>';
      return;
    }
  
    timeSlots.forEach(slot => {
      const slotDiv = document.createElement('div');
      slotDiv.classList.add('slot');
      slotDiv.textContent = slot;
      slotsContainer.appendChild(slotDiv);
    });
  });
  
  function getAvailableTimeSlots(date) {
    // Mocking available time slots based on the selected date
    const slots = {
      '2024-11-18': ['10:00 AM - 12:00 PM', '1:00 PM - 3:00 PM', '5:00 PM - 7:00 PM'],
      '2024-11-19': ['9:00 AM - 11:00 AM', '2:00 PM - 4:00 PM'],
    };
    return slots[date] || [];
  }
  