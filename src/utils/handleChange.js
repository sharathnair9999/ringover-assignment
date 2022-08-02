export const handleChange = (e, setter) => {
  e.preventDefault();
  e.stopPropagation();
  setter(e.target.value);
};
