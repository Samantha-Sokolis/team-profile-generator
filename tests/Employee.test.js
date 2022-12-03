// dependencies
const Employee = require('../lib/employee');
const employee = new Employee('Samantha', '100802', 'samanthasokolis1@gmail.com');

test('test will see if the Employee object will ouput the constructor values', () => {
    expect(employee.name).toBe('Samantha');
    expect(employee.id).toBe('100802');
    expect(employee.email).toBe('samanthasokolis1@gmail.com');
    expect(employee.getRole()).toBe('Employee');
});

test('test if the name comes through via the getName() method', () => {
    expect(employee.name).toBe('Samantha');
});

test('test if the id comes through via the getID() method', () => {
    expect(employee.id).toBe('100802');
});

test('test if the email comes through via the getEmail() method', () => {
    expect(employee.email).toBe('samanthasokolis1@gmail.com');
});

test('test if the role comes through via the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});