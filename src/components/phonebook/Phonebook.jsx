import { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import ContactForm from '../contactForm';
import Filter from '../filter';
import ContactList from '../contactList';
// import { initialState } from "./initialState";
// import * as actions from '../../redux/actions'

import styles from './Phonebook.module.css';

class Phonebook extends Component {


  // componentDidMount() {

  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts || []});
  //   }
  // }

  // componentDidUpdate(prevState) {
    
  //   const newContacts = this.props.contacts;
  //   const prevContacts = prevState.contacts;

  //   if (newContacts !== prevContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(newContacts));
  //   }
  // }
  
  // addContact = (name, number) => {
  //   const newContact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };
  //   this.setState(prevState => {
  //     return {
  //       contacts: [...prevState.contacts, newContact],
  //     }
  //   });
  // }

  // handleChangeFilter = filter => {
  //   this.setState({filter});
  // }



  handleRemove = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({id}) => id !== contactId)
      }
    })
  }

  // deleteContact = (idx)=> {
  //       this.setState(prevState => {
  //           const {contacts} = prevState;
  //           const newContacts = [...contacts];
  //           newContacts.splice(idx, 1);

  //           return {
  //               contacts: newContacts
  //           }
  //       })
  //   }

  render() {
    // const {contacts, filter} = this.state;
    return(
      <>
            <div className={styles.container}>
                <section title="Phonebook" className={styles.section}>
            <h1>Phonebook</h1>
            <ContactForm />
          </section>
          <section title="Contacts" className={styles.section}>
            <h2>Contacts</h2>
            <Filter />
            <ContactList /> 
          </section>
        </div>
      </>
    )
  }
}

// export default Phonebook;

const mapStateToProps = state => ({
 contacts: state.phonebook.contacts
});

// const mapDispatchToProps = dispatch => ({
//   // addNote: text => dispatch(addNote(text)),
// });

export default connect(mapStateToProps, null)(Phonebook)