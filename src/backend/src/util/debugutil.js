/*
 * Copyright (C) 2024 Puter Technologies Inc.
 * 
 * This file is part of Puter.
 * 
 * Puter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const LETTERS = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N'];

let curr_letter_ = 0;

const ind = () => {
    let v = curr_letter_;
    curr_letter_++;
    curr_letter_ = curr_letter_ % LETTERS.length;
    return v;
};

module.exports = {
    get_a_letter: () => LETTERS[ind()],
    cylog: (...a) => {
        console.log(`\x1B[36;1m`, ...a);
    }
};
