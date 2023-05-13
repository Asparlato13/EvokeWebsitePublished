(function() {
 const messages = JSON.parse("{\"ujcMeA\":\"Hide drumroll\",\"uro5mA\":\"Blur\",\"TcphGg\":\"Timer played with {0, plural, one {# minute} other {# minutes}} and {1, plural, one {# second} other {# seconds}} remaining\",\"wXGXXA\":\"Start timer\",\"hGVmeQ\":\"Sorry, something went wrong. Check your internet connection and try again.\",\"YNl7nw\":\"Sorry, something went wrong on our end. Attempting to reconnect.\",\"enXwmA\":\"Quiet\",\"MXbOaw\":\"Presenter View\",\"hK3MEg\":\"Exit presentation\",\"24/B0Q\":\"Close\",\"YjHcCA\":\"Resume\",\"ba2X+Q\":\"Audience Window\",\"9KL4Dw\":\"{0, number, percent}\",\"29azLg\":\"Don't show this message again\",\"tD6Ijg\":\"Hide\",\"GZXnJQ\":\"Hide Magic Cursor\",\"Df0GgQ\":\"Time is up\",\"lZbP1A\":\"Pie\",\"unwCJw\":\"Bubbles\",\"4x58NA\":\"Paused ({0, number})\",\"GXT9dQ\":\"Show Magic Cursor\",\"jkrHpg\":\"Ask your audience to visit <span class=\\\"{0}\\\">{1}</span> on their device and enter the code <span class=\\\"{0}\\\">{2}</span> to participate.\",\"ZEXBPw\":\"Zoom in and out\",\"60Dntg\":\"Sorry, something went wrong. Try refreshing the page.\",\"bSXSAw\":\"Reset presentation timer\",\"mTdshw\":\"A face with the index finger over the mouth, indicating quiet\",\"Y5sGrA\":\"Invite\",\"P0y2UQ\":\"Attempting to reconnect. Please check your internet connection.\",\"6FAH0w\":\"Spider\",\"w6rgyw\":\"Zoom in and out\",\"RS32iw\":\"Mic drop\",\"tqkhwA\":\"Ghost\",\"s4dFhQ\":\"Presenter Window\",\"bZNV3g\":\"Hide live edits\",\"wYU7Gw\":\"A hand dropping a mic\",\"BpP4Lw\":\"Take over\",\"4aZhcQ\":\"LIVE\",\"Aj/Spw\":\"Pause controls\",\"kCJlrA\":\"Timer\",\"p65+lQ\":\"End session\",\"ct2Hrw\":\"Hide pie\",\"WwdX8A\":\"Timer set for {0, plural, one {# minute} other {# minutes}} and {1, plural, one {# second} other {# seconds}}\",\"+VEabw\":\"Share remote control\",\"6lcBQA\":\"Start new session\",\"r/ivVA\":\"Close blur\",\"jdPy5g\":\"Magic Shortcuts\",\"0HHkgA\":\"Navigate the canvas\",\"dbrwXw\":\"Learn more about Canva Live\",\"N+zewA\":\"Close\",\"Z+BHtg\":\"Pause presentation timer\",\"jF6jkA\":\"Anyone with the link can control the navigation in this presentation.\",\"y9RQHw\":\"Confetti effect plays\",\"x5PaAA\":\"Copied!\",\"KP4NKA\":\"Hide falling leaves\",\"ILguyg\":\"Got it\",\"W+bvGQ\":\"Show\",\"RqLL1A\":\"Your presentation is open in another window. Select \\\"{0}\\\" to use this window instead.\",\"zru6qQ\":\"Hide jingle bells\",\"8l6Bdw\":\"Music Volume\",\"4/g1IQ\":\"Jingle bells\",\"ng4GAA\":\"A curtain hiding the slide\",\"L2qZMA\":\"Timer played with {0, plural, one {# second} other {# seconds}} remaining\",\"yJA10A\":\"Close timer\",\"AfwL9Q\":\"Play presentation timer\",\"AmbEnw\":\"Exit presentation\",\"3JtHQw\":\"Confetti\",\"uq2EBw\":\"Curtain call\",\"drIEIQ\":\"Pause timer\",\"TWI/Lg\":\"More\",\"MMJgkA\":\"Presentation progress bar\",\"K6ce1A\":\"Falling leaves\",\"B1egzw\":\"Start an interactive Q&A and let your audience join from any device\",\"wRhfFw\":\"Canva Live\",\"aCi0Gg\":\"Copy link\",\"pdV8VQ\":\"Copied\",\"rHI/uQ\":\"Drag this window to the screen your audience will be looking at and enter full screen.\",\"p8dskw\":\"Canva Live\",\"vBzkfQ\":\"Connected ({0, number})\",\"MCl4OA\":\"Hide ghost\",\"O6LUEA\":\"This window is what your audience sees. Drag it to the screen your audience will be looking at and enter full screen mode.\",\"nB4hOw\":\"Clear\",\"uM8o7g\":\"Try again\",\"GhwAWw\":\"Zoom out\",\"3FvsVQ\":\"Interactive Q&A with Canva Live\",\"bVRZCA\":\"Move around the infinite canvas with zoom and pan options.\",\"iaojVg\":\"This window is just for you. Place it on the screen only you can see, such as your laptop or a fallback monitor.\",\"PG6NSw\":\"End\",\"R4SSJw\":\"Timer set for {0, plural, one {# second} other {# seconds}}\",\"BpljMw\":\"Bubbles effect plays\",\"moEUvA\":\"Zoom\",\"ssVZuQ\":\"Timer paused with {0, plural, one {# second} other {# seconds}} remaining\",\"GiTizQ\":\"Timer paused with {0, plural, one {# minute} other {# minutes}} and {1, plural, one {# second} other {# seconds}} remaining\",\"T7YOXQ\":\"Connecting\",\"nfRfBw\":\"Canva Live\",\"0igReg\":\"Audience Window\",\"Xbkb8A\":\"Magic Shortcuts\",\"KAcj/w\":\"Reset timer\",\"f5q3ew\":\"Page {0}\",\"MBo60g\":\"Hide spider\",\"y7euyg\":\"Enter full screen mode\",\"t5LGpg\":\"Show live edits\",\"ywyhew\":\"Audience Window - {0}\",\"O5pi4g\":\"INVITE PEOPLE TO JOIN\",\"j9W7Cg\":\"Unveil curtain\",\"m/z4vA\":\"Copy invitation\",\"v8Qayw\":\"Join audience Q&A: {0}\\nEnter the code: {1}\",\"GFnwPg\":\"Updates from collaborators are shown in real-time\",\"KhsP4Q\":\"Fit\",\"Xjlm0w\":\"Pan the page\",\"OypyKw\":\"Zoom controls\",\"rZkydQ\":\"Zoom in\",\"1wA2oA\":\"Disconnected\",\"lLgEBg\":\"Remote control your presentation from another device\",\"qso+5Q\":\"Drumroll\"}");
 const cmsg = window["cmsg"] = window["cmsg"] || {};
 const strings = cmsg["strings"] = cmsg["strings"] || {};
 strings["en"] = strings["en"] ? Object.assign(strings["en"], messages) : messages;
})();