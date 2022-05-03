// IMPORT MODULES under test here:
import { myFunction, addExclamationPoints } from '../functions.js';

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
