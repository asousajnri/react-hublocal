export const getState = (key) => {
  const storageValue = localStorage.getItem(key);

  if (storageValue) {
    return JSON.parse(storageValue);
  } else {
    return null;
  }
};

export const setState = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
