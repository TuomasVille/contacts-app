import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../service/contact.service';
import {Contact} from '../contact';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService,
              private toolbar: ToolbarService, private snackBar: MatSnackBar) {
    this.contact = new Contact();
  }

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId != null) {
      /*
      this.contact = this.contactService.getContactById(contactId);
      */
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Edit Contact'));
      this.contactService.getContactsById(contactId).subscribe(result => {
        this.contact = result;
      }, error => {
        console.error(error);
        this.router.navigate(['/contacts']);
      });
    } else {
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Create Contact'));
    }
  }

  onSave() {
    console.log('ContactDetailComponent: onSave');
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId != null) {
      this.contactService.editContact(this.contact).subscribe(result => {
        this.contact = result;
        this.router.navigate(['/contacts']);
      });
      this.snackBar.open('Contact edited!', '', {
        duration: 3000
      });
    } else {
      this.contactService.createContact(this.contact).subscribe(result => {
        this.contact = result;
        this.router.navigate(['/contacts']);
      this.snackBar.open('Contact created!', '', {
        duration: 3000
      });
    });
  }
}}

