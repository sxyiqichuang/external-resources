const warden = () => ({
    name: null,
    extensionId: 'warden',
    version: '1.0.0',
    supportDevice: ['warden_arduinoUno'],
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://www.sxyiqichuang.com'
});

module.exports = warden;
