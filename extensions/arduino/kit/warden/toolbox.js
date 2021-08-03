/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_WARDEN_CATEGORY}" id="WARDEN_CATEGORY" colour="#00C5A0" secondaryColour="#00B0A0">
    <block type="warden_run" id="warden_run">
        <value name="SPEED">
            <shadow type="math_int9_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="warden_setMotor" id="warden_setMotor">
        <value name="SPEED">
            <shadow type="math_int9_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="warden_setLed" id="warden_setLed"></block>
    <block type="warden_setBuzzer" id="warden_setBuzzer"></block>
    <sep gap="36"/>
    <block type="warden_getDualLineTracker" id="warden_getDualLineTracker"></block>
    <block type="warden_getFourLineTracker" id="warden_getFourLineTracker">
        <field name="PORTA">PORT2</field>
        <field name="PORTB">PORT3</field>
    </block>
    <block type="warden_getTouch" id="warden_getTouch"></block>
    <sep gap="36"/>
    <block type="warden_readPS2" id="warden_readPS2"></block>
    <block type="warden_getPS2Pressed" id="warden_getPS2Pressed"></block>
    <block type="warden_getPS2Released" id="warden_getPS2Released"></block>
    <block type="warden_getPS2KeepPressed" id="warden_getPS2KeepPressed"></block>
    <block type="warden_getPS2StickAnalog" id="warden_getPS2StickAnalog"></block>
</category>
`;
}

exports = addToolbox;
