class TrieNode {
  constructor(key) {
    this.childNodes = {};
    for (let i = 0; i < 26; i++) {
      this.childNodes = {
        ...this.childNodes,
        [String.fromCharCode(97 + i)]: null,
      };
    }
  }
}
export class Trie {
  constructor() {
    this.root = new TrieNode("root");
    this.isEndOfCharacter = true;
  }
  isEmpty() {
    return this.isEndOfCharacter;
  }
  insert(value) {
    if (!value || typeof value !== "string") {
      return false;
    }
    let i = 0;
    let temp = this.root;
    let keyLength = value.length;
    while (i < keyLength) {
      let key = value[i];
      if (!temp.childNodes[key]) temp.childNodes[key] = new TrieNode();
      temp = temp.childNodes[key];
      i++;
    }

    this.isEndOfCharacter = false;
  }
  search(key) {
    let temp = this.root;
    if (this.isEmpty()) {
      console.log("trie is empty ");
      return "not found";
    }
    let flag = 1;
    let i = 0;
    while (i < key.length) {
      temp = temp.childNodes[key[i++]];
      if (!temp) {
        flag = 0;
        break;
      }
    }
    if (flag) {
      let notEnd = false;
      Object.keys(temp.childNodes).map((k) => {
        if (temp.childNodes[k]) {
          notEnd = true;
        }
      });
      notEnd ? console.log("Not found") : console.log("Found");
    } else {
      console.log("Not found");
    }

    return;
  }
}
