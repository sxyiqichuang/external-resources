const EVRKit = formatMessage => ({
    name: formatMessage({
        id: 'EVRKit.name',
        default: 'Engineering Vehicle Robot Kit'
    }),
    deviceId: 'EVRKit_arduinoUno',
    manufactor: '意启创机器人',
    leanMore: 'https://item.taobao.com/item.htm?id=628120335101',
    iconURL: 'asset/EVRKit.png',
    description: formatMessage({
        id: 'EVRKit.description',
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
    connectionIconURL: 'asset/EVRKit-illustration.svg',
    connectionSmallIconURL: 'asset/EVRKit-small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino', 'kit'],
    deviceExtensions: ['EVRKit', 'apds9960'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://www.sxyiqichuang.com/'
});

module.exports = EVRKit;
