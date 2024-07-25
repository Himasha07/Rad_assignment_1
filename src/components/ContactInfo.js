import React from 'react';
import "./ContactInfoStyles";
import ContactInfoStyles from './ContactInfoStyles';


const ContactInfo = () => {
  const contactDetails = {
    title: "Contact Us",
    address: "123 Travel St, Adventure City, AC 12345",
    phone: "(123) 456-7890",
    email: "support@travelbuddy.com",
  };

  return (
    <ContactInfoStyles 
      title={contactDetails.title} 
      address={contactDetails.address} 
      phone={contactDetails.phone} 
      email={contactDetails.email} 
    />
  );
}

export default ContactInfo;
