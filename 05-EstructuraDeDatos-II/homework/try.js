function LinkedList() {
  this.head = null;
  this._length = 0;

  this.add = function (el) {
    var node = new Node(el);
    var current = this.head;
    if (!current) {
      this.head = node;
      this._length++;
      return node;
    }
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this._length++;
    return node;
  };

  this.remove = function () {
    var current = this.head;
    var removed;
    let a;
    if (this._length === 0) {
      return null;
    } else if (this._length === 1) {
      removed = current.value;
      this.head = null;
      this._length--;
      return removed;
    }

    while (current.next.next) {
      current = current.next;
      a = current;
    }
    removed = current.next.value;
    current.next = null;
    this._length--;
    return removed;
  };

  this.search = function (el) {
    var current = this.head;
    var boolean = null;
    while (current && !boolean) {
      if (el == current.value) {
        return current.value;
      } else if (typeof current.value == "function") {
        el(current.value) ? (boolean = current.value) : null;
      } else if (typeof current.value == "object") {
        Object.values(current.value).some((act) => act == el)
          ? (boolean = Object.values(current.value).find((act) => act == el))
          : null;
      }
      current = current.next;
    }
    return boolean;
  };
}

function Node(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedList();
a.add("first");
a.add({ ae: "a" });
a.search("a");
console.log(a.search("aa"));
