import path from 'path';
import fs from 'fs';

const data = fs
	.readFileSync(path.join('.', 'datos2.json'))
	.toString()
	

  const input = JSON.parse(data)

	

export default input;
