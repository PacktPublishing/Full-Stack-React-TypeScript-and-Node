export const isThreadTitleValid = (title: string) => {
  return isStringValid("Title", title, 5, 150);
};

export const isThreadBodyValid = (body: string) => {
  return isStringValid("Body", body, 10, 2500);
};

export const isStringValid = (
  label: string,
  str: string,
  min: number,
  max: number
) => {
  if (!str) return `${label} cannot be empty.`;
  if (str.length < 5) {
    return `${label} must be at least ${min} characters.`;
  }
  if (str.length > 150) {
    return `${label} cannot be greater than ${max} characters.`;
  }
  return "";
};
