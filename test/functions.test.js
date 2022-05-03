// IMPORT MODULES under test here:
import { myFunction, addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, returnAsAnArray, returnAsAString, makeLuckyGreeting, getSecondItem, renderDogDiv } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('add exclamation points', (expect) => {
    const expected = true;

    const actual = addExclamationPoints();

    expect.equal(actual, expected, 'true = true');
});

test('multiply by seven', (expect) => {
    const expected = 7;

    const actual = multiplyBySeven(1);

    expect.equal(actual, expected);
});

test('multiply by 12 then half', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected, '24');
});

test('multiply then divide', (expect) => {
    const expected = 24;

    const actual = divideThenMultiply(24, 2, 2);

    expect.equal(actual, expected, 'it did');
});

test('return array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected, 'you\'re smart');
});

test('return string', (expect) => {
    const expected = '845';

    const actual = returnAsAString(8, 4, 5);

    expect.equal(actual, expected, 'lets gooo');
});

test('lucky number', (expect) => {
    const expected = 'hello, your lucky number for the day is 12';

    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected, 'AYOOO');
});

test('return 2nd index', (expect) => {
    const expected = 'kiwi';

    const actual = getSecondItem(['woo', 'kiwi', 'lol', 'no']);

    expect.equal(actual, expected, 'yup');
});

test('return div', (expect) => {
    const expected = `<div><h1>Benny</h1><p>Benny is 6 years old</p></div>`;

    const actual = renderDogDiv();

    expect.equal(actual.outerHTML, expected, 'LESSSGETITTT');
});