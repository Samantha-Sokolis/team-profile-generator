const Engineer = require('../lib/engineer');
const engineer = new Engineer('Samantha', '100802', 'samanthasokolis1@gmail.com','sam@github.com');


test('test will see if the Engineer object will ouput the constructor values', () => {
    expect(engineer.name).toBe('Samantha');
    expect(engineer.id).toBe('100802');
    expect(engineer.email).toBe('samanthasokolis1@gmail.com');
    expect(engineer.github).toBe('sam@github.com');
});

test('test if the name comes through via the getName() method', () => {
    expect(engineer.name).toBe('Samantha');
});

test('test if the id comes through via the getID() method', () => {
    expect(engineer.id).toBe('100802');
});

test('test if the email comes through via the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

// additional info tested for manager - gitHub username
test('test if the office number comes through via the getGithub() method', () => {
    expect(engineer.github).toBe('sam@github.com');
});