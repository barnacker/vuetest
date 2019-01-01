const notEmptyRules = value => !!value || 'Cannot be empty';

// export function notEmptyRules(value) {
//   return !!value || 'Cannot be empty';
// }

const validEmail = (value) => {
  // eslint-disable-next-line
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(value) || 'Invalid e-mail.';
};

export { notEmptyRules, validEmail };

export default {};
