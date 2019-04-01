import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {Observable} from 'rxjs';
import {ContactProvider} from '../interfaces/contact-provider';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor(private contactProvider: ContactProvider) {
    this.contacts = [];
  }

  searchContact(name: string): Observable<Contact[]> {
    return this.contactProvider.search(name);
  }

  getContacts(): Observable<Contact[]> {
    return this.contactProvider.get();
  }

  getContactsById(id: string): Observable<Contact> {
    return this.contactProvider.getById(id);
  }

  editContact(contact: Contact): Observable<Contact> {
    return this.contactProvider.edit(contact);
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.contactProvider.create(contact);
  }

  deleteContact(contact: Contact): Observable<any> {
    return this.contactProvider.delete(contact);
  }

  /*
  getContacts(): Contact[] {
    return this.contactLocalStorage.getContacts();
  }

  getContactById(id: string): Contact {
    return this.contactLocalStorage.getContactById(id);
  }

  deleteContact(contact: Contact) {
    this.contactLocalStorage.deleteContact(contact);
  }

  createContact(contact: Contact) {
    this.contactLocalStorage.createContact(contact);
  }

  editContact(contact: Contact) {
    return this.contactLocalStorage.editContact(contact);
  }
  */
}
