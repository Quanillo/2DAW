import path from 'path';
import fs from 'fs';

const input = fs
	.readFileSync(path.join('.', 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
	.map((num) => parseInt(num, 10));

export default input;
