/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    // 初始化
    Blockly.Arduino.ms_init = function () {
        Blockly.Arduino.includes_.include_ms_init = '#include <Maker_Spider.h>';
        Blockly.Arduino.definitions_.ms_init = 'Maker_Spider MakerSpider;';
        return 'MakerSpider.init();\n';
    };

    // 复位
    Blockly.Arduino.ms_robotReset = function () {
        return ' MakerSpider.robotReset();\n';
    };

    // 前进
    Blockly.Arduino.ms_robotForward = function () {
        const step = Blockly.Arduino.valueToCode(this, 'step', Blockly.Arduino.ORDER_ATOMIC);
        return `MakerSpider.forwardLoop(${step});\n`;
    };

    // 后退
    Blockly.Arduino.ms_robotBack = function () {
        const step = Blockly.Arduino.valueToCode(this, 'step', Blockly.Arduino.ORDER_ATOMIC);
        return `MakerSpider.backLoop(${step});\n`;
    };

    // 向左
    Blockly.Arduino.ms_robotLeft = function () {
        const step = Blockly.Arduino.valueToCode(this, 'step', Blockly.Arduino.ORDER_ATOMIC);
        return `MakerSpider.leftLoop(${step});\n`;
    };

    // 向右
    Blockly.Arduino.ms_robotRight = function () {
        const step = Blockly.Arduino.valueToCode(this, 'step', Blockly.Arduino.ORDER_ATOMIC);
        return `MakerSpider.rightLoop(${step});\n`;
    };
    //
    Blockly.Arduino.ms_initSquirming = function () {
        return 'MakerSpider.initSquirming();\n';
    };
    Blockly.Arduino.ms_squirmingUp = function () {
        return 'MakerSpider.squirmingUp();\n';
    };
    Blockly.Arduino.ms_initPushUp = function () {
        return 'MakerSpider.initPushUp();\n';
    };
    Blockly.Arduino.ms_pushUp = function () {
        return 'MakerSpider.pushUp();\n';
    };
    Blockly.Arduino.ms_initWriggle = function () {
        return 'MakerSpider.initWriggle();\n';
    };
    Blockly.Arduino.ms_wriggle = function () {
        return 'MakerSpider.wriggle();\n';
    };
    Blockly.Arduino.ms_initLrWriggle = function () {
        return 'MakerSpider.initLrWriggle();\n';
    };
    Blockly.Arduino.ms_lrWriggle = function () {
        return 'MakerSpider.lrWriggle();\n';
    };

    Blockly.Arduino.ms_initCwRotation = function () {
        return 'MakerSpider.initCwRotation();\n';
    };
    Blockly.Arduino.ms_cwRotation = function () {
        return 'MakerSpider.cwRotation();\n';
    };
    Blockly.Arduino.ms_initCcwRotation = function () {
        return 'MakerSpider.initCcwRotation();\n';
    };
    Blockly.Arduino.ms_ccwRotation = function () {
        return 'MakerSpider.ccwRotation();\n';
    };

    // PS2初始化
    Blockly.Arduino.ms_ps2init = function () {
        Blockly.Arduino.includes_.include_md_ps2init = '#include <PS2X_lib.h>';
        Blockly.Arduino.definitions_.md_ps2init = 'PS2X *ps2x;';
        return 'ps2x = MakerSpider.getMakerSpiderDriver().getSensor(E_PS2X);\n';
    };
    // ps2键被按下
    Blockly.Arduino.ms_ps2pressed = function () {
        const code = 'ps2x->ButtonDataByte()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    // ps2按下
    Blockly.Arduino.ms_ps2press = function () {
        const dropdownPs2buttons = this.getFieldValue('ps2buttons');
        const code = `ps2x->Button(${dropdownPs2buttons})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    // ps2获取摇杆值
    Blockly.Arduino.ms_ps2getrockervalue = function () {
        const dropdownPs2rockers = this.getFieldValue('ps2rockers');
        const code = `ps2x->Analog(${dropdownPs2rockers})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    // ps2获取摇杆角度
    Blockly.Arduino.ms_ps2getrockervalue2 = function () {
        const dropdownPs2rockerss = this.getFieldValue('ps2rockerss');
        const code = `ps2x->${dropdownPs2rockerss}`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    // 读取ps2状态
    Blockly.Arduino.ms_ps2status = function () {
        return 'static int vibrate = 0;\nbyte PSS_X = 0,PSS_Y = 0;\nps2x->read_gamepad(false, vibrate);\n';
    };

    // 蜘蛛机器人前进
    Blockly.Arduino.ms_forward = function () {
        return 'MakerSpider.spiderForward();\n';
    };

    // 蜘蛛机器人后退
    Blockly.Arduino.ms_back = function () {
        return 'MakerSpider.spiderBack();\n';
    };

    // 蜘蛛机器人向左
    Blockly.Arduino.ms_left = function () {
        return 'MakerSpider.spiderLeft();\n';
    };

    // 蜘蛛机器人向右
    Blockly.Arduino.ms_right = function () {
        return 'MakerSpider.spiderRight();\n';
    };

    return Blockly;
}

exports = addGenerator;
