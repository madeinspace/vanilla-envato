export function sortByKey(data, key) {
  return data.sort((a, b) => b[key] - a[key]);
}

export function tag(literalSections, ...substs) {
  let finalString = '';
  substs.forEach((subst, i) => {
    // remove the "," if it's an array of subs
    if (Array.isArray(subst)) {
      subst = subst.join('');
    }
    finalString += literalSections[i];
    finalString += subst;
  });
  finalString += literalSections[literalSections.length - 1];
  return finalString;
}

export class PubSub {
  constructor() {
    this.messages = {};
  }

  sub(message, listenerFn) {
    if (!this.messages.hasOwnProperty(message)) {
      this.messages[message] = [];
    }
    this.messages[message].push(listenerFn);
  }

  trigger(message, data) {
    if (!this.messages[message]) {
      return;
    }
    this.messages[message].forEach(listner => listner(data));
  }
}
