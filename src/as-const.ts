export {}

let name: string = 'tonouchi';
name = 'noboru';

let nickname = 'tono' as const;
//nickname = 'tonosama'; // error

let profile = {
  name: 'tono',
  height: 167
} as const;

//profile.name = 'tonosama'; // error
//profile.height = 167.1; // error

