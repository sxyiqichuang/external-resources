/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.warden_run = function () {
        const dir = this.getFieldValue('DIR');
        const speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.warden_init = '#include <SSRob.h>';
        Blockly.Arduino.includes_.warden_run = '#include <Warden_Move.h>';

        return `move(${dir}, ${speed});\n`;
    };

    Blockly.Arduino.warden_setMotor = function () {
        const port = this.getFieldValue('PORT');
        const speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.warden_init = '#include <SSRob.h>';
        Blockly.Arduino.includes_.warden_setMotor = '#include <SSRob_DCMotor.h>';
        Blockly.Arduino.definitions_[`warden_setMotor${port}`] =
            `SSRob_DCMotor motor_${port}(${port});`;

        return `motor_${port}.run(${speed});\n`;
    };

    Blockly.Arduino.warden_setLed = function () {
        const port = this.getFieldValue('PORT');
        const state = this.getFieldValue('STATE');

        Blockly.Arduino.includes_.warden_init = '#include <SSRob.h>';
        Blockly.Arduino.includes_.warden_ssDDout = '#include <SSRob_DDout.h>';
        Blockly.Arduino.definitions_[`warden_setLed${port}`] =
            `SSRob_DDout led_${port}(${port});`;

        return `led_${port}.write(0, ${state});\n`;
    };

    Blockly.Arduino.warden_setBuzzer = function () {
        const port = this.getFieldValue('PORT');
        const state = this.getFieldValue('STATE');

        Blockly.Arduino.includes_.warden_init = '#include <SSRob.h>';
        Blockly.Arduino.includes_.warden_ssDDout = '#include <SSRob_DDout.h>';
        Blockly.Arduino.definitions_[`warden_setBuzzer${port}`] =
            `SSRob_DDout buzzer_${port}(${port});`;

        return `buzzer_${port}.write(0, ${state});\n`;
    };

    Blockly.Arduino.warden_getDualLineTracker = function () {
        const port = this.getFieldValue('PORT');
        const side = this.getFieldValue('SIDE');
        const colour = this.getFieldValue('COLOR');

        Blockly.Arduino.includes_.warden_init = '#include <SSRob.h>';
        Blockly.Arduino.includes_.warden_ssDDin = '#include <SSRob_DDin.h>';
        Blockly.Arduino.definitions_[`warden_getDualLineTracker${port}`] =
            `SSRob_DDin dualTracker_${port}(${port});`;


        const code = `dualTracker_${port}.read(${side}) == ${colour}`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.warden_getFourLineTracker = function () {
        const portA = this.getFieldValue('PORTA');
        const portB = this.getFieldValue('PORTB');
        const side = this.getFieldValue('SIDE');
        const colour = this.getFieldValue('COLOR');

        Blockly.Arduino.includes_.warden_init = '#include <SSRob.h>';
        Blockly.Arduino.includes_.warden_ssDDDDin = '#include <SSRob_DDDDin.h>';
        Blockly.Arduino.definitions_[`warden_getFourLineTracker${portA}${portB}`] =
            `SSRob_DDDDin dualTracker_${portA}${portB}(${portA}, ${portB});`;


        const code = `dualTracker_${portA}${portB}.read(${side}) == ${colour}`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.warden_getTouch = function () {
        const port = this.getFieldValue('PORT');
        const state = this.getFieldValue('STATE');

        Blockly.Arduino.includes_.warden_init = '#include <SSRob.h>';
        Blockly.Arduino.includes_.warden_ssDDin = '#include <SSRob_DDin.h>';
        Blockly.Arduino.definitions_[`warden_getTouch${port}`] =
            `SSRob_DDin touchSwitch_${port}(${port});`;


        const code = `touchSwitch_${port}.read(0) == ${state}`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.warden_getUltrasonic = function () {
        const port = this.getFieldValue('PORT');

        Blockly.Arduino.includes_.warden_init = '#include <SSRob.h>';
        Blockly.Arduino.includes_.warden_getUltrasonic = '#include <SSRob_Ultrasonic.h>';
        Blockly.Arduino.definitions_[`warden_getUltrasonic${port}`] =
            `SSRob_Ultrasonic ultrasonic_${port}(${port});`;

        const code = `ultrasonic_${port}.distanceCm()`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.warden_readPS2 = function () {
        Blockly.Arduino.includes_.warden_init = '#include <SSRob.h>';
        Blockly.Arduino.includes_.warden_readPS2 = '#include <SSRob_PS2X_lib.h>';
        Blockly.Arduino.definitions_.warden_readPS2 = `SSRob_PS2X ps2x;`;
        Blockly.Arduino.setups_.warden_readPS2 = `ps2x.config_gamepad(0, 13, 1, A3, false, false);`;

        return `ps2x.read_gamepad(false, 0);\n`;
    };

    Blockly.Arduino.warden_getPS2Pressed = function () {
        const button = this.getFieldValue('BUTTON');

        Blockly.Arduino.includes_.warden_init = '#include <SSRob.h>';

        return [`ps2x.ButtonPressed(${button})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.warden_getPS2Released = function () {
        const button = this.getFieldValue('BUTTON');

        Blockly.Arduino.includes_.warden_init = '#include <SSRob.h>';

        return [`ps2x.ButtonReleased(${button})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.warden_getPS2KeepPressed = function () {
        const button = this.getFieldValue('BUTTON');

        Blockly.Arduino.includes_.warden_init = '#include <SSRob.h>';

        return [`ps2x.Button(${button})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.warden_getPS2StickAnalog = function () {
        const stick = this.getFieldValue('STICK');

        Blockly.Arduino.includes_.warden_init = '#include <SSRob.h>';

        return [`ps2x.Analog(${stick})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
