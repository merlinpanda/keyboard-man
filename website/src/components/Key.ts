
interface KeyItemInterface {
  altKey: boolean;
  charCode: number;
  code: string;
  composed: boolean;
  ctrlKey: boolean;
  isComposing: boolean;
  key: string;
  keyCode: number;
  shiftKey: boolean;
}

const Keys: KeyItemInterface[] = [
  {
    altKey: false,
    charCode: 97,
    code: 'KeyA',
    composed: true,
    ctrlKey: false,
    isComposing: false,
    key: 'a',
    keyCode: 97,
    shiftKey: false
  },
  {
    altKey: false,
    charCode: 98,
    code: 'KeyB',
    composed: true,
    ctrlKey: false,
    isComposing: false,
    key: 'b',
    keyCode: 98,
    shiftKey: false
  },
  {
    altKey: false,
    charCode: 99,
    code: 'KeyC',
    composed: true,
    ctrlKey: false,
    isComposing: false,
    key: 'c',
    keyCode: 99,
    shiftKey: false
  },
  {
    altKey: false,
    charCode: 100,
    code: 'KeyD',
    composed: true,
    ctrlKey: false,
    isComposing: false,
    key: 'd',
    keyCode: 100,
    shiftKey: false
  },
  {
    altKey: false,
    charCode: 101,
    code: 'KeyE',
    composed: true,
    ctrlKey: false,
    isComposing: false,
    key: 'e',
    keyCode: 101,
    shiftKey: false
  }
]

class Key {

  charCode(wordNumber: number) {
    return String.fromCharCode(wordNumber);
  }

  charge(word: string) {
    return this
  }

  getItem() {
    return 1;
  }
}

export default Key
