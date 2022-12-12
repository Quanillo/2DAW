import path from 'path';
import fs from 'fs';

const input = fs
	.readFileSync(path.join('.', 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n');

export default input;
