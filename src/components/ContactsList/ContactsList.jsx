import React from 'react';
import PropTypes from 'prop-types';
import ContactsListItem from '../ContactsListItem/ContactsListItem';
import s from '../ContactsList/ContactsList.module.css';

const ContactsList = ({ contacts, onDeletContact }) => (
  <ul className={s.contactList}>
    {contacts.map(({ id, name, number }) => (
      <ContactsListItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeletContact={onDeletContact}
      />
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeletContact: PropTypes.func.isRequired,
};

export default ContactsList;
