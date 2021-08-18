const spiderKit = formatMessage => ({
    name: formatMessage({
        id: 'spiderKit.name',
        default: 'Spider Robot Kit'
    }),
    deviceId: 'spiderKit_arduinoUno',
    manufactor: '意启创机器人',
    leanMore: 'https://item.taobao.com/item.htm?id=589703871287',
    iconURL: 'asset/spiderKit.png',
    description: formatMessage({
        id: 'spiderKit.description',
        default: 'Yiqichuang spider robot kit.'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/spiderKit-illustration.svg',
    connectionSmallIconURL: 'asset/spiderKit-small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino', 'kit'],
    deviceExtensions: ['spiderKit'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://www.sxyiqichuang.com/'
});

module.exports = spiderKit;
