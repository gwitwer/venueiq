const saveUser = user => {
  const fields = [
    'cuid',
    'access_token',
    'email',
  ];
  const save = {};
  fields.forEach(f => { save[f] = user[f] });
  return save;
}

export default saveUser;
