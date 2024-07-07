const lfLog = s => console.log('%cLF%c ' + s, 'background: #3498ff; color: #ffffff; padding: 2px; border-radius: 3px', '');
const lfError = (s, e) => console.log('%cLF%c Error: ' + s, 'background: #E44D2E; color: #ffffff; padding: 2px; border-radius: 3px', '', e ?? '');

export { lfLog, lfError };