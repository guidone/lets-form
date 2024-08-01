const lfLog = s => console.log('%cLF%c ' + s, 'background: #3498ff; color: #ffffff; padding: 2px; border-radius: 3px', '');
const lfError = (s, e) => console.log('%cLF%c Error: ' + s, 'background: #E44D2E; color: #ffffff; padding: 2px; border-radius: 3px', '', e ?? '');
const lfWarn = (s, e) => console.log('%cLF%c Warning: ' + s, 'background: #FFBF00; color: #ffffff; padding: 2px; border-radius: 3px', '', e ?? '');
const lfLogPlugin = s => console.log('%cLF%c ' + s, 'background: #49796B; color: #ffffff; padding: 2px; border-radius: 3px', '');
export { lfLog, lfError, lfLogPlugin, lfWarn };