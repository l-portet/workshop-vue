import mails from './mails.json';

export default {
  getMails() {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(mails) }, 500);
    });
  },
  postMails() {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve() }, 500);
    });
  }
};
