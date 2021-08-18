/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SPIDER_KIT_CATEGORY}" id="SPIDER_KIT_CATEGORY" colour="#DEB887" secondaryColour="#DEB887">
    <block type="ms_init" id="ms_init"></block>
    <block type="ms_robotReset" id="ms_robotReset"></block>
    <sep gap="36"/>
    <block type="ms_robotForward" id="ms_robotForward">
        <value name="step">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="ms_robotBack" id="ms_robotBack">
        <value name="step">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="ms_robotLeft" id="ms_robotLeft">
        <value name="step">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="ms_robotRight" id="ms_robotRight">
        <value name="step">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <sep gap="36"/>
    <block type="ms_squirmingUp" id="ms_squirmingUp"/>
    <block type="ms_pushUp" id="ms_pushUp"/>
    <block type="ms_wriggle" id="ms_wriggle"/>
    <block type="ms_lrWriggle" id="ms_lrWriggle"/>
    <sep gap="36"/>
    <block type="ms_cwRotation" id="ms_cwRotation"/>
    <block type="ms_ccwRotation" id="ms_ccwRotation"/>
    <block type="ms_forward" id="ms_forward"></block>
    <block type="ms_back" id="ms_back"></block>
    <block type="ms_left" id="ms_left"></block>
    <block type="ms_right" id="ms_right"></block>
    <sep gap="36"/>
    <block type="ms_ps2init" id="ms_ps2init"></block>
    <block type="ms_ps2status" id="ms_ps2status"></block>
    <block type="ms_ps2pressed" id="ms_ps2pressed"></block>
    <block type="ms_ps2press" id="ms_ps2press"></block>
    <block type="ms_ps2getrockervalue" id="ms_ps2getrockervalue"></block>
    <block type="ms_ps2getrockervalue2" id="ms_ps2getrockervalue2"></block>
</category>
`;
}

exports = addToolbox;
