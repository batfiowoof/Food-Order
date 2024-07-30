export const validateName = (name) => {
  if (!name.trim()) {
    return "Name is required";
  }
  return "";
};

export const validateStreet = (street) => {
  if (!street.trim()) {
    return "Street is required";
  }
  return "";
};

export const validatePostal = (postal) => {
  if (!postal.trim()) {
    return "Postal Code is required";
  }
  if (!/^\d{5}$/.test(postal)) {
    return "Postal Code is invalid";
  }
  return "";
};

export const validateCity = (city) => {
  if (!city.trim()) {
    return "City is required";
  }
  return "";
};

export const validateEmail = (email) => {
  if (!email.trim()) {
    return "Email is required";
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return "Email is invalid";
  }
  return "";
};
