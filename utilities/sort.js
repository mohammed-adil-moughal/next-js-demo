const sortAlphabetically = (users, field) => {
    const newArray = [].concat(users)
    return newArray.sort(function (a, b) {
      //default first name sort
      let fieldA = a.name.first.toUpperCase();
      let fieldB = b.name.first.toUpperCase();
      if (field === 'email') {
        fieldA = a.email.toUpperCase();
        fieldB = b.email.toUpperCase();
      }
      if (field === 'last') {
        fieldA = a.name.last.toUpperCase();
        fieldB = b.name.last.toUpperCase();
      }

      if (fieldA < fieldB) {
        return -1;
      } else if (fieldA > fieldB) {
        return 1;
      }
      return 0;
    })
  }

  export default sortAlphabetically;