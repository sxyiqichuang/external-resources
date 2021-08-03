const ironKit = formatMessage => ({
    name: formatMessage({
        id: 'ironKit.name',
        default: 'Engineering Vehicle Robot Kit'
    }),
    deviceId: 'ironKit_arduinoUno',
    manufactor: '意启创机器人',
    leanMore: 'https://item.taobao.com/item.htm?id=628120335101',
    iconURL: 'asset/ironKit.png',
    description: formatMessage({
        id: 'ironKit.description',
        default: 'Yiqichuang engineering vehicle robot kit.'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/ironKit-illustration.svg',
    connectionSmallIconURL: 'asset/ironKit-small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino', 'kit'],
    deviceExtensions: ['ironKit', 'apds9960'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://www.sxyiqichuang.com/'
});

module.exports = ironKit;
