const wardenKit = formatMessage => ({
    name: 'Warden',
    deviceId: 'wardenKit_arduinoUno',
    manufactor: '意启创机器人',
    leanMore: 'https://item.taobao.com/item.htm?id=589703871287',
    iconURL: 'asset/wardenKit.png',
    description: formatMessage({
        id: 'wardenKit.description',
        default: 'Yiqichuang warden robot kit.'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/wardenKit-illustration.svg',
    connectionSmallIconURL: 'asset/wardenKit-small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino', 'kit'],
    deviceExtensions: ['wardenKit'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://www.sxyiqichuang.com/'
});

module.exports = wardenKit;
