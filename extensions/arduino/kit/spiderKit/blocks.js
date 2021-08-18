/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const msColor = '#DEB887';

    // makerspider初始化
    Blockly.Blocks.ms_init = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_INIT);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };

    // makerspider复位
    Blockly.Blocks.ms_robotReset = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_RESET);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };

    // 前进
    Blockly.Blocks.ms_robotForward = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_FORWARD);
            this.appendValueInput('step', Number);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_STEP);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };

    // 后退
    Blockly.Blocks.ms_robotBack = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_BACK);
            this.appendValueInput('step', Number);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_STEP);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };

    // 前进
    Blockly.Blocks.ms_robotLeft = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_LEFT);
            this.appendValueInput('step', Number);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_STEP);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };

    // 前进
    Blockly.Blocks.ms_robotRight = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_RIGHT);
            this.appendValueInput('step', Number);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_STEP);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };
    // 上下蠕动
    Blockly.Blocks.ms_initSquirming = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField('初始化蜘蛛机器人上下蠕动');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };
    // 上下蠕动
    Blockly.Blocks.ms_squirmingUp = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField('蜘蛛机器人上下蠕动');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };
    // 俯卧撑
    Blockly.Blocks.ms_initPushUp = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField('初始化蜘蛛机器人俯卧撑');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };
    // 俯卧撑
    Blockly.Blocks.ms_pushUp = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField('蜘蛛机器人做俯卧撑');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };
    // 原地扭扭
    Blockly.Blocks.ms_initWriggle = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField('初始化蜘蛛机器人原地扭扭');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };
    // 原地扭扭
    Blockly.Blocks.ms_wriggle = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField('蜘蛛机器人原地扭扭');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };

    // 左右蠕动
    Blockly.Blocks.ms_initLrWriggle = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField('初始化蜘蛛机器人左右蠕动');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };
    // 左右蠕动
    Blockly.Blocks.ms_lrWriggle = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField('蜘蛛机器人左右蠕动');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };
    // 顺势针旋转
    Blockly.Blocks.ms_initCwRotation = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField('初始化蜘蛛机器人顺时针旋转');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };
    // 顺势针旋转
    Blockly.Blocks.ms_cwRotation = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField('蜘蛛机器人顺时针旋转');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };
    // 逆时针旋转
    Blockly.Blocks.ms_initCcwRotation = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField('初始化蜘蛛机器人逆时针旋转');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };
    // 逆时针旋转
    Blockly.Blocks.ms_ccwRotation = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField('蜘蛛机器人逆时针旋转');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };

    // ps2初始化
    Blockly.Blocks.ms_ps2init = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_PS2INIT);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };
    // ps2键被按下
    Blockly.Blocks.ms_ps2pressed = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_PS2PRESSED);
            this.setOutputShape(Blockly.OUTPUT_SHAPE_HEXAGONAL);
            this.setOutput(true, 'Boolean');
            this.setTooltip('');
        }
    };
    // ps2按下
    Blockly.Blocks.ms_ps2press = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_PS2PRESS)
                .appendField(new Blockly.FieldDropdown([
                    [Blockly.Msg.MS_PS2UP, '16'],
                    [Blockly.Msg.MS_PS2DOWN, '64'],
                    [Blockly.Msg.MS_PS2LEFT, '32'],
                    [Blockly.Msg.MS_PS2RIGHT, '128'],
                    ['△', '4096'],
                    ['○', '8192'],
                    ['×', '16384'],
                    ['□', '32768'],
                    [Blockly.Msg.MS_PS2LEFT1, '1024'],
                    [Blockly.Msg.MS_PS2LEFT2, '256'],
                    [Blockly.Msg.MS_PS2LEFT3, '2'],
                    [Blockly.Msg.MS_PS2RIGHT1, '2048'],
                    [Blockly.Msg.MS_PS2RIGHT2, '512'],
                    [Blockly.Msg.MS_PS2RIGHT3, '4'],
                    [Blockly.Msg.MS_PS2SELECT, '1'],
                    [Blockly.Msg.MS_PS2START, '8']
                ]), 'ps2buttons');
            this.setOutputShape(Blockly.OUTPUT_SHAPE_HEXAGONAL);
            this.setOutput(true, 'Boolean');
            this.setTooltip('');
        }
    };
    // ps2获取摇杆值
    Blockly.Blocks.ms_ps2getrockervalue = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_PS2GETROCKERVALUE)
                .appendField(new Blockly.FieldDropdown([
                    [Blockly.Msg.MS_PS2LEFTX, '7'],
                    [Blockly.Msg.MS_PS2LEFTY, '8'],
                    [Blockly.Msg.MS_PS2RIGHTX, '5'],
                    [Blockly.Msg.MS_PS2RIGHTY, '6']
                ]), 'ps2rockers');
            this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
            this.setOutput(true, 'Number');
            this.setTooltip('');
        }
    };
    // ps2获取摇角度
    Blockly.Blocks.ms_ps2getrockervalue2 = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_PS2GETROCKERVALUE2)
                .appendField(new Blockly.FieldDropdown([
                    [Blockly.Msg.MS_PS2LEFTANGLE, 'LeftHart()'],
                    [Blockly.Msg.MS_PS2RIGHTANGLE, 'RightHart()']
                ]), 'ps2rockerss');
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_PS2GETROCKERANGLE);
            this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
            this.setOutput(true, 'Number');
            this.setTooltip('');
        }
    };
    // 读取ps2状态
    Blockly.Blocks.ms_ps2status = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_PS2STATUS);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };

    // 机器人向前走
    Blockly.Blocks.ms_forward = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_FORWARD);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };

    // 机器人后退
    Blockly.Blocks.ms_back = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_BACK);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };

    // 机器人向左
    Blockly.Blocks.ms_left = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_LEFT);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };

    // 机器人向右
    Blockly.Blocks.ms_right = {
        init: function (){
            this.setColour(msColor);
            this.appendDummyInput('')
                .appendField(Blockly.Msg.MS_RIGHT);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
        }
    };

    return Blockly;
}

exports = addBlocks;
