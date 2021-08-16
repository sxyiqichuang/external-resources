/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#00C5A0';
    const secondaryColour = '#00B0A0';

    const motorPort = [
        ['P1 (3-2)', 'PORT1'],
        ['P10 (5-4)', 'PORT10']
    ];
    const digitalPort = [
        ['P2 (6-7)', 'PORT2'],
        ['P3 (9-8)', 'PORT3'],
        ['P4 (12-A2)', 'PORT4'],
        ['P5 (13-A3)', 'PORT5'],
        ['P6 (0-1)', 'PORT6'],
        ['P7 (A4-A5)', 'PORT7'],
        ['P8 (11-A1)', 'PORT8'],
        ['P9 (10-A0)', 'PORT9']
    ];

    Blockly.Blocks.warden_run = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WARDEN_RUN,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DIR',
                        options: [
                            [Blockly.Msg.WARDEN_RUN_FORWARD, 'FORWARD'],
                            [Blockly.Msg.WARDEN_RUN_BACKWARD, 'BACKWARD'],
                            [Blockly.Msg.WARDEN_TURN_LEFT, 'TURNLEFT'],
                            [Blockly.Msg.WARDEN_TURN_RIGHT, 'TURNRIGHT']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.warden_setMotor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WARDEN_SETMOTOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: motorPort
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.warden_setLed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WARDEN_SETLED,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: digitalPort
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [Blockly.Msg.WARDEN_STATE_ON, '0'],
                            [Blockly.Msg.WARDEN_STATE_OFF, '1']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.warden_setBuzzer = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WARDEN_SETBUZZER,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: digitalPort
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [Blockly.Msg.WARDEN_STATE_ON, '1'],
                            [Blockly.Msg.WARDEN_STATE_OFF, '0']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.warden_getDualLineTracker = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WARDEN_GETDUALLINETRACKER,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: digitalPort
                    },
                    {
                        type: 'field_dropdown',
                        name: 'SIDE',
                        options: [
                            [Blockly.Msg.WARDEN_SIDE_LEFT, '0'],
                            [Blockly.Msg.WARDEN_SIDE_RIGHT, '1']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOR',
                        options: [
                            [Blockly.Msg.WARDEN_COLOR_BLACK, '1'],
                            [Blockly.Msg.WARDEN_COLOR_WHITE, '0']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.warden_getFourLineTracker = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WARDEN_GETFOURLINETRACKER,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORTA',
                        options: digitalPort
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PORTB',
                        options: digitalPort
                    },
                    {
                        type: 'field_dropdown',
                        name: 'SIDE',
                        options: [
                            [Blockly.Msg.WARDEN_SIDE_LEFT, '0'],
                            [Blockly.Msg.WARDEN_SIDE_RIGHT, '1']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOR',
                        options: [
                            [Blockly.Msg.WARDEN_COLOR_BLACK, '1'],
                            [Blockly.Msg.WARDEN_COLOR_WHITE, '0']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.warden_getTouch = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WARDEN_GETTOUCH,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: digitalPort
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [Blockly.Msg.WARDEN_STATE_ACTIVE, '0'],
                            [Blockly.Msg.WARDEN_STATE_INACTIVE, '1']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.warden_getUltrasonic = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WARDEN_GETULTRASONIC,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: digitalPort
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.warden_readPS2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WARDEN_READPS2,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.warden_getPS2Pressed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WARDEN_GETPS2PRESSED,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'BUTTON',
                        options: [
                            [Blockly.Msg.WARDEN_PS2_UP, '16'],
                            [Blockly.Msg.WARDEN_PS2_DOWN, '64'],
                            [Blockly.Msg.WARDEN_PS2_LEFT, '128'],
                            [Blockly.Msg.WARDEN_PS2_RIGHT, '32'],
                            [Blockly.Msg.WARDEN_PS2_TRIANGLE, '4096'],
                            [Blockly.Msg.WARDEN_PS2_CIRCLE, '8192'],
                            [Blockly.Msg.WARDEN_PS2_CROSS, '16384'],
                            [Blockly.Msg.WARDEN_PS2_SQUARE, '32768'],
                            ['L1', '1024'],
                            ['L2', '256'],
                            ['L3', '2'],
                            ['R1', '2048'],
                            ['R2', '512'],
                            ['R3', '4'],
                            [Blockly.Msg.WARDEN_PS2_SELECT, '1'],
                            [Blockly.Msg.WARDEN_PS2_START, '8']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.warden_getPS2Released = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WARDEN_GETPS2RELEASED,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'BUTTON',
                        options: [
                            [Blockly.Msg.WARDEN_PS2_UP, '16'],
                            [Blockly.Msg.WARDEN_PS2_DOWN, '64'],
                            [Blockly.Msg.WARDEN_PS2_LEFT, '128'],
                            [Blockly.Msg.WARDEN_PS2_RIGHT, '32'],
                            [Blockly.Msg.WARDEN_PS2_TRIANGLE, '4096'],
                            [Blockly.Msg.WARDEN_PS2_CIRCLE, '8192'],
                            [Blockly.Msg.WARDEN_PS2_CROSS, '16384'],
                            [Blockly.Msg.WARDEN_PS2_SQUARE, '32768'],
                            ['L1', '1024'],
                            ['L2', '256'],
                            ['L3', '2'],
                            ['R1', '2048'],
                            ['R2', '512'],
                            ['R3', '4'],
                            [Blockly.Msg.WARDEN_PS2_SELECT, '1'],
                            [Blockly.Msg.WARDEN_PS2_START, '8']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.warden_getPS2KeepPressed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WARDEN_GETPS2KEEPPRESSED,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'BUTTON',
                        options: [
                            [Blockly.Msg.WARDEN_PS2_UP, '16'],
                            [Blockly.Msg.WARDEN_PS2_DOWN, '64'],
                            [Blockly.Msg.WARDEN_PS2_LEFT, '128'],
                            [Blockly.Msg.WARDEN_PS2_RIGHT, '32'],
                            [Blockly.Msg.WARDEN_PS2_TRIANGLE, '4096'],
                            [Blockly.Msg.WARDEN_PS2_CIRCLE, '8192'],
                            [Blockly.Msg.WARDEN_PS2_CROSS, '16384'],
                            [Blockly.Msg.WARDEN_PS2_SQUARE, '32768'],
                            ['L1', '1024'],
                            ['L2', '256'],
                            ['L3', '2'],
                            ['R1', '2048'],
                            ['R2', '512'],
                            ['R3', '4'],
                            [Blockly.Msg.WARDEN_PS2_SELECT, '1'],
                            [Blockly.Msg.WARDEN_PS2_START, '8']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.warden_getPS2StickAnalog = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WARDEN_GETPS2STICKANALOG,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STICK',
                        options: [
                            [Blockly.Msg.WARDEN_PS2_LX, '7'],
                            [Blockly.Msg.WARDEN_PS2_LY, '8'],
                            [Blockly.Msg.WARDEN_PS2_RX, '5'],
                            [Blockly.Msg.WARDEN_PS2_RY, '6']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
