import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import s from './ContactsForm.module.css';

class ContactsForm extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ id: v4(), [name]: value });
  };

  findByName = contactName => {
    return this.props.contacts.some(({ name }) => name === contactName);
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name } = this.state;

    if (this.findByName(name)) {
      alert(`${name} is already in contacts!`);
      return;
    }

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.formLabel}>
          Name
          <input
            className={s.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.formLabel}>
          Number
          <input
            className={s.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" className={s.buttonSubmit}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactsForm;
