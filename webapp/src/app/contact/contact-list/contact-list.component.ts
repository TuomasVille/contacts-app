import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../service/contact.service';
import {Router} from '@angular/router';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {DialogService} from '../service/dialog.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactListComponent implements OnInit {

  value: string;
  contacts: Contact[];
  p: any;

  constructor(private contactService: ContactService, private dialogService: DialogService,
              private router: Router, private toolbar: ToolbarService) {
    this.contacts = [];
  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions('menu', 'Contacts Application'));
    // this.contacts = this.contactService.getContacts();
    this.loadContacts();
    this.contactService.getContacts().subscribe(result => {
    }, err => {
      this.dialogService.showError();
    });
  }

  onContactDeleted(contact: Contact) {
    this.loadContacts();
  }

  onContactCreate(): void {
    console.log('Create clicked!');
    this.router.navigate(['/contacts/new']);
  }

  searchFilter(name: string) {
    this.value = name;
    this.contactService.searchContact(name).subscribe(result => {
      return this.contacts = result;
    });
    console.log(this.value);
  }

  loadContacts() {
    this.contactService.getContacts().subscribe(result => {
      this.contacts = result;
    });
  }
}
