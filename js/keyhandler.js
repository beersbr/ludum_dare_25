
function bind(scope, fn)
{
  return (function(){
    fn.apply(scope, arguments);
  });
}

function MouseHandler(el){
  this.keys = {};
  this.mouseDown = {x: undefined, y: undefined};
  this.mousePos = {x: undefined, y: undefined};

  this.mouseClick = undefined;

  this.clicked = function(){
    var click = this.mouseClick;
    this.mouseClick = undefined;
    return click;
  }

  this.MouseUp = function(event)
  {
    // event.stopPropagation();
    // event.preventDefault();
    // console.log("mouseup");
  }

  this.MouseDown = function(event)
  {
    event.stopPropagation();
    event.preventDefault();

    this.mouseDown.x = event.offsetX;
    this.mouseDown.y = event.offsetY;
    // console.log("mousedown");
  }

  this.MouseMove = function(e)
  {
    this.mousePos.x = e.x;
    this.mousePos.y = e.y;
  }

  this.MouseClick = function(e)
  {
    e.stopPropagation();
    e.preventDefault();

    this.mouseClick = {};
    this.mouseClick.x = e.offsetX;
    this.mouseClick.y = e.offsetY;
  }

  // attach touch listeners
  el.addEventListener("touchstart", bind(this, this.MouseUp));
  el.addEventListener("touchend", bind(this, this.MouseDown));

  // Attach mouse listeners
  el.addEventListener("mouseup", bind(this, this.MouseUp));
  el.addEventListener("mousedown", bind(this, this.MouseDown));
  el.addEventListener("mousemove", bind(this, this.MouseMove));
  el.addEventListener("click", bind(this, this.MouseClick));

  // Attach keyboard listeners
  // window.addEventListener("keyup", bind(this, this.KeyUp));
  // window.addEventListener("keydown", bind(this, this.KeyDown));
}

function KeyboardHandler()
{
  this.setKey = function(key)
  {
    // If we are setting the key for the first time make sure it has a value
    if(this.keyStates[key.keyCode] == null) this.keyStates[key.keyCode] = false;
    this.keyStates[key.keyCode] = true;
    return true;
  }

  // unsets the key in the buffer variable
  this.unsetKey = function(key)
  {
    this.keyStates[key.keyCode] = false;
    this.pressed_keys[key.keyCode] = true;

    return true;
  }

  // This is just a getter to make the later syntax easier to read through
  this.key = function(key_value)
  {
    if(this.keyStates[key_value]) return true;
    return false;
  }

  this.keyIsDown = function(letter)
  {
    if(this.keyStates[keyHash[letter]]) return true;
    return false;
  }

  this.keyPressed = function(letter)
  {
    return this.pressed_keys[keyHash[letter]];
  }

  this.setKeyPressed = function(letter)
  {
    // console.log(letter);
  }

  this.cleaner = function()
  {
    this.pressed_keys = {};
  }

  this.listenOffsetX = 0;
  this.listenOffsetY = 0;
  this.mx = 0;
  this.my = 0;

  this.pressed_keys = {};
  this.keyStates = {};

  var keyHash = {'backspace': 8,'tab': 9,'enter': 13,'shift': 16,'ctrl': 17,'alt': 18,'pause_break': 19,'caps_lock': 20,'escape': 27,'page_up': 33,'page_down': 34,'end': 35,'home': 36,'left_arrow': 37,'up_arrow': 38,'right_arrow': 39,'down_arrow': 40,'insert': 45,'delete': 46,'0': 48,'1': 49,'2': 50,'3': 51,'4': 52,'5': 53,'6': 54,'7': 55,'8': 56,'9': 57,'a': 65,'b': 66,'c': 67,'d': 68,'e': 69,'f': 70,'g': 71,'h': 72,'i': 73,'j': 74,'k': 75,'l': 76,'m': 77,'n': 78,'o': 79,'p': 80,'q': 81,'r': 82,'s': 83,'t': 84,'u': 85,'v': 86,'w': 87,'x': 88,'y': 89,'z': 90,'left_window_key': 91,'right_window_key': 92,'select_key': 93,'numpad_0': 96,'numpad_1': 97,'numpad_2': 98,'numpad_3': 99,'numpad_4': 100,'numpad_5': 101,'numpad_6': 102,'numpad_7': 103,'numpad_8': 104,'numpad_9': 105,'multiply': 106,'add': 107,'subtract': 109,'decimal_point': 110,'divide': 111,'f1': 112,'f2': 113,'f3': 114,'f4': 115,'f5': 116,'f6': 117,'f7': 118,'f8': 119,'f9': 120,'f10': 121,'f11': 122,'f12': 123,'num_lock': 144,'scroll_lock': 145,'semi_colon': 186,'equal_sign': 187,'comma': 188,'dash': 189,'period': 190,'forward_slash': 191,'grave_accent': 192,'open_bracket': 219,'back_slash': 220,'close_braket': 221,'single_quote': 222};
  window.addEventListener("keydown", bind(this, this.setKey), false);
  window.addEventListener("keyup", bind(this, this.unsetKey), false);
  window.addEventListener("keypress", bind(this, this.setKeyPressed), false);

  console.log("KeyHandler initialized!");
}