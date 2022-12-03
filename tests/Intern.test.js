const Intern = require('../lib/intern');
const intern = new Intern('Bob','100803','bobross@gmail.com','Melbourne University');


test('test will see if the Intern object will ouput the constructor values', () => {
    expect(intern.name).toBe('Bob');
    expect(intern.id).toBe('100803');
    expect(intern.email).toBe('bobross@gmail.com');
    expect(intern.school).toBe('Melbourne University');
});

test('test if the name comes through via the getName() method', () => {
    expect(intern.name).toBe('Bob');
});

test('test if the id comes through via the getID() method', () => {
    expect(intern.id).toBe('100803');
});

test('test if the email comes through via the getEmail() method', () => {
    expect(intern.email).toBe('bobross@gmail.com');
});

test('test if the role comes through via the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});

// additional info tested for intern - school
test('test if the school comes through via the getSchool() method', () => {
    expect(intern.school).toBe('Melbourne University');
});