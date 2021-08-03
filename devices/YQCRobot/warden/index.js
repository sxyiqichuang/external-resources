const warden = formatMessage => ({
    name: 'Warden',
    deviceId: 'warden_arduinoUno',
    manufactor: '意启创机器人',
    leanMore: 'https://item.taobao.com/item.htm?id=589703871287',
    iconURL: 'asset/warden.png',
    description: formatMessage({
        id: 'warden.description',
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
    connectionIconURL: 'asset/warden-illustration.svg',
    connectionSmallIconURL: 'asset/warden-small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino', 'kit'],
    deviceExtensions: ['warden'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://www.sxyiqichuang.com/'
});

module.exports = warden;
