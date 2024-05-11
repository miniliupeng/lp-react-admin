export const getPwdValidator = (pwdRule) => () => ({
  validator(rule, value) {
    if (value?.length > 0) {
      const chineseReg = /[\u4e00-\u9fa5]/;
      const numberReg = /[0-9]/;
      const upperReg = /[A-Z]/;
      const lowerReg = /[a-z]/;
      const charReg = /[`~'"!@#$%^&*()~,.?/{}<>[\]]/;
      const { number, upper, lower, special_char: char } = pwdRule!.pwd_strength;
      if (chineseReg.test(value)) {
        return Promise.reject('不允许包含中文');
      }
      if (number === 1 && !numberReg.test(value)) {
        return Promise.reject('必须包含数字');
      }
      if (upper === 1 && !upperReg.test(value)) {
        return Promise.reject('必须包含大写字母');
      }
      if (lower === 1 && !lowerReg.test(value)) {
        return Promise.reject('必须包含小写字母');
      }
      if (char === 1 && !charReg.test(value)) {
        return Promise.reject('必须包含`~\'"!@#$%^&*()~,.?/{}<>[]');
      }
      if (value.length < pwdRule!.pwd_shortest_length || value.length > 50) {
        return Promise.reject(`密码长度必须大于等于${pwdRule!.pwd_shortest_length}, 小于50`);
      }
    }

    return Promise.resolve();
  }
});

export const getComfirmPwdValidator =
  (pwdRule) =>
  ({ getFieldValue }) => ({
    validator(rule, value) {
      if (value?.length > 0) {
        const chineseReg = /[\u4e00-\u9fa5]/;
        const numberReg = /[0-9]/;
        const upperReg = /[A-Z]/;
        const lowerReg = /[a-z]/;
        const charReg = /[`~'"!@#$%^&*()~,.?/{}<>[\]]/;
        const { number, upper, lower, special_char: char } = pwdRule!.pwd_strength;
        if (chineseReg.test(value)) {
          return Promise.reject('不允许包含中文');
        }
        if (number === 1 && !numberReg.test(value)) {
          return Promise.reject('必须包含数字');
        }
        if (upper === 1 && !upperReg.test(value)) {
          return Promise.reject('必须包含大写字母');
        }
        if (lower === 1 && !lowerReg.test(value)) {
          return Promise.reject('必须包含小写字母');
        }
        if (char === 1 && !charReg.test(value)) {
          return Promise.reject('必须包含`~\'"!@#$%^&*()~,.?/{}<>[]');
        }
        if (value.length < pwdRule!.pwd_shortest_length || value.length > 50) {
          return Promise.reject(`密码长度必须大于等于${pwdRule!.pwd_shortest_length}, 小于50`);
        }
        if (getFieldValue('password') !== value) {
          return Promise.reject('两次密码不一致');
        }
      }

      return Promise.resolve();
    }
  });
