using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using ContactsWebApi.Repositories;
using ContactsWebApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace ContactsWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly IContactRepository _contactRepository;
        private readonly IContactService _contactService;

        public ContactsController(IContactRepository contactRepository, IContactService contactService)
        {
            _contactRepository = contactRepository;
            _contactService = contactService;
        }
        // GET api/contacts
        [HttpGet]
        public ActionResult <List<Contact>> GetContacts()
        {
            var contacts = _contactService.Read();
            return new JsonResult(contacts);
        }

        // GET api/contacts/5
        [HttpGet("{id}")]
        public ActionResult<Contact> Get(int id)
        {
            var contact = _contactService.Read(id);
            return new JsonResult(contact);
        }

        // POST api/contacts
        [HttpPost]
        public ActionResult<Contact> Post(Contact contact)
        {
            var newContact = _contactService.Create(contact);
            return new JsonResult(newContact);
        }

        // PUT api/contacts
        [HttpPut("{id}")]
        public ActionResult<Contact> Put(int id, Contact contact)
        {
            var updateContact = _contactService.Update(id, contact);
            return new JsonResult(updateContact);
        }

        // DELETE api/contacts
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _contactService.Delete(id);
            return new OkResult();
        }
    }
}