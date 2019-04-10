import mails from './mails.json';

export default {
  getMails() {
    return mails;
  },
  postMails() {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve() }, 500);
    });
  }
};
