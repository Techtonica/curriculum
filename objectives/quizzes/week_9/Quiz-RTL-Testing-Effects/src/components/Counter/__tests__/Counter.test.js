import React from 'react';
import Counter from '../Counter';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

// 1️⃣ Count starts with 0 and button is disabled
// - Render the Counter component
// - Find the count and button elements
// - Assert that the count starts at 0
// - Assert that the button is disabled initially

// 2️⃣ Checking the checkbox enables the button
// - Render the Counter component
// - Find the button and checkbox elements
// - Verify the button is initially disabled
// - Click the checkbox to check it
// - Verify the button is now enabled

// 3️⃣ Clicking enabled button increments counter
// - Render the Counter component
// - Find all necessary elements
// - Enable the button by checking the checkbox
// - Click the button once
// - Verify the count is now 1 (singular form)
// - Click the button again
// - Verify the count is now 2 (plural form)

// 4️⃣ Document title updates when checkbox is checked
// - Set up initial document title
// - Render the Counter component
// - Find the button and checkbox elements
// - Check the checkbox
// - Verify title shows initial count of 0
// - Click the button to increment counter
// - Verify title updates to show count of 1
// - Uncheck the checkbox