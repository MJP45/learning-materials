
/*

The data file contains information for 7 people

Create functions that return the following

-- Whether they are vegetarian :boolean
-- Whether their name is too long to write on a name tag :boolean
-- Life expectancy :number
-- years before they die :number
-- Whether they can ride on a rollercoaster :boolean
-- Should already be dead :boolean
-- Can buy beer in the UK :boolean
-- Show a friendly summary of the person :string

Life expectancy of a Vegetarian: 90
Life expectancy of a Meat Eater: 95
Minimum height to ride on a rollercoaster: 1.2m
Name tag length ( Up to 6 characters)

Example friendly summaries:
- Steven is a vegetarian, is 100cm tall and has 12 years to live
- Fred likes meat, is 153cm tall and has 7 years to live

Run your tests by running jest. They will all break at first.

*/

import {  } from "./ts4-data";

/**
 * Whether the input person is a vegetarian
 * @param {object} person object to check
 * @return {boolean} true if is a vegatarian.
 */
export const isVegetarian = () => true;

/**
 * Checks to see if their name can fit on a name card (6 characters max)
 * @param {object} person object to check
 * @return {boolean} true if their name can fit on a card
 */
export const canFitOnANameCard = () => true;

/**
 * Life expectancy, 95 for meat eaters, 90 for vegetarian
 * @param {object} person object to check
 * @return {number} life expectancy of individual
 */
export const getLifeExpectancy = () => true;

/**
 * years before they die
 * @param {object} person object to check
 * @return {number} years left of the persons life
 */
export const yearsRemaining = () => true;

/**
 * Should already be dead
 * @param {object} person object to check
 * @return {boolean} true if the person is living beyond their predicted age
 */
export const canRideOnARollercoaster = () => true;

/**
 * Can buy beer in the UK
 * @param {object} person object to check
 * @return {boolean} true if they are old enough to buy beer
 */
export const canBuyBeer = () => true;

/**
 * Show a friendly summary of the person :string
 * @param {object} person object to check
 * @return {string} friendly output such as: Bob is a vegetarian, is 110cm tall and has 78 years to live
 */
export const getSummary = () => true;
