const Manager = require('../lib/manager');
const manager = new Manager('Samantha', '100802', 'samanthasokolis1@gmail.com', '369');


test('test will see if the Manager object will ouput the constructor values', () => {
    expect(manager.name).toBe('Samantha');
    expect(manager.id).toBe('100802');
    expect(manager.email).toBe('samanthasokolis1@gmail.com');
    expect(manager.officeNumber).toBe('369');
});

test('test if the name comes through via the getName() method', () => {
    expect(manager.name).toBe('Samantha');
});

test('test if the id comes through via the getID() method', () => {
    expect(manager.id).toBe('100802');
});

test('test if the email comes through via the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});

// additional info tested for manager - office number
test('test if the office number comes through via the getOfficeNumber() method', () => {
    expect(manager.officeNumber).toBe('369');
});