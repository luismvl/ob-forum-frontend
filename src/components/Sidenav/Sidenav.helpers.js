export const desideIcon = (icon, label) => {
  if (!icon) return <MdHideImage />
  if (typeof icon === 'string') return <img src={icon} alt={label} />

  return icon
}
