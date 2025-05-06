import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

import twIcon from './tw/tw.svg';
import customExtensionIcon from './custom/custom.svg';
import returnIcon from './custom/return.svg';
import galleryIcon from './gallery/gallery.svg';
import {APP_NAME} from '../../brand';

export default [
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    },
    {
        // not really an extension, but it's easiest to present it as one
        name: (
            <FormattedMessage
                defaultMessage="Custom Reporters"
                description="Name of custom reporters extension"
                id="tw.customReporters.name"
            />
        ),
        extensionId: 'procedures_enable_return',
        iconURL: returnIcon,
        description: (
            <FormattedMessage
                defaultMessage="Allow custom blocks to output values and be used as inputs."
                description="Description of custom reporters extension"
                id="tw.customReporters.description"
            />
        ),
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="{APP_NAME} Blocks"
                description="Name of the strange 'TurboWarp Blocks' extension"
                id="tw.twExtension.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'tw',
        iconURL: twIcon,
        description: (
            <FormattedMessage
                defaultMessage="Weird new blocks."
                description="Description of the strange 'TurboWarp Blocks' extension"
                id="tw.twExtension.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['tw'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Captchas"
                description="Simple Client-Based Captchas, this does not promise 100% security"
                id="captchas.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Captchas.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Captchas.svg",
        description: (
            <FormattedMessage
                defaultMessage="Simple Client-Based Captchas, this does not promise 100% security"
                description="Simple Client-Based Captchas, this does not promise 100% security"
                id="captchas.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Sty-Lists"
                description="Customize and Organize List Monitors"
                id="sty-lists.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Sty-Lists.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Sty-Lists.svg",
        description: (
            <FormattedMessage
                defaultMessage="Customize and Organize List Monitors"
                description="Sty-Lists"
                id="sty-lists.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Variables Expanded"
                description="New Variable Blocks and New Variable Monitors"
                id="ve.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Variables-Expanded.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Variables-Expanded.svg",
        description: (
            <FormattedMessage
                defaultMessage="New Variable Blocks and New Variable Monitors"
                description="Sty-Lists"
                id="ve.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Popup Phoenix"
                description="New Variable Blocks and New Variable Monitors"
                id="pp.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Popup-Phoenix.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Popup-Phoenix.svg",
        description: (
            <FormattedMessage
                defaultMessage="Create and design custom Popups! A remaster of 'Better Input'"
                description="Sty-Lists"
                id="pp.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Better Input ⚠️ Deprecated, please use Popup-Phoenix ⚠️"
                description="New Variable Blocks and New Variable Monitors"
                id="bi.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Better-Input.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Better-Input.svg",
        description: (
            <FormattedMessage
                defaultMessage="Expansion of the 'Ask and Wait' Block. Deprecated, please use Popup-Phoenix'"
                description="Sty-Lists"
                id="bi.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="My Blocks Plus"
                description="New Variable Blocks and New Variable Monitors"
                id="mbp.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/My-Blocks-Plus.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/My-Blocks-Plus.svg",
        description: (
            <FormattedMessage
                defaultMessage="Better Custom Blocks'"
                description="Sty-Lists"
                id="mbp.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Better Comments"
                description="Better Comments with Color and Text Customization"
                id="bc.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Better-Comments.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Better-Comments.svg",
        description: (
            <FormattedMessage
                defaultMessage="Better Comments with Color and Text Customization"
                description="Sty-Lists"
                id="bc.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Sprite Panel"
                description="Better Comments with Color and Text Customization"
                id="sp.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Sprite-Panel.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Sprite-Panel.svg",
        description: (
            <FormattedMessage
                defaultMessage="Addon for viewing and managing Sprites and Clones"
                description="Sty-Lists"
                id="sp.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Dropdown Maker"
                description="Create Custom Dropdowns! Best paired with My Blocks+"
                id="dm.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Dropdown-Maker.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Dropdown-Maker.svg",
        description: (
            <FormattedMessage
                defaultMessage="Create Custom Dropdowns! Best paired with My Blocks+"
                description="Sty-Lists"
                id="dm.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Extra Controls"
                description="New Advanced Control Blocks"
                id="ec.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Extra-Controls.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Extra-Controls.svg",
        description: (
            <FormattedMessage
                defaultMessage="New Advanced Control Blocks"
                description="Sty-Lists"
                id="ec.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="More Operators"
                description="New Advanced Control Blocks"
                id="mo.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/More-Operators.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/More-Operators.svg",
        description: (
            <FormattedMessage
                defaultMessage="New Advanced Control Blocks"
                description="Sty-Lists"
                id="mo.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Added-Motion"
                description="New Advanced Control Blocks"
                id="am.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Added-Motion.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Added-Motion.svg",
        description: (
            <FormattedMessage
                defaultMessage="New Motion Blocks"
                description="Sty-Lists"
                id="am.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Scratch Utilities"
                description="New Advanced Control Blocks"
                id="su.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Scratch-Utilities.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Scratch-Utilities.svg",
        description: (
            <FormattedMessage
                defaultMessage="Blocks for fetching Scratch statistics and assets, inspired by NexusKitten's S-Grab"
                description="Sty-Lists"
                id="su.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="New Advanced Control Blocks"
                id="ttss.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Text-to-Speech.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Text-to-Speech.svg",
        description: (
            <FormattedMessage
                defaultMessage="Better Text to Speech using the TikTok API"
                description="Sty-Lists" 
                id="ttss.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },    
    {
        name: (
            <FormattedMessage
                defaultMessage="Boxed Physics"
                description="Implements the Box2D physics engine into PenguinMod, adding joints, springs, etc. This is different from TurboWarp's implementation. Created by pooiod7."
                id="boxedphysics.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/pooiod/Box2D.js',
        iconURL: "https://extensions.penguinmod.com/images/pooiod/B2Dimg.svg",
        description: (
            <FormattedMessage
                defaultMessage="Implements the Box2D physics engine into PenguinMod, adding joints, springs, etc. This is different from TurboWarp's implementation. Created by pooiod7."
                description="Sty-Lists"
                id="boxedphysics.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Object"
                description=""
                id="object.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/skyhigh173/object.js',
        iconURL: "https://extensions.penguinmod.com/images/skyhigh173/object.svg",
        description: (
            <FormattedMessage
                defaultMessage="Handle large JSON files at an extreme speed. Created by skyhigh173."
                description=""
                id="object.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Update File (Direct Access)"
                description=""
                id="updatefile.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/Anonymous_cat1/updateFile.js',
        iconURL: "https://extensions.penguinmod.com/images/Anonymous_cat1/updateFile.svg",
        description: (
            <FormattedMessage
                defaultMessage="A simple extension that uses the File System Access API to update files dynamically. ⚠️ File System Access is not supported by all browsers. Projects can maliciously edit files that you open. ⚠️ Created by Anonymous-cat1."
                description=""
                id="updatefile.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="3D Math"
                description=""
                id="3dmath.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/ObviousAlexC/3DMath.js',
        iconURL: "https://extensions.penguinmod.com/images/ObviousAlexC/3DMath.svg",
        description: (
            <FormattedMessage
                defaultMessage="A handful of utilities for making your own sprite-based 3D engine Created by pinksheep2917."
                description=""
                id="3dmath.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Scope Variable"
                description=""
                id="scopevariables.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/0znzw/ScopeVars.js',
        iconURL: "https://extensions.penguinmod.com/images/0znzw/ScopeVars.png",
        description: (
            <FormattedMessage
                defaultMessage="Manage your variables in a block-like structure. ⚠️ This extension uses unstable techniques that may not always work. ⚠️ Created by yuri-kiss."
                description=""
                id="scopevariables.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Dictation"
                description=""
                id="dictation.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/pooiod/Dictation.js',
        iconURL: "https://extensions.penguinmod.com/images/pooiod/Dictation.svg",
        description: (
            <FormattedMessage
                defaultMessage="Convert your voice into text. (not supported in all browsers) Created by pooiod7."
                description=""
                id="dictation.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Background Remover"
                description=""
                id="backgroundremover.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/dumzdev/removebg.js',
        iconURL: "https://extensions.penguinmod.com/images/dumzdev/removebgbanner.svg",
        description: (
            <FormattedMessage
                defaultMessage="Removes background from images. Created by dumzdev."
                description=""
                id="backgroundremover.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="E2EE"
                description=""
                id="e2ee.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/MikeDev101/e2ee.js',
        iconURL: "https://extensions.penguinmod.com/images/MikeDev101/e2ee.svg",
        description: (
            <FormattedMessage
                defaultMessage="A general-purpose E2EE (End-to-End Encryption) extension for Scratch. Created by MikeDev101."
                description=""
                id="e2ee.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="WebRTC"
                description=""
                id="webrtc.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/MikeDev101/webrtc.js',
        iconURL: "https://extensions.penguinmod.com/images/MikeDev101/webrtc.svg",
        description: (
            <FormattedMessage
                defaultMessage="A barebones WebRTC implementation. Created by MikeDev101."
                description=""
                id="webrtc.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Random Utilities"
                description=""
                id="randomutilities.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/random_utils.js',
        iconURL: "https://extensions.penguinmod.com/images/Gen1x/randomutils.png",
        description: (
            <FormattedMessage
                defaultMessage="Many blocks related to generating random values, including seed-based number generation, true number generation, UUID's, random strings, etc. Created by G1nX."
                description=""
                id="randomutilities.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Cockatiel Location"
                description=""
                id="location.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/bruhbeast-pixel/CockatielLocation.js',
        iconURL: "https://extensions.penguinmod.com/images/bruhbeast-pixel/CockatielLocation.svg",
        description: (
            <FormattedMessage
                defaultMessage="Fetch Users' IP Addresses and Location. Created by bruhbeast-pixel."
                description=""
                id="location.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="More Types"
                description=""
                id="moretypes.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/VeryGoodScratcher42/More-Types.js',
        iconURL: "https://extensions.penguinmod.com/images/VeryGoodScratcher42/More-Types.png",
        description: (
            <FormattedMessage
                defaultMessage="Adds more value types to PenguinMod, implementing Functions, Objects, Arrays, Sets, Maps, Symbols and Nothing. Created by VeryGoodScratcher42."
                description=""
                id="moretypes.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="PenguinAI"
                description=""
                id="penguinai.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/MubiLop/penguingpt.js',
        iconURL: "https://extensions.penguinmod.com/images/MubiLop/penguingpt.png",
        description: (
            <FormattedMessage
                defaultMessage="Talk to AI! Use Models like DALL-E-3, GPT, LLama, Claude, and more! Created by MubiLop. ⚠️⚠️AI models can generate unintended or inappropriate output. Some AI models may also become temporarily inaccessible. Use at your own risk.⚠️⚠️"
                description=""
                id="penguinai.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Spritesheeter"
                description=""
                id="spritesheeter.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/MubiLop/spritesheeter.js',
        iconURL: "https://extensions.penguinmod.com/images/MubiLop/spritesheeter.png",
        description: (
            <FormattedMessage
                defaultMessage="Load and manipulate spritesheets with customizable frames and XML support Created by MubiLop."
                description=""
                id="spritesheeter.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Toast Notifications"
                description=""
                id="toast_notifications.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/MubiLop/toastnotifs.js',
        iconURL: "https://extensions.penguinmod.com/images/MubiLop/toastnotifs.png",
        description: (
            <FormattedMessage
                defaultMessage="Did you want alerts? Notifications that are easily customizable? This is the only and best notification extension! Created by MubiLop. Additional code by themeatly2 and ddededodediamante"
                description=""
                id="toast_notifications.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Number Utilities"
                description=""
                id="number_utiliteies.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/MubiLop/numutils.js',
        iconURL: "https://extensions.penguinmod.com/images/MubiLop/numutils.png",
        description: (
            <FormattedMessage
                defaultMessage="Adds blocks for number formatting and manipulation. Created by MubiLop. Art made by hazel"
                description=""
                id="number_utiliteies.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Mathematics"
                description=""
                id="mathematics.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/jwklong/mathematics.js',
        iconURL: "https://extensions.penguinmod.com/images/jwklong/mathematics.png",
        description: (
            <FormattedMessage
                defaultMessage="Complicated maths extension for nerds. Created by jwklong."
                description=""
                id="mathematics.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Big Decimal"
                description=""
                id="bigdecimal.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/qxsck/big-decimal.js',
        iconURL: "https://extensions.penguinmod.com/images/qxsck/big-decimal.svg",
        description: (
            <FormattedMessage
                defaultMessage="High precision operations. (Support decimals) Created by qxsck."
                description=""
                id="bigdecimal.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Git Penguin"
                description="extensions"
                id="gitpenguin.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/justablock/gitpenguin.js',
        iconURL: "https://extensions.penguinmod.com/images/justablock/gitpenguin.png",
        description: (
            <FormattedMessage
                defaultMessage="Make requests and control the files for your GitHub repository. Created by justablock."
                description="extensions"
                id="gitpenguin.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Google Auth"
                description="New Advanced Control Blocks"
                id="googleauth.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/Ikelene/googleAuthExtension.js',
        iconURL: "https://extensions.penguinmod.com/images/Ikelene/ExtensionBanner.png",
        description: (
            <FormattedMessage
                defaultMessage="Login with Google to your projects. Allows getting a name, profile picture and email from the google account. Created by Ikelene."
                description="Sty-Lists"
                id="googleauth.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pang API"
                description=""
                id="pangapi.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/SammerLOL/pangapi.js',
        iconURL: "https://extensions.penguinmod.com/images/SammerLOL/pangapi.png",
        description: (
            <FormattedMessage
                defaultMessage="Fetch information from the PenguinMod API. Created by oc9x97."
                description=""
                id="pangapi.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Discord Auth"
                description="extensions"
                id="discordauth.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/NotHouse/DiscordAuth.js',
        iconURL: "https://extensions.penguinmod.com/images/NotHouse/DiscordAuth-banner.png",
        description: (
            <FormattedMessage
                defaultMessage="Login with discord to your projects. Identify users by ID and username in a secure and easy way! Created by enderhacker."
                description="extensions"
                id="discordauth.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Twitch"
                description=""
                id="twitch.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/bop_tw/Twitch.js',
        iconURL: "https://extensions.penguinmod.com/images/Ikelene/ExtensionBanner.png",
        description: (
            <FormattedMessage
                defaultMessage="Communicate with your Twitch Chat on PenguinMod! PenguinMod or JMod is not affiliated with Twitch. Created by bop_tw."
                description=""
                id="twitch.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Chess"
                description="extensions"
                id="chess.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/chess-ext.js',
        iconURL: "https://extensions.penguinmod.com/images/Gen1x/chess-ext.png",
        description: (
            <FormattedMessage
                defaultMessage="A powerful extension about Chess. It allows to create a Chessboard, manage chess games, and use Stockfish 17 in your projects. Created by G1nX."
                description="extensions"
                id="chess.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="TurboWeather"
                description="extensions"
                id="turboweather.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/RubyDevs/turboweather.js',
        iconURL: "https://extensions.penguinmod.com/images/RubyDevs/turboweather.webp",
        description: (
            <FormattedMessage
                defaultMessage="Show weather and location data for any place in our world. Data that could be used for doxxing is deleted from results. Created by RubyDevs."
                description="extensions"
                id="turboweather.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="CORS Proxy"
                description="extensions"
                id="corsproxy.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/NamelessCat/corsproxy.js',
        iconURL: "https://extensions.penguinmod.com/images/NamelessCat/corsproxy.png",
        description: (
            <FormattedMessage
                defaultMessage="Accessible CORS Proxies for fetching information with PenguinMod. Created by NamelessCat."
                description="extensions"
                id="corsproxy.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Extension Exposer"
                description="extensions"
                id="extensionexposer.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/TheShovel/extexp.js',
        iconURL: "https://extensions.penguinmod.com/images/TheShovel/placeholder-extexp.png",
        description: (
            <FormattedMessage
                defaultMessage="Access the raw functions from other extensions. Created by TheShovel."
                description="extensions"
                id="extensionexposer.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
        {
        name: (
            <FormattedMessage
                defaultMessage="More Fields"
                description="extensions"
                id="morefields.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/Ashime/MoreFields.js',
        iconURL: "https://extensions.penguinmod.com/images/TheShovel/placeholder-extexp.png",
        description: (
            <FormattedMessage
                defaultMessage="Custom Field Types Created by yuri-kiss."
                description="extensions"
                id="morefields.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Beepbox Player"
                description="extensions"
                id="beepboxplayer.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/DogeisCut/BeepBoxPlayer.js',
        iconURL: "https://extensions.penguinmod.com/images/DogeisCut/BeepBoxPlayer.svg",
        description: (
            <FormattedMessage
                defaultMessage="Play, edit, and read songs from any BeepBox mod directly from the URL or JSON! Created by DogeisCut."
                description="extensions"
                id="beepboxplayer.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="File Upload"
                description="extensions"
                id="fileupload.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/Codefoxy/cfupload.js',
        iconURL: "https://extensions.penguinmod.com/images/Codefoxy/cfupload.svg",
        description: (
            <FormattedMessage
                defaultMessage="Upload files to the Network, can also used with Files extension. Created by Codefoxy."
                description="extensions"
                id="fileupload.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="WindowHasher"
                description="extensions"
                id="windowhasher.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/pooiod/WindowHasher.js',
        iconURL: "https://extensions.penguinmod.com/images/pooiod/WindowHasher.png",
        description: (
            <FormattedMessage
                defaultMessage="Interact with URL hash: the part of the URL after a hashtag Created by pooiod7."
                description="extensions"
                id="windowhasher.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Scratchblocks"
                description="extensions"
                id="scratchblocks.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/pooiod/Scratchblocks.js',
        iconURL: "https://extensions.penguinmod.com/images/pooiod/Scratchblocks.svg",
        description: (
            <FormattedMessage
                defaultMessage="Generate blocks in the Scratch3, or Scratch2 format. Created by pooiod7."
                description="extensions"
                id="scratchblocks.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="CATS"
                description="extensions"
                id="cats.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/CATS.js',
        iconURL: "https://extensions.penguinmod.com/images/Gen1x/cats.png",
        description: (
            <FormattedMessage
                defaultMessage="Blocks related to cats. Created by G1nX."
                description="extensions"
                id="cats.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Counter++"
                description="extensions"
                id="counterplusplus.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/MrRedstonia/counterplusplus.js',
        iconURL: "https://extensions.penguinmod.com/images/MrRedstonia/counterplusplus.png",
        description: (
            <FormattedMessage
                defaultMessage="Count anything, at any time, in PenguinMod! Created by MrRedstonia."
                description="extensions"
                id="counterplusplus.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="How many lines?"
                description="extensions"
                id="howmanylines.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/Monochromasity/howmanylines.js',
        iconURL: "https://extensions.penguinmod.com/images/Monochromasity/placeholder-howmanylines.png",
        description: (
            <FormattedMessage
                defaultMessage="Blocks to determine the amount of new lines in a piece of text. Created by Monochromasity."
                description="extensions"
                id="howmanylines.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Free Servers"
                description="extensions"
                id="freeservers.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/WAYLIVES/FreeServers.js',
        iconURL: "https://extensions.penguinmod.com/images/WAYLIVES/FreeServersIMG.svg",
        description: (
            <FormattedMessage
                defaultMessage="Here you can find a free server for your projects. And also check whether it is working now or not. Здесь вы можете найти бесплатный сервер для своих проектов. А также проверить, работает он сейчас или нет. Created by WAYLIVES."
                description="extensions"
                id="freeservers.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text To Speech: Redone"
                description="extensions"
                id="ttsredone.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/PuzzlingGGG/ttsr.js',
        iconURL: "https://extensions.penguinmod.com/images/PuzzlingGGG/TTSR.png",
        description: (
            <FormattedMessage
                defaultMessage="A better alternitive to the base text to speech extension. Powered by the TTStool API Created by PuzzlingGGG."
                description="extensions"
                id="ttsredone.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sharing"
                description="extensions"
                id="videosharing.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/pooiod/VideoSharing.js',
        iconURL: "https://extensions.penguinmod.com/images/pooiod/VideoSharing.svg",
        description: (
            <FormattedMessage
                defaultMessage="Share your screen or camera to your projects! Created by pooiod."
                description="extensions"
                id="videosharing.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="oneko"
                description="extensions"
                id="oneko.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/TheShovel/oneko.js',
        iconURL: "https://extensions.penguinmod.com/images/TheShovel/thumbnail-oneko.png",
        description: (
            <FormattedMessage
                defaultMessage="Cute cat that follows you on the block area. Created by TheShovel."
                description="extensions"
                id="oneko.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="oneko"
                description="extensions"
                id="oneko.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/TheShovel/oneko.js',
        iconURL: "https://extensions.penguinmod.com/images/TheShovel/thumbnail-oneko.png",
        description: (
            <FormattedMessage
                defaultMessage="Cute cat that follows you on the block area. Created by TheShovel."
                description="extensions"
                id="oneko.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="GPU.sb3"
                description="extensions"
                id="gpu.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/derpygamer2142/gpusb3.js',
        iconURL: "https://extensions.penguinmod.com/images/derpygamer2142/gpusb3.svg",
        description: (
            <FormattedMessage
                defaultMessage="⚠️WebGPU is still experimental and not supported by all browsers and does not work when packaged to electron. Check compatibility at webgpu.io.⚠️Use WebGPU compute shaders to accelerate your projects. Created by derpygamer2142."
                description="extensions"
                id="gpu.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Format Numbers"
                description="extensions"
                id="format-numbers.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://extensions.penguinmod.com/extensions/DogeisCut/FormatNumbers.js',
        iconURL: "https://extensions.penguinmod.com/images/DogeisCut/FormatNumbers.png",
        description: (
            <FormattedMessage
                defaultMessage="Format large numbers into AD standard, fixed decimal, comma separated, or scientific notation.  Created by DogeisCut. Gallery banner by Dillon"
                description="extensions"
                id="format-numbers.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['pm'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Spotify"
                description="Spotify"
                id="spotify.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Spotify.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Spotify.svg",
        description: (
            <FormattedMessage
                defaultMessage="Fetch Statistics, Information, and Play Songs from Spotify"
                description="Spotify"
                id="spotify.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="SoundCloud API"
                description="SoundCloud-API"
                id="soundcloud-api.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/SoundCloud-API.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/SoundCloud-API.svg",
        description: (
            <FormattedMessage
                defaultMessage="Fetch Tracks, Artists, and Statistics from Soundcloud"
                description="SoundCloud-API"
                id="soundcloud-api.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Tune Shark-V3"
                description="Tune-Shark-V3"
                id="tune-shark-v3.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Tune-Shark-V3.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Tune-Shark-V3.svg",
        description: (
            <FormattedMessage
                defaultMessage="Advanced Audio Engine with complex Sound Control, Audio Effects and more"
                description="Sty-Lists"
                id="tune-shark-v3.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Tune Shark"
                description="extenstions"
                id="tune-shark.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Tune-Shark.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Tune-Shark.svg",
        description: (
            <FormattedMessage
                defaultMessage="Outdated Sound Engine for playing sounds. ⚠️ Please use Tune Shark V3 ⚠️"
                description="extenstions"
                id="tune-shark.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Color Master"
                description="Color-Master"
                id="color-master.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Color-Master.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Color-Master.svg",
        description: (
            <FormattedMessage
                defaultMessage="Color Utility and Conversion Blocks"
                description="Color-Master"
                id="color-master.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Display Text"
                description="extenstions"
                id="display-text.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Display-Text.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Display-Text.svg",
        description: (
            <FormattedMessage
                defaultMessage="Display Advanced Text in your Projects"
                description="extenstions"
                id="display-text.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Fetch Plus"
                description="extenstions"
                id="fetch-plus.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Fetch-Plus.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Fetch-Plus.svg",
        description: (
            <FormattedMessage
                defaultMessage="Fetch and Encode Content from URLs while viewing the Progress and Status of the Fetch"
                description="extenstions"
                id="fetch-plus.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="JSON Array"
                description="extenstions"
                id="jsonarray.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/JSON-Array.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/JSON-Array.svg",
        description: (
            <FormattedMessage
                defaultMessage="Super Fast JSON and Array extension Creator: SharkPool"
                description="extenstions"
                id="jsonarray.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Files Expanded"
                description="extenstions"
                id="files-expanded.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Files-Expanded.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Files-Expanded.svg",
        description: (
            <FormattedMessage
                defaultMessage="Expansion of GarboMuffin's File Extension"
                description="extenstions"
                id="files-expanded.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="QR Codes"
                description="extenstion"
                id="qrcode.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/QR-Codes.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/QR-Codes.svg",
        description: (
            <FormattedMessage
                defaultMessage="Create and Read QR Codes on the Client"
                description="extenstion"
                id="qrcode.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Hyper Sense"
                description="extenstion"
                id="hyper-sense.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Hyper-Sense.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Hyper-Sense.svg",
        description: (
            <FormattedMessage
                defaultMessage="New Sensing Blocks"
                description="extenstion"
                id="hyper-sense.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Geolocation"
                description="extenstion"
                id="geolocation.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Geolocation.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Geolocation.svg",
        description: (
            <FormattedMessage
                defaultMessage="Get users' Location and calculate Real-World Distances"
                description="extenstion"
                id="geolocation.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Speech Bubbles"
                description="extenstion"
                id="speech-bubbles.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Speech-Bubbles.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Speech-Bubbles.svg",
        description: (
            <FormattedMessage
                defaultMessage="Customizable Speech Bubbles"
                description="extenstion"
                id="speech-bubbles.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="YouTube Operations"
                description="extenstion"
                id="youtube.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/YouTube-Operations.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/YouTube-Operations.svg",
        description: (
            <FormattedMessage
                defaultMessage="Fetch and play Youtube videos and statistics in your Project"
                description="extenstion"
                id="youtube.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Recording"
                description="extenstion"
                id="recording.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Recording.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Recording.svg",
        description: (
            <FormattedMessage
                defaultMessage="Blocks for Recording your Microphone while your Project runs"
                description="extenstion"
                id="recording.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pause Utilities"
                description="extenstion"
                id="pause.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Pause-Utilities.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Pause-Utilities.svg",
        description: (
            <FormattedMessage
                defaultMessage="Pause your Project, Scripts, and Sprites"
                description="extenstion"
                id="pause.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Advanced Messages"
                description="extenstion"
                id="advanced-messages.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Advanced-Messages.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Advanced-Messages.svg",
        description: (
            <FormattedMessage
                defaultMessage="New Message Blocks for Advanced, Non-Vanilla Purposes"
                description="extenstion"
                id="advanced-messages.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Messages Plus"
                description="extenstion"
                id="messagesplus.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Messages-Plus.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Messages-Plus.svg",
        description: (
            <FormattedMessage
                defaultMessage="Powerful New Message Blocks that work with Vanilla Messages"
                description="extenstion"
                id="messagesplus.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="DOM Selector"
                description="extenstion"
                id="domselector.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/DOM-Selector.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/DOM-Selector.svg",
        description: (
            <FormattedMessage
                defaultMessage="Read Elements and Create Events from the website HTML"
                description="extenstion"
                id="domselector.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Custom Extension"
                description="Name of library item to load a custom extension from a remote source"
                id="tw.customExtension.name"
            />
        ),
        extensionId: 'custom_extension',
        iconURL: customExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Load custom extensions from URLs, files, or JavaScript source code."
                description="Description of library item to load a custom extension from a custom source"
                id="tw.customExtension.description"
            />
        ),
        tags: ['tw'],
        featured: true
        // Not marked as incompatible with Scratch so that clicking on it doesn't show a prompt
    }
];

export const galleryLoading = {
    name: (
        <FormattedMessage
            defaultMessage="Turbowarp Extension Gallery"
            description="Name of extensions.turbowarp.org in extension library"
            id="tw.extensionGallery.name"
            values={{
                APP_NAME
            }}
        />
    ),
    href: 'https://extensions.turbowarp.org/',
    extensionId: 'gallery',
    iconURL: galleryIcon,
    description: (
        <FormattedMessage
            // eslint-disable-next-line max-len
            defaultMessage="Loading extension gallery..."
            description="Appears while loading extension list from the custom extension gallery"
            id="tw.extensionGallery.loading"
        />
    ),
    tags: ['eg'],
    featured: true
};

export const galleryMore = {
    name: (
        <FormattedMessage
            defaultMessage="Turbowarp Extension Gallery"
            description="Name of extensions.turbowarp.org in extension library"
            id="tw.extensionGallery.name"
            values={{
                APP_NAME
            }}
        />
    ),
    href: 'https://extensions.turbowarp.org/',
    extensionId: 'gallery',
    iconURL: galleryIcon,
    description: (
        <FormattedMessage
            // eslint-disable-next-line max-len
            defaultMessage="Learn more about extensions at extensions.turbowarp.org."
            description="Appears after the extension list from the gallery was loaded successfully"
            id="tw.extensionGallery.more"
        />
    ),
    tags: ['eg'],
    featured: true
};

export const galleryError = {
    name: (
        <FormattedMessage
            defaultMessage="Turbowarp Extension Gallery"
            description="Name of extensions.turbowarp.org in extension library"
            id="tw.extensionGallery.name"
            values={{
                APP_NAME
            }}
        />
    ),
    href: 'https://extensions.turbowarp.org/',
    extensionId: 'gallery',
    iconURL: galleryIcon,
    description: (
        <FormattedMessage
            // eslint-disable-next-line max-len
            defaultMessage="Error loading extension gallery. Visit extensions.turbowarp.org to find more extensions."
            description="Appears when an error occurred loading extension list from the custom extension gallery"
            id="tw.extensionGallery.error"
        />
    ),
    tags: ['eg'],
    featured: true
};
