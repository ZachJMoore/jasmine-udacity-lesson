describe("Address book", function () {
    it("should be able to add a contact", function () {
        let addressBook = new AddressBook(),
            thisContact = new Contact();

        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact)
    })
})
